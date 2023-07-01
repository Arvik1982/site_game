// Задание 1

const numbers=[1, 5, 4, 10, 0, 3];
for (const item in numbers) {
    if (numbers[item]===10) {
        break;
        
    } else {
        console.log(numbers[item])
    }    
}

// Задание 2

const numbers=[1, 5, 4, 10, 0, 3];
numbers.forEach((el, ind) => {
    
    if (el===4) {
        console.log(`index:${ind}- element:${el}`)
    } 
});

// Задание 3

const numbers=[1, 3, 5, 10, 20];
console.log(numbers.join(` `));

// Задание 4

let arr=[];
for (let i = 0; i < 3; i++) {arr.push([1, 1, 1]);
}
console.log(arr);

// Задание 4.2

let arr=[];
let i=0
while (i<3) {
    i++
    {arr.push([1, 1, 1, 8]);
    } 
 
}
console.log(arr); 

//Задание4.3
const arr=[];
for (let index = 0; index < 3; index++) {
    arr[index]=[];
    for(let j=0; j<3; j++){
    arr[i][j] = 1}
}

// Задание 5

let arr=[1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);

// Задание 6

let arr = [9, 8, 7, `a`, 6, 5];
arr = arr.sort();
arr.pop();

console.log(arr);

// Задание 7

const arr = [9, 8, 7, 6, 5];
const userNumber = +prompt(`Введите число`);

for(let i = 0; i<=arr.length; i++){ if (arr.filter(el=> el === userNumber)[i] === userNumber) {alert(`Угадал`)
 break;   
} else {alert(`Не угадал`)
   break; 
}}

// Задание 8

let text = 'abcdef';
let textArr = text.split('');
console.log(textArr);
textArr.reverse();
console.log(textArr.join(''));

// Задание 9

let arr = [
[1, 2, 3],
[4, 5, 6]]; 

let text= arr.join()
let textArr = text.split(',')
console.log(textArr.length)
let numArr=[]
for (let i = 0; i < textArr.length; i++) {
  numArr.push(parseInt(textArr[i]))  
}
console.log (numArr)

//9
arr.flat
newAnswer=[...arr[0], ...arr[1]]
const arr=[].concat(...arr)

// Задание 10

let arr=[1, 5, 0, 8, 4, 2, 9, 7, 3, 6];
// const result = arr.reduce((i,j)=> i+j);
// console.log(result)

for (let i = 0; i < arr.length-1; i++) {
    let sum=arr[i]+arr[i+1]
    console.log(sum)

}
//Задание 11

let arr = [2, 4, 3, 7];
let sqArr = arr.map(item=>item**2);
console.log(sqArr);


//Задание 12

let wordArr =[`слово`, `дело`, `метроном`];
let itemArr=[];
console. log(wordArr.map(item=> item.length));

//Задание 13

let arr = [0, -7, 8, 3, -1, -4];
console.log(arr.filter(el=>el<=0))