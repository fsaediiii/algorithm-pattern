import { SelectionSort } from "./selection";

describe("SelectionSort", () => {
  let sorter: SelectionSort;

  beforeEach(() => {
    sorter = new SelectionSort();
  });

  test("should sort an array of numbers", () => {
    const result = sorter.sort([5, 3, 8, 1, 2]);
    expect(result).toEqual([1, 2, 3, 5, 8]);
  });

  test("should return empty array when input is empty", () => {
    const result = sorter.sort([]);
    expect(result).toEqual([]);
  });

  test("should handle already sorted array", () => {
    const result = sorter.sort([1, 2, 3, 4]);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test("should handle array with duplicated numbers", () => {
    const result = sorter.sort([4, 2, 4, 1]);
    expect(result).toEqual([1, 2, 4, 4]);
  });

  test("should handle single element array", () => {
    const result = sorter.sort([7]);
    expect(result).toEqual([7]);
  });
});
