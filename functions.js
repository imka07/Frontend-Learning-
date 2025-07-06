function sayHello(name) {
    return "Hello, " + name + "!";
}

console.log(sayHello("Imran"));

const sayBye = function(name) {
    return "Bye, " + name + "!";
}

console.log(sayBye("Imran"));

// Arrow function
const sum = (a, b) => a + b;
const multiply = (a, b) => {
    return a * b;
}
console.log(sum(5, 10)); // 15
console.log(multiply(5, 10)); // 50

//Practice with functions

function cubeWithFunction(nums = []) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        result.push(nums[i] ** 3);
    }
    return result;
}

const cubeWithArrow = (nums = []) => nums.map(n => n ** 3);



