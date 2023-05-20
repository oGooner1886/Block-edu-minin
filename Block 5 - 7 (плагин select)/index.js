            //! Object & Function

            //! Lesson 6.1 - Object and prototype`s

/*const car = {
    name: 'Ford',
    year: 2015,
    person: {

    }
}
console.log(car);
*/
// car.__proto__ => Object.prototype

            //! Lesson 6.2 - How work`s prototype`s
            //Функции которые по факту являются классами, называть с БОЛЬШОГО регистра.
/*
function Car(name, year){
    this.name = name
    this.year = year
}

Car.prototype.getAge = function(){  
    return new Date().getFullYear() - this.year
}

Car.prototype.color = 'black'
let ford = new Car('Ford', 2015)
let bmw = new Car('BMW', 2017)

ford.color = 'red'
console.log(ford);
console.log(bmw);
*/
                //! Lesson 6.3 - Creating and configuring objects

/*let ford = Object.create({
    calculateDistancePerYear: function(){
    Object.defineProperty(this, 'distancePerYear', {
        value: Math.ceil(this.distance / this.age),
        enumerable: true,
        writable: false,
        configurable: false,
    })
    }
}, {
    name: {
        value: 'Ford',
        enumerable: true,
        writable: false,
        configurable: false,
    },
    model: {
        value: 'Focus',
        enumerable: true,
        writable: false,
        configurable: false,
    },
    year: {
        value: 2015,
        enumerable: true,
        writable: false,
        configurable: false,
    },
    distance: {
        value: 120500,
        enumerable: true,
        writable: true,
        configurable: false,
    },
    age: {
        enumerable: true,
        get: function(){
            console.log('Получаем возраст');
            return new Date().getFullYear() - this.year
            
        },
        set: function(){
            console.log('Устанавливаем значение');
        },
    }
})
ford.calculateDistancePerYear()

                    // Получение доступа до ключей объекта
for(let key in ford){
    if(ford.hasOwnProperty(key)){
        console.log(key, ford[key])
    }
    
    
}
*/
                    //! Lesson 6.4 - Iterating object keys

/*
let person = {
    name: 'Max',
    age: 28,
    job: 'Frontend',
}*/
                    //todo 1 СПОСОБ
/*for(let key in person){
    if(person.hasOwnProperty(key)){
        console.log(key, person[key])
    }
}*/
                    //todo 2 СПОСОБ

/*Object.keys(person).forEach(function(key){
    console.log(person[key]);
    
})*/

                        //! Lesson 6.5 - How closures work (замыкания)
//todo Пример Минина
/*let createCounter = function(counterName){
    let counter = 0

    return {
        increment: function(){
            counter++
        },
        decrement: function(){
            counter--
        },
        getCounter: function(){
            return counter
        }
    }
}

let counterA = createCounter('Counter A')
let counterB = createCounter('Counter B')

counterA.increment()
counterA.increment()
counterA.increment()
counterA.increment()
counterA.increment()

counterB.decrement()
counterB.decrement()*/

//todo Пример Виктор Трумпель (https://youtu.be/kizGhzeNE64) - посмотреть еще раз

/*function User(defaultName){
    let _name = defaultName

    return {
        getName(){
            return _name
        },
        setName(n){
            _name = n
        }
    }
}*/

/*function createCalcFunction(n){
    return function(){
        console.log(1000 * n);
        
    }
}

const calc = createCalcFunction(42)
calc()*/



//! ЕЩЕ РАЗ ПРОВЕРИТЬ!!!
/*
function bind (context, fn){
    return function(...args){   //!Оператор «spread»
        fn.apply(context, args)
    }
}
function logPerson(){
    
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
    
}
const person1 = {name: 'Михаил', age: 22, job: 'Frontend'}
const person2 = {name: 'Елена', age: 19, job: 'SMM'}
bind(person1, logPerson)()*/

                        //! Lesson 6.6 - What is context

/*let person = {
    age: 28, 
    name: 'Max',
    job: 'Frontend',
    displayInfo: function(time){
       
        let self = this

        setTimeout(function(){
        
        console.log('Name: ', this.name);
        console.log('Job: ', this.job);
        console.log('Age: ', this.age);

    }.bind(this), time)
    }
}

person.displayInfo(500)*/

                        //! Lesson 6.7 - Привязка контекста

