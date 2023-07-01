function wordsGame() {
    

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
else{alert(`Увы Вы проиграли`)}}
wordsGame()