// Задание 1
let a=0;
while(a<2){console.log("привет");
a++;}

let b=0;
do {console.log("привет");
b++;  
} while (b<2);

// Задание 2
let c=1;
while(c<=5){console.log(`${c}`);
c++;}

// Задание 3
let d=7;
do {console.log(`${d}`);
d++;  
} while (d<=22);

// Задание 4
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
};
for (let name in obj) { console.log(`  ${name}- зарплата ${obj[name]} долларов`)
    
    };

// Задание 5

// let num=1000;
// let i1=0;
// while(num>50){
// num = num/2;
// i1++;}
// console.log(`циклов ${i1} результат ${num}`);

let i=0
for(let n=1000; n>50; n=n/2,i++){
    console.log(`результат ${n} номер цикла ${i}`);}
let z=i
console.log(`всего циклов ${z}`);

// Задание 6

let userFriday=+prompt(`введите первую пятниу месяца от 1 до 7 го числа`);

    if (userFriday>=8||userFriday<=0) {alert(`Некорректная дата`);
    
} else {
    
    let friday =userFriday;
    for(dayMonth=1; friday<=31;dayMonth++,friday=friday+7){
        
        console.log(`Сегодня пятница ${friday}-e отчетный день!`);
        }  
} 




    

