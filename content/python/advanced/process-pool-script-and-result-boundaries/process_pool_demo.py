"""Local script companion for the process-pool lesson; run as a file, not in a REPL."""

from concurrent.futures import ProcessPoolExecutor
from multiprocessing import get_context


def score_points(points):
    """Return a small independent CPU result; reject malformed work."""
    if any(point < 0 for point in points):
        raise ValueError("negative point")
    return sum(point * point for point in points)


def main():
    jobs = [(2, 3), (4, 5), (-1, 2)]
    with ProcessPoolExecutor(max_workers=2, mp_context=get_context("spawn")) as pool:
        futures = [pool.submit(score_points, job) for job in jobs]
        outcomes = []
        for future in futures:
            try:
                outcomes.append(("ok", future.result()))
            except ValueError as error:
                outcomes.append(("error", str(error)))
    print(outcomes)


if __name__ == "__main__":
    main()
