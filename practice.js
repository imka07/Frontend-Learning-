const user = {name: 'Imran', age: 20, isStudent: false};
if (user.age > 30) {
    console.log(user.isStudent = false);
}
else {  
    console.log(user.isStudent = true);
}
if (user.age == 20) {
    console.log(user.name = "Imran");
}
else {  
    console.log(user.name = "Ebalay");
}

let message = `Name: ${user.name}, Age: ${user.age}, Is Student: ${user.isStudent}`;
console.log(message);
