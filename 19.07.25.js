// Переменные 
let name = "Lonised";
const age = 21;
var oldWay = true;

//Типы даннных 
String("Text")
Number(2)
boolean(true, false)
null, undefined
object, array 

//Условные конструкции
if (age >= 18) {
    console.log("Совершеннолетний");
} else {
    console.log("Ребенок");   
}

//Циклы 
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//Функции 
function greet(name) {
    console.log("Привет, " + name);
}
greet("Дашуня");

//Массивы
let fruits = ["Apple", "Banana", "Pineapple"];
console.log(fruits[1]);

//Объекты
let user = {
    name: "Dashunya",
    age: 17,
    isStudent: false
};
console.log(user.name);

//Обработчик событий 
<button onClick="sayHello()">+</button>;
<script>
    function sayHello() = {
        alert("Привет!")
    }
</script>