/*function printObject(objName){
    console.log('Printing object: ' + objName);
    
    for (let key in this){
        if (this.hasOwnProperty(key)){
            console.log('[' + key + ']', this[key]);
            
        }
    }
}




let person = {
    firstName: 'Max',
    job: 'backend',
    age: 27,
    friends: ['Elena', 'Igor'],
}

let car = {
    name: 'Ford',
    model: 'Focus',
    year: 2017
}
*/
/*          //! ПЕРВЫЙ СПОСОБ - метод bind (возвращает новую функцию)
let printPerson = printObject.bind(person)
let printCar = printObject.bind(car)

printPerson('Person')
printCar('Car')*/
/*            //! ВТОРОЙ МЕТОД - метод call сразу вызывает функцию
printObject.call(car, 'Car')*/
/*            //! ТРЕТИЙ МЕТОД - метод apply сразу вызывает функцию, вторым параметром идет массив
printObject.apply(person, ['Person'])*/


                        //! Lesson 6.8 - ЗАДАЧА

/*Задание: реализуйте возможность используя прототип, 
чтобы у каждого массива был новый метод, позволяющий удваивать 
значение каждого элемента с учетом типа данных таким образом, чтобы: 
1. Для чисел это возведение в квадрат. 
2. Для строк это удваивание строки. 
3. Метод не изменял существующий массив и возвращал новый.
//todo ПРИМЕР: [1, 2, 3] => [1, 4, 9]
//todo         [5, 'Hello', 6] => [25, 'HelloHello', 36]
*/
/*                      //! ПОПРОБОВАТЬ ЕЩЕ РАЗ!
let arrayA = [1, 2, 3]
let arrayB = [5, 'Hello', 6]


Array.prototype.double = function(){
let newArray = this.map(function(item){
    if(typeof item === 'number'){
        return item *= item
    } 
    if(typeof item === 'string'){
        return item += item
    }
})
return newArray



}

let resA = arrayA.double()
let resB = arrayB.double()


console.log('A', resA.double());
console.log('B', resB);*/

                        //! 7. ES6
                        //! Lesson 7.1 - let and const
                        //! Lesson 7.2 - array function


//? РАНЬШЕ
/*function getAge(year){
    const current = new Date().getFullYear()
    return current - year
}
console.log(getAge(1996));*/
//? СЕЙЧАС
// const getAge = (year) => new Date().getFullYear() - year 
// console.log(getAge(1996));


/*const getAge = year => {
    const current = new Date().getFullYear()
    return current - year
}*/

// console.log(getAge(1996));
/*
const person = {
    age: 25,
    firstName: 'Maxim',
    logNameWithTimeout: function(){
        
        window.setTimeout(() => {
            console.log(this.firstName);
            
        }, 1000)
    }
}*/
                        //! Lesson 7.3 - параметры по умолчанию
/*
const createPost = (title, text = 'asdasdas', date = new Date()
.toLocaleDateString()) => {                               //? в ES6
    //date = date || new Date().toLocaleDateString()      //! в ES5

    return {title, text, date,                            //* если ключ и значение равны можно оставить только значение
        // title: title,
        // text: text,
        // date: date,
    }
}

const post = createPost('Скоро новый год', 'Скоро будет 2024!')
console.log(post);*/

                        //! Lesson 7.4 - Object`s


/*const createCar = (name, model) => {          //!эта запись равнаценна под знаком '?'
    return {name,model}
}*/

/*const createCar = (name, model) => ({name, model})  //? ({}) - объект

const ford = createCar('Ford', 'Focus')

console.log(ford);

const yearField = 'year'
const bmw = {
    name: 'bmw',
    ['model']: 'X6 Sport',                          //! в [] - динамическое поле в объекте
    ['year']: 2018,

    logFields(){
        const {name, model, year} = this             //! - деструктуризация
        console.log(name, model, year)
        
    }
}
console.log(bmw);
bmw.logFields()

// const year = bmw.year  //!
//const {year} = bmw      //! идентичные записи */

                        //! Lesson 7.5 - Операторы Rest и Spread


/*const form = document.querySelector('form')
form.addEventListener('submit', event => {

    event.preventDefault()          //!отменить поведение по умолчанию
    const title = form.title.value
    const text = form.text.value
    const description = form.description.value
    saveForm({title, text, description})
})*/
                //! оператор SPREAD     - для разворачивания объектов
                /*const saveForm = (data) => {
                    // const {title, text, description} = data
                    const formData = {
                        date: new Date().toLocaleDateString(),
                        ...data
                        // title, text, description,
                    }
                    console.log('Form data: ', formData);

                }*/

    //! оператор REST           - для сбора всех параметров
/*const saveForm = (...args) => {
    const [title, text, description] = args
    const formData = {
    date: new Date().toLocaleDateString(),
    title, text, description,
}
    console.log('Form data: ', formData);
}*/
                        //! Lesson 7.6 - строки
                        //? шаблонизация
