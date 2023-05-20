//!-------------------------------------------------------------------------------------------
//! 1. Интервалы и таймеры
/*В этом уроке вы узнаете, как работать с нативными асинхронными функциями,
такие как setTimeout и setInterval, а также узнаете про то,
как их очищать и настраивать.*/


/*
setTimeout(function(){
    alert('Hello')
}, 2000)
*/
/*let counter = 0
let interval = setInterval(function(){
    console.log(++counter);
    
}, 1000)
setTimeout(function(){
    clearInterval(interval)
}, 5000)*/
//!-------------------------------------------------------------------------------------------
//! 2. Старый подход: Callbacks
/*В этом видео показано создание эмуляции клиент серверного 
взаимодействия и последовательно обрабатывается 5 асинхронных запросов 
используя Callbacks.*/
/*
console.log('Клиент: хочу получить список пользователей');
console.log('...');

setTimeout(function(){
    console.log('Сервер: запрашиваю список пользователей в БД');
    console.log('...');

    setTimeout(function(){
        console.log('БД: формирую список пользователей');
        console.log('...');
        
        setTimeout(function(){
            console.log('Сервер: трансформирую данные для клиента');
        console.log('...');

            setTimeout(function(){
                console.log('Клиент: получил данные  и отображаю их');
                console.log('...');
            }, 1000)
        }, 500)
    }, 500)
}, 1000)*/
//!-------------------------------------------------------------------------------------------
//! 3. Как работает Promise
/*В этом видео вы познакомитесь с таким классом как Promise, 
который позволяет очень удобно работать с асинхронными функциями. 
Далее показано, как переписать прошлый урок с эмуляцией на Promise и 
увидите, как эти подходы отличаются.*/

/*let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        
        console.log('Сервер: запрашиваю список пользователей в БД');
        console.log('...');
        resolve()
    }, 2000)
})

promise.then(function(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            let users = [
                {uid: 'id1', name: 'Maxim'}, 
                {uid: 'id2', name: 'Elena'}, 
             ]
            //  reject('БД не смогла получить список пользователей')
            console.log('БД: формирую список пользователей');
            console.log('...');
            resolve(users)
        }, 1000)
    })
.then(function(dbUsers){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                console.log('Сервер: трансформирую данные для клиента');
                console.log('...');
                let users = dbUsers.map(function(user){
                    return {
                        id: user.uid,
                        firstName: user.name,
                        timestamp: Date.now(),
                    }
                })
                resolve(users)
            }, 1000)
        })
    })
})
.then(function(users){
    setTimeout(function(){
        console.log('Клиент: получил данные  и отображаю их', users);
        console.log('...');
    }, 1000)
})

.catch(function(error){
    console.error(error);
    
})
// .finally(function(){
//     console.log('Finally');
    
// })*/
//!-------------------------------------------------------------------------------------------
//! решение задачи с классами с learn js
/*function Clock({ template }) {
  
    let timer;
  
    function render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  
  }
  
  let clock = new Clock({template: 'h:m:s'});
  clock.start();*/

  /*class Clock {
    constructor({template}){
        this.template = template
    }
    render(){
        let date = new Date()
        let hours = date.getHours();
          if (hours < 10) hours = '0' + hours;
      
          let mins = date.getMinutes();
          if (mins < 10) mins = '0' + mins;
      
          let secs = date.getSeconds();
          if (secs < 10) secs = '0' + secs;
      
          let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
      
          console.log(output);
      }
      stop(){
        clearInterval(timer);
      };
    
      start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
      };
    
    }
    
    let clock = new Clock({template: 'h:m:s'});
    clock.start();*/
//!------------------------------------------------------------------------------------------- 
//! 4. Метод Fetch
/*
            const loading = document.querySelector('#load')
            loading.addEventListener('click', load)
            function load(){
                let url = 'https://jsonplaceholder.typicode.com/users'
                
                fetch(url) //запрос на удаленный сервер и возвращает промис

                    .then(function(response){
                        return response.json()

                    })
                    .then(function(data){
                       let ul = document.querySelector('#list')
                       let html = data.map(function(item){
                           return '<li>' + item.id + ' ' + item.name + '(' + item.email + ' ' + ')</li>'
                        })
                        ul.insertAdjacentHTML('afterbegin', html.join(''))

                   })
            }
*/
//!-------------------------------------------------------------------------------------------
//! 5. Async Await
/*
const loading = document.querySelector('#load')
loading.addEventListener('click', load)
let url = 'https://jsonplaceholder.typicode.com/users'
async function load(){
    let response = await fetch(url)
    let data = await response.json()
    let html = data.map(function(item){
        return '<li>' + item.id + ' ' + item.name + '(' + item.email + ' ' + ')</li>'
     })
     document.querySelector('#list').insertAdjacentHTML('afterbegin', html.join(''))
}*/
//!-------------------------------------------------------------------------------------------
//! 6. Еще о промис (all и race)
/*
function sleep(ms){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve()
        }, ms);
    })
}
let p1 = sleep(1500).then(function(){
    return {
        name: 'Promise 1500',
    } 
})
let p2 = sleep(3000).then(function(){
    return {
        name: 'Promise 3000',
    } 
})
let p3 = sleep(4000).then(function(){
    return {
        name: 'Promise 4000',
    } 
})

async function start(){
    let dataALl = await Promise.all([p1, p2, p3])
    let dataRace = await Promise.race([p1, p2, p3])
    console.log(dataALl);
    console.log(dataRace);
}
start()*/
//!-------------------------------------------------------------------------------------------
//! 7. Задание: реализовать промисы
/*let promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(2)
    }, 2000);
})

promise
    .then(num => num *= 2)
    .catch(err => console.log(err))
    .then(num => num *= 3)
    .finally(() => console.log('FINAL'))
*/

/*
class MyPromise{
    constructor(callback){
        this.onCatch = null
        this.onFinally = null
        this.onThen = []
        this.isRejected = false

        function resolver (data){
            if(this.isRejected){
                return
            }
            this.onThen.forEach(cb => {
                data = cb(data)
            });
            
            
            if(this.onFinally){
                this.onFinally()
            }

        }
        function rejecter (error){
            this.isRejected = true
            if(this.onCatch){
                this.onCatch(error)
            }
            if(this.onFinally){
                this.onFinally()
            }
        }
        
        callback(resolver.bind(this), rejecter.bind(this))
    }

    then(cb){
        this.onThen.push(cb)
        return this
    }
    catch(cb){
        this.onCatch = cb
        return this
    }
    finally(cb){
        this.onFinally = cb
        return this
    }
}


const promise = new MyPromise((resolve, reject)=>{
    setTimeout(() => {
        reject('Some error')
        resolve(2)
    }, 2000);
})

promise
    .then(num => num *= 2)
    .catch(err => console.error(err))
    .then(num => num *= 3)
    .finally(() => console.log('FINAL'))
    .then(num => console.log(num))


*/

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  askPassword(this.ok(), fail);











//!-------------------------------------------------------------------------------------------
/*function squareSum(numbers){
    let sq = numbers.map(item => item * item);

    let result = sq.reduce((sum, current) => sum + current, 0);
    return result
  }


  console.log(squareSum([1, 2, 3, 4, 5]));*/
  