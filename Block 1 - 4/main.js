/*let carName = 'Ford';
let carYear = 2015;
let personYear = 1996;

function calcAge(year){
    let currentYear = 2023
    let result = currentYear - year
    return result
}

function checkLogAge(year, name, compareTo){
    (calcAge(year) < compareTo) ? console.log('Возраст ' + name + ' меньше ' + compareTo + ' лет') : console.log('Возраст ' + name + ' больше ' + compareTo +' лет');
}

checkLogAge(carYear, 'машины', 8)
checkLogAge(personYear, 'человека', 30)*/
            //! -   Object
/*let person = {
    name: 'Vasiliy',
    year: 1990,
    family: ['Elena', 'Igor'],
    car: {
        year: 2010,
        model: 'Ford',
    },
    calculateAge: function(){
        let today = new Date();
        this.age = today.getFullYear() - this.year
        
    }
}

console.log(person.family[1]);

let field = 'car'
console.log(person[field]);

person.calculateAge()
console.log(person);*/

            //! -   Cycle

/*let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// numbers.push('Not a number')
// numbers.pop()
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        console.log(numbers[i])
    }
}
*/

            //! -   DOM
/*let a = document.querySelector('a')
let oldHref = a.getAttribute('href')

// a.innerHTML='<a href="https://yandex.ru/">Yandex</a>'

a.setAttribute('href', 'https://yandex.ru')
a.textContent='Yandex'
a.setAttribute('title', 'Go to Yandex')

let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')
box1.classList.add('red')

box2.classList.add('blue')

let hasClass = box2.classList.contains('blue')
console.log(hasClass);

if(hasClass){
    box2.classList.remove('blue')
}else{
    box2.classList.add('blue')
}*/

            //! -   Event

/*let button = document.querySelector('button')
let h1 = document.querySelector('h1')
let input = document.querySelector('input')
function buttonHandler(){
    h1.textContent = input.value
    
    
}

h1.addEventListener('mouseenter', function(){
    this.style.color = 'red'
    this.style.backgroundColor = 'black'
})

h1.addEventListener('mouseleave', function(){
    this.style.color = 'black'
    this.style.backgroundColor = 'transparent'
    
    
})


button.addEventListener('click', buttonHandler)*/

            //! -   Bubbling & capturing (всплытие и погружение)

/*let divs = document.querySelectorAll('div')

for(let i = 0; i < divs.length; i++){
    divs[i].addEventListener('click', function() {
        console.log(this.getAttribute('id'));
        
    })
} */

            //! -   Object event

/*let divs = document.querySelectorAll('div')
let link = document.querySelector('a')
for(let i = 0; i < divs.length; i++){
    divs[i].addEventListener('click', function(event) {
        event.stopPropagation()
        
        console.log(this.getAttribute('id'));
                    
    })
}

link.addEventListener('click', handelLinkClick)

function handelLinkClick(event){
    event.preventDefault()
    let div = divs[0]
    div.style.display = div.style.display === 'none' 
    ? div.style.display = 'flex' 
    : div.style.display = 'none'
    
    console.log(div.style.display);
    
}*/
            //! -   Event delegation (делегирование событий)

/*document.getElementById('wrapper').addEventListener('click', function(event){
    let tagName = event.target.tagName.toLowerCase()
    if(tagName === 'p') {
        event.target.style.color = 'blue'
    }
    if(event.target.classList.contains('color')){
        event.target.style.color = 'red'
    }
})*/


/*let p = document.querySelectorAll('p')
for(let i = 0; i < p.length; i++){
    p[i].addEventListener('click', function(event){
        event.target.style.color = 'blue'
        
    })
}*/

            //! -   Методы массивов
/*let str = '1, 2, 3, 4, 5, 6, 7, 8'
let array = str.split(',')
// console.log(array.join(','));

// console.log(array.reverse())
let newArray = array.splice(2, 0, '11')
console.log(array);
console.log(newArray);

let neArray = array.concat([])
console.log(neArray);

let objArray = [
    {name: 'Sergey', age: 27},
    {name: 'Max', age: 23},
    {name: 'Viktor', age: 25},
]
console.log(objArray);

let foundPerson = objArray.find(function(person){
    return person.age === 23
})
console.log(foundPerson);


let oddArray = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function(i){
    return i%2 !== 0
})
console.log(oddArray);


let numArray = array.map((i) => {
    return i * 2
})
console.log(numArray);*/

            //! -   Объект Math

/*let num = 2.4
console.log(Math.random());
console.log(Math.floor(num));
console.log(Math.ceil(num));

console.log(Math.sin(num));*/
            //! -   JSON
/*let person = {
    name: 'Max',
    age: 26,
    job: 'Frontend',
    car: {
        model: 'Ford'
    },
    friends: ['Elena', 'Igor']
}

let str = JSON.stringify(person)

console.log(str);
console.log(JSON.parse(str));*/

            //! -   Date

// let date = new Date()
// console.log(date)

            //! - LOCAL STORAGE -   ОБРАТИТЬ ВНИМАНИЕ!!!
/*document.querySelector('button').addEventListener('click', function(event){
    let value = document.querySelector('input').value
    let obj = {
        text: value,
    }
    localStorage.setItem('headerText', JSON.stringify(obj))
})

document.addEventListener('DOMContentLoaded', function(){
    
    let obj

    try{
        obj = JSON.parse(localStorage.getItem('headerText'))
    }catch(e){}
    
    
    
    if(obj && obj.text && obj.text.trim()){
        document.querySelector('h1').textContent = obj.text
    }
   
    
})*/

            //! - Create application 