/*const createLink = ({path, name}) => `<a target = "_blank" href="${path}">${name}</a>`    
const ul = document.querySelector('ul')
const google = `<li>${createLink({path: 'https://google.com', name: 'Google'})}</li>`
const yandex = `<li>${createLink({path: 'https://yandex.ru', name: 'Yandex'})}</li>`


ul.insertAdjacentHTML('afterbegin', google)
ul.insertAdjacentHTML('afterbegin', yandex)

const strToLog = `
Hello
    World
        I am 
            New Tab
`
console.log(strToLog);*/

                        //! Lesson 7.7 - классы и наследования

//todo RootElement <=Box <= instances

/*class RootElement {
    constructor(tagName = 'div'){
        this.$el = document.createElement(tagName)
        this.$el.style.marginBottom = `20px`

    }

    hide(){
        this.$el.style.opacity = '0'
    }
    show(){
        this.$el.style.opacity = '1'
    }

    append(){
        document.querySelector('.wrapper').insertAdjacentElement('afterbegin', this.$el)

    }
}
class Box extends RootElement{          //! box наследуется от класса rootelements
    constructor(color, size = 150, tagName ){
        super(tagName)
        this.color = color
        this.size = size

    }
    create(){
        this.$el.style.background = this.color
        this.$el.style.width = this.$el.style.height = `${this.size}px`
        this.$el.style.background = this.color
        this.append()
        return this
    }
}

class Circle extends RootElement{
    constructor(color){
        super()
        this.color = color
    }
    create(){
        this.$el.style.borderRadius = '50%'
        this.$el.style.width = this.$el.style.height = `120px`  //задаем фиксированные размеры
        this.$el.style.background = this.color
        this.append()  //вставляем элемент
        return this
    }
}
const redBox = new Box('red', 100, 'div').create()   //!цвет, размер, тэгнейм
const blueBox = new Box('blue').create() 
const circle = new Circle('green').create()

circle.$el.addEventListener('mouseenter', () =>{
    circle.hide()
})
circle.$el.addEventListener('mouseleave', () =>{
    circle.show()
})*/



                        //! Lesson 7.8 - задача: написать свой плагин

/*Реализуйте класс Dropdown, который будет инициализировать компонент выбора элементов
по функционалу похожий на обычный HTML-элемент Select, но полностью реализованный вашим 
кодом без Select-тега.

Пример использования:
    const dropdown = new Dropdown('dropdown', {
        items: [
            {label: 'Москва', id, 'msk'}
            {label: 'Санкт-Петербург', id, 'spb'}
            {label: 'Новосибирск', id, 'nsk'}
            {label: 'Краснодар', id, 'krd'}

        ]
    })*/

/*
const select = document.querySelector('#city-select')
const msk = document.querySelector('msk')
const spb = document.querySelector('spb')
const nsk = document.querySelector('nsk')
const krd = document.querySelector('krd')



select.addEventListener('click', () => {
    console.log('hello');
    
})


msk.addEventListener('click', () => {
    console.log('zxc');
    
})*/

                                            //!Плагин select в js
/*class Dropdown{
    constructor(selector, options){
        this.$el = document.querySelector(selector)
        console.log(this.$el);          //<div class="dropdown open" id="dropdown">...</div>
        
        
        this.items = options.items
        this.$el.querySelector('.dropdown__label').textContent = this.items[0].label
        this.$el.addEventListener('click', event => {
            if(event.target.classList.contains('dropdown__label')){
                if(this.$el.classList.contains('open')){
                    this.close()
                } else {
                    this.open()
                } 
            } else if (event.target.tagName.toLowerCase() === 'li'){
                this.select(event.target.dataset.id);
                
            }
        })

        const itemsHTML = this.items.map(i => {
            console.log()
            return `<li data-id = "${i.id}">${i.label}</li>`
        }).join(' ')
        this.$el.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin', itemsHTML)
    }

    select(id){
        const item = this.items.find(i => i.id === id)
        this.$el.querySelector('.dropdown__label').textContent = item.label
        this.close()
        
    }

    open(){
        this.$el.classList.add('open')
    }
    close(){
        this.$el.classList.remove('open')
    }
}

const dropdown = new Dropdown('#dropdown', {
    items: [
        {label: 'Москва', id: 'msk'},
        {label: 'Санкт-Петербург', id: 'spb'},
        {label: 'Новосибирск', id: 'nsk'},
        {label: 'Краснодар', id: 'krd'},
    ]
})*/
