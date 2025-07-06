// // Ссылочные типы 
// const a = { name: 'John', age: 30 };

// console.log(a); // { name: 'John', age: 30 }

// const nums = [1, 2, 3];
// console.log(nums); // [1, 2, 3]


const a = { x: 1 };
const b = a;
b.x = 2;
console.log(a.x); // 2 — оба ссылаются на один объект
