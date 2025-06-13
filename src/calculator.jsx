/* eslint-disable no-unused-vars */
export function add(numbers) {
   if (!numbers) return 0;
   console.log(numbers)
     let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.+)\n/);
    console.log("🚀 ~ add ~ match:", match)
    if (match) {
      delimiter = new RegExp(match[1]);
      numbers = numbers.slice(match[0].length);
    }
  }

  const nums = numbers.split(delimiter).map(Number);
  return nums.reduce((a, b) => a + b, 0);
}
