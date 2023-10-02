// Задание 1

const people =[
    {name:`Глеб`, age: 29},
    {name:`Анна`, age: 17},
    {name:`Олег`, age: 7},
    {name:`Оксана`, age: 47},
];
people.sort(function compareAge (a, b)
{
    if(a.age>b.age){return 1;}
    if(a.age<b.age){return -1;}
    return 0;
});


// Задание 2

const people=[
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
 ];


function isPositive (number) {
if (number > 0) {
    return true;
} else { 
    return false;
}

    
  }
function isMale(number){


    if (number.gender === 'male') {
        return true;
    } else { 
        return false;
    }}
    


  
  function filter(array, ruleFunction) {
    let result = [];
  
    for (let i = 0; i < array.length; i++) {
      
if (ruleFunction(array[i])=== true){
      result.push(array[i]);}
    }
  
    return result;
  }
  
  console.log(filter([3, -4, 1, 9], isPositive));
  console.log(filter(people, isMale));

  // Задание 3

  function dateTic() {
    
    let currentDate = new Date();
    console.log(currentDate);
  }
  
    let timerId = setInterval(dateTic, 3000);
    setTimeout(() => {clearInterval(timerId);alert(`30 секунд прошло`);},30000);
    
 // Задание 4


    function delayForSecond(callback) {
const timerId = setTimeout(()=>{callback()}, 1000)

        // Код писать можно только внутри этой функции
    //   callback();
            
   }
   
   delayForSecond(function () {
      console.log('Привет, Глеб!');
   })
    

// Задание 5

// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:

const timerId = setTimeout(()=>{sayHi(`Глеб`)}, 2000)
delayForSecond()



