import { findLargestNumber } from "../../scripts/modules/findLargestNumber";

describe("Tests findLargestNumber script functionality", () => {
  test("find largest number amongst 3 numbers, when the first one is the largest", () => {
    // Given
    let numberList = [3, 2, 1]
    // When
    let result = findLargestNumber(numberList);
    // Then
    expect(result).toBe(3);
  });
  test("find largest number amongst 3 numbers, when the second one is the largest", () => {
    // Given
    let numberList = [2, 3, 1]
    // When
    let result = findLargestNumber(numberList);
    // Then
    expect(result).toBe(3);
  });
  test("find largest number amongst 3 numbers, when the third one is the largest", () => {
    // Given
    let numberList = [2, 1, 3]
    // When
    let result = findLargestNumber(numberList);
    // Then
    expect(result).toBe(3);
  });
});
