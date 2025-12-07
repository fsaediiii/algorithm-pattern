import Comparator from "../../utils/comparator.util";

export class SelectionSort {
  private compare: Comparator<number>;

  constructor(compareCallback?: (a: number, b: number) => number) {
    this.compare = new Comparator(compareCallback);
  }

  sort(array: number[]): number[] {
    const result = [...array];

    for (let i = 0; i < result.length - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < result.length; j++) {
        if (this.compare.lessThan(result[j], result[minIndex])) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        this.swap(result, i, minIndex);
      }
    }

    return result;
  }

  private swap(arr: number[], i: number, j: number): void {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
