// map
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(n => n - 1);
console.log(doubled); 


// filter
const evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// reduce
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

// practice with map, filter, reduce
function doubleNumbers(arr = []) {
  return Array.isArray(arr) ? arr.map(n => n * 2) : [];
}

function filterEven(arr = []) {
    return Array.isArray(arr) ? arr.filter(n => n % 2 === 0) : [];
}

function sumArray(arr = []) {
   return Array.isArray(arr) ? arr.reduce((total, num) => total + num, 0) : 0;
}