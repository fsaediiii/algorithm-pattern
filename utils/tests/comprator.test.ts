import Comparator from "../comparator";

describe("Comparator", () => {
  const comparator = new Comparator<number>();

  test("equal should return true for same values", () => {
    expect(comparator.equal(5, 5)).toBe(true);
  });
});
