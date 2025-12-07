export default class Comparator<T extends string | number> {
  private compare: (_a: T, _b: T) => number;

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
   */

  defaultCompare(_a: T, _b: T): number {
    if (_a === _b) return 0;
    if (_a < _b) return -1;
    return 1;
  }

  equal(_a: T, _b: T): boolean {
    return this.compare(_a, _b) === 0;
  }

  lessThan(_a: T, _b: T): boolean {
    return this.compare(_a, _b) < 0;
  }

  greaterThan(_a: T, _b: T): boolean {
    return this.compare(_a, _b) > 0;
  }

  lessThanOrEqual(_a: T, _b: T): boolean {
    return this.compare(_a, _b) <= 0;
  }

  greaterThanOrEqual(_a: T, _b: T): boolean {
    return this.compare(_a, _b) >= 0;
  }

  reverse(): void {
    const originalCompare = this.compare;
    this.compare = (_a: T, _b: T) => originalCompare(_b, _a);
  }
}
