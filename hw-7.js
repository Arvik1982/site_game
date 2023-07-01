// Задание 1

let str = `string`;
console.log(str.toUpperCase());

// Задание 2

let startArr = ['Кошка', 'Кит', 'Комар', 'Носорог'];
let str ='ко'
let newArr =[]
startArr.forEach((el)=>{
if (el.toLowerCase().includes(str.toLowerCase())) {
    // console.log(el)
    newArr.push(el) 
    
} else {
    
}});
console.log(newArr)
// Задание 3

let num = 32.5888
// 3.1
console.log(Math.floor(num));
// 3.2
console.log(+num.toFixed(0));
// 3.3
console.log(Math.round(num));

// Задание 4

console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));

// Задание 5

function roundRandom() {
console.log(Math.round(Math.random()*10))}
roundRandom()

// Задание 6

let element = 7 //на вход
let arrLenth = element*0.5
function arrRandom() {console.log(Array.from({length: arrLenth},()=> Math.floor(Math.random()*arrLenth)))
    
}
arrRandom()

// Задание 7

function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random()*(maxValue-minValue))+minValue;
}
console.log(getRandomInt(0,10));

// Задание 8

let currentDate = new Date();
console.log(currentDate);

// Задание 9

let currentDate = new Date();
let nextDate73 = 73*24*60*60*1000
let searchDate = +currentDate + nextDate73
let nextDate = new Date(searchDate);
console.log(nextDate);

// Задание 10

const days=[`Воскресенье`, `Понедельник`, `Вторник`, `Среда`, `Четверг`, `Пятница`, `Суббота`]
const months=[`Январь`, `Февраль`, `Март`, `Апрель`, `Май`, `Июнь`, `Июль`, `Август`, `Сентябрь`, `Октябрь`, `Ноябрь`,`Декабрь`]
let currentDate = new Date();
let fullDate = `Сегодня:` +currentDate.getDate()+" " +months[currentDate.getMonth()]+" "  +currentDate.getFullYear()+" "  +days[currentDate.getDay()]+" Время "+currentDate.getHours() +" Часов "+currentDate.getMinutes()+" Минут "
console.log(fullDate)

// Задание 11

let fruitArr=['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
let fruitArrMix=fruitArr.sort(()=>(Math.random()-0.5))
alert(fruitArrMix)
const firstElarr = fruitArrMix[0]
const lastElarr = fruitArrMix[6]
console.log(firstElarr)
console.log(lastElarr)
let firstEluser = prompt(`Назовите первый элемент`)
let lastEluser = prompt(`Назовите второй элемент`)

if (firstElarr.toLowerCase()===firstEluser.toLowerCase()&&lastElarr.toLowerCase()===lastEluser.toLowerCase()) {
    alert(`Вы угадали`)
}
else if(firstElarr.toLowerCase()===firstEluser.toLowerCase()||lastElarr.toLowerCase()===lastEluser.toLowerCase()) {
    alert(`Вы были близки к победе`)}
else{alert(`Увы Вы проиграли`)}