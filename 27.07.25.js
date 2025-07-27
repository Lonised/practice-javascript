function sayHello() {
    console.log("Привет, мир!");
    
}

sayHello()
 
function sum(a,b) {
    console.log(a + b);
    
}

sum(1,2)

function isEven(number) {
    if (number % 2 == 0) {
        console.log("true");
    } else {
        console.log("false");
    }
    
}

isEven(3)

function greet(name) {
    console.log("Привет,", name);
    
}

greet("Меня зовут ...")

function maxOfThree(a, b, c) {
    if (a >= b && a >= c) {
        console.log(a);
    } else if (b >= a && b >= c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

maxOfThree(3,1,5)

function factorial(n) {
    let result = 1
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    console.log(result);
    
}

factorial(5)
