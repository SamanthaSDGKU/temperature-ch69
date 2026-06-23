console.log("This is on the console");
let globalVar="This is global";
// 1. declare the fn (create the fn)
function login(){
    console.log("Welcome to the system");
    console.log(globalVar);
};

// 2. call fn (code,console,user)
login();

// Example 2. 1 parameter
function logout(user){
    console.log("Goodbye " + user + " see you later");
    console.log(globalVar);
}

logout("Chante");
logout("Edwin");
logout("Austin");

// Example 3. 2-3 parameter
function gradeExam(student,correctItems,points){
    let totalPoints = correctItems * points;
    console.log(`${student} grade of the exam is: ${totalPoints}`);
}

gradeExam("Austin",10,0.33);
gradeExam("Denica",12,0.33);
gradeExam("Jey",13,0.33);

// Challenge 1
function doubleNumber(num){
    let total = num * 2;
    console.log(total);
    console.log(globalVar);
}


doubleNumber(4);//8
doubleNumber(10);//20

//Example 4. Return
function add(num1,num2){
    let total = num1 + num2;
    return total;
}

let x = add(4,6);
console.log(`The result is: ${x}`);

console.log(globalVar);

