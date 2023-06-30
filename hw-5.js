// Задание 1
function min(a,b) {
    a= +prompt(`enter number a`);
    b= +prompt(`enter number b`);
    if (a>=b) {
        console.log(`number ${b}`);
    } else {
        console.log(`number ${a}`);
    }
}
min()

// Задание 2
function numTostring(userNumber) {
    userNumber = +prompt(`введите число`);
    if (userNumber%2==0){
        console.log(`Число четное`);
    } else {
        console.log(`Число нечетное`);    
    }
}
numTostring()

// Задание 3.1
function squareNumber(userNumber) {
    userNumber = +prompt(`введите число`);
    console.log(userNumber**2)
}
squareNumber()

// Задание 3.2
function squareNumber(userNumber) {
    userNumber = +prompt(`введите число`);
    return(userNumber**2)
}
squareNumber()

// Задание 4
function hallo(userNumber) {
    userNumber = +prompt(`введите число`);
    if (userNumber<0) {
        console.log(`Вы ввели неправильное число`);}
        else if(userNumber<12){console.log(`Привет!`);}
        else {console.log(`Добро пожаловать!`);}
     }  
hallo()

// Задание 5
function mult(userNumber1, userNumber2) {
    userNumber1 = +prompt(`введите число 1`);
    userNumber2 = +prompt(`введите число 2`);
    if (isNaN(userNumber1)||isNaN(userNumber2)) {
        console.log(`Одно или оба значения не являются числом`);}
        else {return(userNumber1*userNumber2);}
     }  
mult()

// Задание 6
function mult(userNumber) {
    userNumber = +prompt(`введите число `);
    if (isNaN(userNumber)) {
        console.log(`Переданный параметр не являются числом`);}
        else {return(`N в кубе равняется ${userNumber**3}`);}
     }  
mult()


// Задание
// const user ={
//     name:`джон`,
//     age:`28`,
//     city:`Город`,
//     getInfo() {
//         return(`имя ${user.name}возраст ${user.age}`);
//     }
// }
// console.log(user.getInfo())

// Задание 7
function getArea() {
    return this.radius**2*this.pi
}
function getPerimeter() {
    return this.radius*2*this.pi
}
const circle1 = {
    radius:+prompt(`введите радиус 1 круга`),
    pi: Number(3.14),
    getArea: getArea,
    getPerimeter: getPerimeter,
}

const circle2 = {
    radius:+prompt(`введите радиус 2 круга`),
    pi: Number(3.14),
    getArea: getArea,
    getPerimeter: getPerimeter,
}
console.log(`площадь круга 1 ${circle1.getArea()} периметр круга 1 ${circle1.getPerimeter()}`)
console.log(`площадь круга 2 ${circle2.getArea()} периметр круга 2 ${circle2.getPerimeter()}`)

// Задание 8

// function yearTime(monthNumber) {
//     monthNumber = +prompt(`введите месяц`);     
// switch (monthNumber) {
//     case 12:
//     case 1:
//     case 2: return`зима`;
//         break;
//     case 3:
//     case 4:
//     case 5: return`весна`;
//         break;
//     case 6:
//     case 7:
//     case 8: return`лето`;
//         break;  
//     case 9:
//     case 10:
//     case 11: return`осень`;
//         break; 
//     default: return`Такого месяца нет`;
//         break;}
// }

// yearTime()

function yearTime(monthNumber) {
    
    monthNumber= +prompt(`введите месяц`)
    
    if (0>=monthNumber||monthNumber>=13||isNaN(monthNumber)) {
        alert(`Такого месяца нет`)
    } else {
        switch (monthNumber) {
                case 12:
                case 1:
                case 2: alert(`зима`);
                    break;
                case 3:
                case 4:
                case 5: alert(`весна`);
                    break;
                case 6:
                case 7:
                case 8: alert(`лето`);
                    break;  
                case 9:
                case 10:
                case 11: alert(`осень`);
                    break; 
                }
            }
            
            
    }
    
    yearTime()