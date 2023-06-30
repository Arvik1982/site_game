
// задание 1


let a = 10;
a=20;
alert(a);

// задание 2

const iphoneYear = 2007;
alert (`Год выпуска первого айфона: ${iphoneYear}`);

// задание 3

const javaMaker = 'Брендан Айк';
alert(`Созатель языка Ява Скрипт: ${javaMaker}`);

// задание 4

let b = 10;
let c = 2;
alert(`Сумма: ${b+c} Разность: ${b-c} Произведение: ${b*c} Деление: ${b/c}`);

// задание 5

let d= 2**5;
let result
result = d 
alert(`2 в степени 5 = ${result}`);

// задание 6

a=9
b=2
let e = a%b
alert(e)


// задание 7

let num = 1;
num = ++num;
num = ++num;
num = ++num;
num = ++num;
num = ++num;
num = ++num;
alert (num);

// задание 8

let age = prompt('Сколько Вам лет?');
alert(`Возраст: ${age}`);

задание 9

let user = {
    name: String `Ivan`,
    age: 7,
    isAdmin: Boolean = 0,
};
alert(`${user.name},${user.age},${user.isAdmin}`);

// задание 9.1
user = {
    name: String `Ivan`,
    age: 7,
    isAdmin: Boolean = 0,
    "city of residence": ` City of ResiDance`
};
alert(user['city of residence']);

// задание 9.2

user = {
    name: String `Ivan`,
    age: 10,
    isAdmin: Boolean = 0,
    "city of residence": ` City of ResiDance`
};
alert(user.age);

// задание 9.3

delete user['city of residence']
alert(user['city of residence']);

// задание 9.4

info = prompt("Какую информацию хотите узнать о пользователе? name/age/");

alert(user[info]);

// задание 10

let userName = prompt("Какое Ваше имя?");
alert(`Привет ${userName} !`)