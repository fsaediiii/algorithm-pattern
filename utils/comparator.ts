/**
 * Comparator class to compare two values of type T.
 *
 * Provides methods to check equality, less than, greater than, etc.
 *
 * @template T - Type of values to compare
 */

export default class Comparator<T extends string | number> {
  private compare: (_a: T, _b: T) => number;

  /**
   * Creates a new Comparator instance.
   *
   * @param {function(a: T, b: T): number} [compareFunction] - Optional custom compare function.
   * If not provided, a default compare function is used (works for numbers and strings).
   */
  constructor(compareFunction?: (_a: T, _b: T) => number) {
    this.compare = compareFunction || this.defaultCompare;
  }

  /**
   * Default compare function for numbers or strings.
   *
   * Compares two values and returns:
   *  - 0 if they are equal
   *  - -1 if the first value is less than the second
   *  - 1 if the first value is greater than the second
   *
   * @param {T} _a - The first value to compare.
   * @param {T} _b - The second value to compare.
   * @returns {number} 0 if equal, -1 if _a < _b, 1 if _a > _b.
   */
  defaultCompare(_a: T, _b: T): number {
    if (_a === _b) return 0;
    if (_a < _b) return -1;
    return 1;
  }

  /**
   * Checks whether two values are considered equal by the comparator.
   *
   * @param {T} _a - The first value to compare.
   * @param {T} _b - The second value to compare.
   * @returns {boolean} Returns `true` if comparator returns 0 (meaning equal).
   */
  equal(_a: T, _b: T): boolean {
    return this.compare(_a, _b) === 0;
  }

  /**
   * Checks if the first value is less than the second value.
   *
   * @param {T} _a - The first value to compare.
   * @param {T} _b - The second value to compare.
   * @returns {boolean} True if `_a` is less than `_b`, otherwise false.
   */
  lessThan(_a: T, _b: T): boolean {
    return this.compare(_a, _b) < 0;
  }

  /**
   * Checks if the first value is greater than the second value.
   *
   * @param {T} _a - The first value to compare.
   * @param {T} _b - The second value to compare.
   * @returns {boolean} True if `_a` is greater than `_b`, otherwise false.
   */
  greaterThan(_a: T, _b: T): boolean {
    return this.compare(_a, _b) > 0;
  }

  /**
   * Checks if the first value is less than or equal to the second value.
   *
   * @param {T} _a - The first value to compare.
   * @param {T} _b - The second value to compare.
   * @returns {boolean} True if `_a` is less than or equal to `_b`, otherwise false.
   */
  lessThanOrEqual(_a: T, _b: T): boolean {
    return this.compare(_a, _b) <= 0;
  }

  /**
   * Checks if the first value is greater than or equal to the second value.
   *
   * @param {T} _a - The first value to compare.
   * @param {T} _b - The second value to compare.
   * @returns {boolean} True if `_a` is greater than or equal to `_b`, otherwise false.
   */
  greaterThanOrEqual(_a: T, _b: T): boolean {
    return this.compare(_a, _b) >= 0;
  }

  /**
   * Reverses the comparison order of the comparator.
   * After calling this method, `lessThan` and `greaterThan` will swap behavior.
   */
  reverse(): void {
    const originalCompare = this.compare;
    this.compare = (_a: T, _b: T) => originalCompare(_b, _a);
  }
}
