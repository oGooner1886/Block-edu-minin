            //! - Create application 

let score = 0
let isGameStarted = false
            //! -  Nodes
const $time = document.querySelector('#time')
const $timeHeader = document.querySelector('#time-header')
const $resultHeader = document.querySelector('#result-header')
const $result = document.querySelector('#result')
const $game = document.querySelector('#game')
const $start = document.querySelector('#start')
const $gameTime = document.querySelector('#game-time')

//const $input = document.querySelector('input')
            //--------
            //! - MAIN
            //-------- 
$game.addEventListener('click', handleBoxClick)
$start.addEventListener('click', startGame)
$gameTime.addEventListener('input', setGameTime)


function show($el){
    $el.classList.remove('hide')
}

function hide($el){
    $el.classList.add('hide')
}

function handleBoxClick(event){
    if(!isGameStarted){
        return
    }
    if(event.target.dataset.box){
        score++
        renderBox()
    }
}

function startGame(){
    score = 0
   
    //$input.classList.add('hide')
    $gameTime.setAttribute('disabled', 'false')
    isGameStarted = true
    hide($start)
    $game.style.backgroundColor = '#fff'

    let interval = setInterval(function(){
        let time = parseFloat($time.textContent)
        if (time <= 0){
            //end game
            clearInterval(interval)
            endGame()
        }else {
            $time.textContent = (time - 0.1).toFixed(1)
        }
    }, 100)
    renderBox()
    setGameTime()
}

function endGame(){
    show($start)
    isGameStarted = false
    //$input.classList.remove('hide')
    $gameTime.removeAttribute('disabled')
    setGameScore()
    
    $game.style.backgroundColor = '#ccc'
    $game.innerHTML = ''
    hide($timeHeader)
    show($resultHeader)
}

function setGameTime(){
    let time = +$gameTime.value
    $time.textContent = time.toFixed(1)
    show($timeHeader)
    hide($resultHeader)

}

function renderBox(){
    $game.innerHTML = ''
    let box = document.createElement('div')
    let boxSize = getRandom(30, 100)
    let gameSize = $game.getBoundingClientRect()
    let maxTop = gameSize.height - boxSize  //максимальное значение отклонения 
    let maxLeft = gameSize.width - boxSize  //максимальное значение отклонения 

    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = '#000'
    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', 'true')
    $game.insertAdjacentElement('afterbegin', box)
    box.style.backgroundColor = '#' + getRandomNumbForColor(255) + getRandomNumbForColor(255) + getRandomNumbForColor(255)
    
}

function getRandomNumbForColor(max){
    return Math.floor(Math.random() * Math.floor(max)).toString(16) 
}

function getRandom(min, max){
   return Math.floor(Math.random() * (max - min) + min)     //получение рандомного ЦЕЛОГО числа
}

function setGameScore(){
    $result.textContent = score.toString()
}