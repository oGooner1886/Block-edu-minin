//! Урок №2
/*const fs = require('fs')
const data = `
    Hello from NodeJS
    I am random text
`

fs.writeFileSync('nodejs.txt', data)
const result = fs.readFileSync('nodejs.txt', {encoding: 'utf-8'})
console.log(result);

console.log(__dirname);
console.log(__filename);*/

//! Урок №3 (что такое npm)
/*
npm init
npm i express --save
npm i nodemon -d 
npm i nodemon --save-dev
*/

//! Урок №4. Первый веб-сервер на Express
//! Урок №5. Создание веб-страницы
//! Урок №6. Обработка формы
//! Урок №7. Получение API ключа 07ff3dcff22c3eb4555c6ce9d1025982
//! Урок №8. Создание модуля
//! Урок №9. Получение погоды

const express = require('express')
const bodyParser = require('body-parser')
const weatherRequest = require('./request/weather.request')

const app = express()

app.set('view engine', 'ejs')       //по умолчанию файлы ejs
app.use(express.static('public'))   //указываем путь который будет статичным, указали папку паблик 
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    
    res.render('index')
    
})

app.post('/', async (req, res) => {
    const { city } = req.body

    const {weather, error} = await weatherRequest(city)
    
    res.render('index', {weather, error})
})

app.listen(3000, () => {
    console.log('Server has started on port 3000...');
    
})



