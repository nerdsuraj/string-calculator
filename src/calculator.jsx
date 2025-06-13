/* eslint-disable no-unused-vars */
export function add(numbers) {
   if (!numbers) return 0;
   const nums = numbers.split(/,|\n/).map(Number);
  return nums.reduce((a, b) => a + b, 0);
}
