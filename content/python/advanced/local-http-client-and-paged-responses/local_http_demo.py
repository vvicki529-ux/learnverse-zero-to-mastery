"""Offline loopback HTTP fixture: real client behavior, no third-party service."""

import json
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from threading import Thread
from urllib.parse import parse_qs, urlsplit
from urllib.request import ProxyHandler, build_opener


class CourseHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed = urlsplit(self.path)
        page = parse_qs(parsed.query).get("page", ["1"])[0]
        if parsed.path != "/courses" or page not in {"1", "2"}:
            self.send_error(404)
            return
        body = json.dumps({"items": ["Python"] if page == "1" else ["SQL"],
                           "next": 2 if page == "1" else None}).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, format, *args):
        pass  # Keep the local lesson output focused.


def collect_courses(base_url):
    opener = build_opener(ProxyHandler({}))  # Keep loopback traffic local.
    courses, page = [], 1
    for _ in range(3):  # A hard stop protects against a broken next cursor.
        with opener.open(f"{base_url}/courses?page={page}", timeout=2) as response:
            if response.headers.get_content_type() != "application/json":
                raise ValueError("unexpected content type")
            raw = response.read(4097)
            if len(raw) > 4096:
                raise ValueError("response too large")
            payload = json.loads(raw)
        if not isinstance(payload.get("items"), list):
            raise ValueError("invalid item list")
        courses.extend(payload["items"])
        page = payload.get("next")
        if page is None:
            return courses
        if page not in {1, 2}:
            raise ValueError("invalid next page")
    raise RuntimeError("page limit reached")


def main():
    server = ThreadingHTTPServer(("127.0.0.1", 0), CourseHandler)
    thread = Thread(target=server.serve_forever)
    thread.start()
    try:
        base_url = f"http://127.0.0.1:{server.server_port}"
        print(collect_courses(base_url))
    finally:
        server.shutdown()
        server.server_close()
        thread.join()


if __name__ == "__main__":
    main()
