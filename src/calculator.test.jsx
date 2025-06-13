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
