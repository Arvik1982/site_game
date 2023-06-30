// Задание 1
let password = `пароль`;
let userPassword = prompt(`введите пароль`);
if (userPassword === password) {
    console.log(`Пароль введен верно`)
} else {
    console.log(`Пароль введен не верно`);
}

// Задание 2
let c = prompt(`введите число`);
if (c >= 0 && c <= 10) {
    console.log(`верно`);

} else {
    console.log(`не верно`);

}
// Задание 3

let d = prompt(`введите число`);
let e = prompt(`введите число`);
if (100 < d || 100 < e) {
    console.log(`верно`);

} else {
    console.log(`не верно`);

}

// Задание 4
let a = `2`;
let b = `3`;
// alert(Number(a)+Number(b));
let f = Number(a) + Number(b);
alert(f);

// Задание 5
let monthNumber = +prompt(`введите месяц`);
switch (monthNumber) {
    case 12:
    case 1:
    case 2: console.log(`зима`);
        break;
    case 3:
    case 4:
    case 5: console.log(`весна`);
        break;
    case 6:
    case 7:
    case 8: console.log(`лето`);
        break;  
    case 9:
    case 10:
    case 11: console.log(`осень`);
        break; 
    default: console.log(`Такого месяца нет`);
        break;
}
// Задание 7
let userNumber = prompt(`Пожалуйста, введите любое число`);

if (isNaN(userNumber)===true) {
    console.log(`NOT A NUMBER`);}
    else if (userNumber%2 === 0) {alert(`Четное число`);}
 else {alert(`Не четное число`);
    
}
// Задание 8 
let clientOs = +prompt(`OS NUMBER`);

    if (clientOs===1) {alert(`Установите версию для Android`);}
    else if(clientOs===0) {alert(`Установите версию iOS`);}
    else {alert(`not an OS`);}    

// Задание 9
let clientOs2 = +prompt(`Введите свою ОС Android(1) или iOs(0)`);
let clientDeviceYear = confirm(`Год устройства больше или равен 2015?`);
if (clientDeviceYear===true) {
    switch(clientOs2){
        case 1: alert(`Установите версию Android`);
            break;
        case 0: alert(`Установите версию iOS`);
            break;
default: alert (`NOT OS`);
break;
}} else {
    switch(clientOs2){
        case 1: alert(`Установите ОБЛЕГЧЕННУЮ версию Android`);
            break;
        case 0: alert(`Установите ОБЛЕГЧЕННУЮ версию iOS`);
            break;
default: alert (`NOT OS`)
    
}}

