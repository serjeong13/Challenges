import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

test("addition of two positive arguments:", () => {
  const addition = add(2, 3);
  expect(addition).toBe(5);
});

test("addition of one positive and other negative argument:", () => {
  const addition = add(2, -3);
  expect(addition).toBeLessThan(0);
});
test("addition of one float integers:", () => {
  const addition = add(0.1, 0.2);
  expect(addition).toBeCloseTo(0.3);
});

test("subtraction with positive numbers:", () => {
  const subtraction = subtract(15, 5);
  expect(subtraction).toBe(10);
});

test("subtraction with negative values:", () => {
  const subtraction = subtract(5, 15);
  expect(subtraction).toBeLessThan(0);
});

test("multiply with positive numbers:", () => {
  const multiplciation = multiply(2, 3);
  expect(multiplciation).toBe(6);
});

test("multiply with negative first number:", () => {
  const multiplciation = multiply(-2, 3);
  expect(multiplciation).toBeLessThan(0);
});

test("multiply with negative second number:", () => {
  const multiplciation = multiply(2, -3);
  expect(multiplciation).toBeLessThan(0);
});

test("multiply with negative first number:", () => {
  const multiplciation = multiply(-2, -3);
  expect(multiplciation).toBe(6);
});

test("divide with positive values", () => {
  const division = divide(6, 3);
  expect(division).toBe(2);
});

test("divide with null value", () => {
  const division = divide(6, 0);
  expect(division).toBe("You should not do this!");
});
