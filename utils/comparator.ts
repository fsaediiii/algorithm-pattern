export default class Comparator<T> {
  constructor() {}

  /**
   * Default compare function for numbers or strings.
   *
   * Compares two values and returns:
   *  - 0 if they are equal
   *  - -1 if the first value is less than the second
   *  - 1 if the first value is greater than the second
   *
   * @param {T} a - The first value to compare
   * @param {T} b - The second value to compare
   * @returns {number} - 0 if equal, -1 if a < b, 1 if a > b
   */
  defaultCompare(a: T, b: T): number {
    if (a === b) return 0;
    if (a < b) return -1;
    return 1;
  }
}
