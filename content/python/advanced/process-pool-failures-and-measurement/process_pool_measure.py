"""Saved-script comparison of correct sequential and spawned-pool scoring."""

from concurrent.futures import ProcessPoolExecutor
from multiprocessing import get_context
from time import perf_counter


def sum_squares(limit):
    if limit < 0:
        raise ValueError("negative limit")
    return sum(number * number for number in range(limit))


def main():
    jobs = [100_000, 120_000, 140_000, 160_000]
    started = perf_counter()
    sequential = [sum_squares(job) for job in jobs]
    sequential_seconds = perf_counter() - started

    started = perf_counter()
    with ProcessPoolExecutor(max_workers=2, mp_context=get_context("spawn")) as pool:
        futures = [pool.submit(sum_squares, job) for job in jobs]
        parallel = [future.result() for future in futures]
        bad = pool.submit(sum_squares, -1)
        try:
            bad.result()
        except ValueError as error:
            failure = str(error)
    pool_seconds = perf_counter() - started

    assert sequential == parallel
    print("same answers:", sequential == parallel)
    print("worker error:", failure)
    print("durations nonnegative:", sequential_seconds >= 0 and pool_seconds >= 0)
    print("seconds sequential/pool:", round(sequential_seconds, 4), round(pool_seconds, 4))


if __name__ == "__main__":
    main()
