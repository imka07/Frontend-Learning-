class Person {
    constructor(name, age, hobby) {
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    getHobby() {
        return this.hobby ? `My hobby is ${this.hobby}.` : 'I have no hobby.';
    }

}

const person1 = new Person('Imran', 20, 'coding');


// Расширение класса Person
class Admin extends Person {
    constructor(name, age, hobby, role) {
        super(name, age, hobby);
        this.role = role;
    }

    greet() {
        super.greet();
        console.log(`I am an ${this.role}.`);
    }   
}

const imran = new Admin('Imran', 20, 'coding', 'pidor');
// imran.greet();


// Замыкание методов

function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
// console.log(counter()); // 1


// Module pattern

const UserModule = (function() {
    let users = [{ name: 'John', age: 30 }];

    function addUser(user){
        users.push(user);
    }


    function list() {
    return [...users];
    }

    return {
        addUser,
        list
    };
})();

UserModule.addUser({ name: 'Imran', age: 20 });
// console.log(UserModule.list()); 

// Практика с классами
class BankAccount {
    constructor(owner, balance = 0){
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount){
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.balance}`);
        }
    }

    withdraw(amount){
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
        } else {
            console.log('Insufficient funds or invalid amount.');
        }
    }

    showBalance() {
        console.log(`Balance for ${this.owner}: ${this.balance}`);
    }

}

// const account = new BankAccount('Imran', 1000);
// account.showBalance(); // Balance for Imran: 1000
// account.deposit(500); // Deposited 500. New balance: 1500
// account.withdraw(200); // Withdrew 200. New balance: 1300


function createStepCounter(step) {
    let count = 0;
    return function(){
        count += step;
        return count;
    }
}
// const bytwo = createStepCounter(2);
// console.log(bytwo());
// console.log(bytwo());
// console.log(bytwo());

const TaskManager = (function() {
    let tasks = [];

    function add(task) {
        tasks.push(task);
    }

    function remove(taskToRemove) {
        tasks = tasks.filter(n => n !== taskToRemove);
    }


    function getAll() {
        return [...tasks];
    }

    return {
        add,
        remove,
        getAll
    };
})();

TaskManager.add({name: "Imran", task: "Допилить фичу"});
TaskManager.add({name: "Alice", task: "Написать README"});
console.log(TaskManager.getAll());

const all = TaskManager.getAll();
TaskManager.remove(all[1]);

console.log(TaskManager.getAll());