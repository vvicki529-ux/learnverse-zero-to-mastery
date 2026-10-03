"""Saved-script companion for the local process-pipe lesson."""

from multiprocessing import get_context


def worker(connection):
    try:
        connection.send({"course": "PY-201", "points": 12})
    finally:
        connection.close()


def main():
    context = get_context("spawn")
    receiving, sending = context.Pipe(duplex=False)
    child = context.Process(target=worker, args=(sending,))
    child.start()
    sending.close()  # The parent does not own the child-side sending end.
    try:
        if not receiving.poll(5):
            raise TimeoutError("worker did not send a result")
        result = receiving.recv()
    finally:
        receiving.close()
        child.join(timeout=5)
        if child.is_alive():
            child.terminate()
            child.join()
    if child.exitcode != 0:
        raise RuntimeError(f"worker exited with {child.exitcode}")
    print(result)


if __name__ == "__main__":
    main()
