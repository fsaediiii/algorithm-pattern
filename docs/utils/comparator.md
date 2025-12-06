# Comparator Class

The `Comparator` class is a utility to compare two values of type `T`.  
It provides methods to check equality, ordering, and reverse comparisons.

**Type parameter:**

- `T` - The type of values to compare (restricted to `string` or `number`).

---

## Constructor

```ts
constructor(compareFunction?: (a: T, b: T) => number)
```

Creates a new `Comparator` instance.

- **compareFunction (optional)**: A custom function to compare two values of type `T`.
  - Should return:
    - `0` if the values are equal
    - `-1` if `a < b`
    - `1` if `a > b`
- If not provided, a default comparison function (`defaultCompare`) is used for numbers and strings.

---

## Methods

### `defaultCompare(a: T, b: T): number`

The default compare function for numbers or strings.

- **Parameters:**
  - `a: T` - The first value to compare.
  - `b: T` - The second value to compare.
- **Returns:** `0` if equal, `-1` if `a < b`, `1` if `a > b`.

---

### `equal(a: T, b: T): boolean`

Checks whether two values are considered equal by the comparator.

- **Parameters:**
  - `a: T` - The first value to compare.
  - `b: T` - The second value to compare.
- **Returns:** `true` if comparator returns `0` (equal), otherwise `false`.

---

### `lessThan(a: T, b: T): boolean`

Checks if the first value is less than the second value.

- **Parameters:**
  - `a: T` - The first value to compare.
  - `b: T` - The second value to compare.
- **Returns:** `true` if `a < b`, otherwise `false`.

---

### `greaterThan(a: T, b: T): boolean`

Checks if the first value is greater than the second value.

- **Parameters:**
  - `a: T` - The first value to compare.
  - `b: T` - The second value to compare.
- **Returns:** `true` if `a > b`, otherwise `false`.

---

### `lessThanOrEqual(a: T, b: T): boolean`

Checks if the first value is less than or equal to the second value.

- **Parameters:**
  - `a: T` - The first value to compare.
  - `b: T` - The second value to compare.
- **Returns:** `true` if `a <= b`, otherwise `false`.

---

### `greaterThanOrEqual(a: T, b: T): boolean`

Checks if the first value is greater than or equal to the second value.

- **Parameters:**
  - `a: T` - The first value to compare.
  - `b: T` - The second value to compare.
- **Returns:** `true` if `a >= b`, otherwise `false`.

---

### `reverse(): void`

Reverses the comparison order of the comparator.  
After calling this method:

- `lessThan` behaves like `greaterThan`
- `greaterThan` behaves like `lessThan`

---

**Usage Notes**

- Can be used in sorting algorithms to compare numbers or strings.
- Supports custom comparison functions to handle objects or complex sorting logic.
