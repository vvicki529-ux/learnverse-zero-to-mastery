"""Local SQLite inbox model; :memory: is intentionally not durable."""

import sqlite3


def accept(connection, delivery_id, payload):
    try:
        with connection:
            connection.execute(
                "INSERT INTO inbox(delivery_id, payload, state) VALUES (?, ?, 'queued')",
                (delivery_id, payload),
            )
    except sqlite3.IntegrityError:
        return "duplicate"
    return "queued"


def process_one(connection):
    row = connection.execute(
        "SELECT delivery_id, payload FROM inbox WHERE state = 'queued' ORDER BY delivery_id LIMIT 1"
    ).fetchone()
    if row is None:
        return None
    with connection:
        connection.execute(
            "UPDATE inbox SET state = 'done' WHERE delivery_id = ? AND state = 'queued'",
            (row[0],),
        )
    return row


def main():
    connection = sqlite3.connect(":memory:", autocommit=False)
    try:
        with connection:
            connection.execute(
                "CREATE TABLE inbox(delivery_id TEXT PRIMARY KEY, payload TEXT NOT NULL, state TEXT NOT NULL)"
            )
        print(accept(connection, "d-1", "PY-101"))
        print(accept(connection, "d-1", "PY-101"))
        print(process_one(connection))
        print(process_one(connection))
    finally:
        connection.close()


if __name__ == "__main__":
    main()
