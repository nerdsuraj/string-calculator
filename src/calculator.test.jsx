import { describe, it, expect } from 'vitest';
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
