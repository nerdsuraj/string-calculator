/* eslint-disable no-unused-vars */
export function add(numbers) {
    if (!numbers) return 0;
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const match = numbers.match(/^\/\/(.+)\n/);
        console.log("🚀 ~ add ~ match:", match)
        if (match) {
            delimiter = new RegExp(`\\${match[1]}`);
            console.log("🚀 ~ add ~ delimiter:", delimiter)
            numbers = numbers.slice(match[0].length);
        }
    }
    const nums = numbers.split(delimiter).map(Number);

    const negatives = nums.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }

    if(delimiter.source === "\\*"){
        return nums.reduce((a, b) => a * b,1);
    }else{
        return nums.reduce((a, b) => a + b, 0);
    }

}
