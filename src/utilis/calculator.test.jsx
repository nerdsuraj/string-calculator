import { describe, it, expect} from 'vitest';
import { add } from './calculator';

describe('String Calculator', () => {
  it('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });
});

it('should return the number itself for a single number', () => {
  expect(add("1")).toBe(1);
});

it('should return sum of two numbers', () => {
  expect(add("1,5")).toBe(6);
});

it('should return sum of multiple numbers', () => {
  expect(add("1,2,3")).toBe(6);
});

it('should handle new lines as delimiter', () => {
  expect(add("1\n2,3")).toBe(6);
});

it('should support custom delimiter', () => {
  expect(add("//;\n1;2")).toBe(3);
});

it('should support custom delimiter and return the multiplication', () => {
  expect(add("//*\n1*2")).toBe(2);
});

it('should throw if negative numbers are passed', () => {
  expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed -2,-3");
});


