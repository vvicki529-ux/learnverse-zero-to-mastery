"""Executable solution for the process-pool measurement lab."""

from concurrent.futures import ProcessPoolExecutor
from multiprocessing import get_context
from time import perf_counter


def sum_squares(limit):
    if limit < 0:
        raise ValueError("negative limit")
    return sum(number * number for number in range(limit))


def main():
    jobs = [80_000, 100_000, 120_000]
    start = perf_counter()
    sequential = [sum_squares(job) for job in jobs]
    sequential_seconds = perf_counter() - start
    start = perf_counter()
    with ProcessPoolExecutor(max_workers=2, mp_context=get_context("spawn")) as pool:
        futures = [pool.submit(sum_squares, job) for job in jobs]
        parallel = [future.result() for future in futures]
        failed = pool.submit(sum_squares, -1)
        try:
            failed.result()
        except ValueError as error:
            error_text = str(error)
    pool_seconds = perf_counter() - start
    assert sequential == parallel
    print("same answers:", sequential == parallel)
    print("worker error:", error_text)
    print("durations nonnegative:", sequential_seconds >= 0 and pool_seconds >= 0)


if __name__ == "__main__":
    main()
