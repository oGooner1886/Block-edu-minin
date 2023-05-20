import {Component} from '../core/component'
const userSession = localStorage.getItem('notFirstSession')
export class HeaderComponent extends Component{
    constructor(id){
        super(id)   //вызываем конструктор родителя(для получения приватной переменной 'this.$el')
    }
    
    init(){
        //console.log(this.$el); //!<header>...</header>
        if (userSession) {
        this.hide()
        }
        const btn = this.$el.querySelector('.js-header-start')  //<button>...</button>
        btn.addEventListener('click', buttonHandler.bind(this))
    }
}

function buttonHandler(){   //приватная переменна - доступна только в этом файле
    //console.log(this.$el)   //блок header
    localStorage.setItem('notFirstSession', JSON.stringify(true))
    this.hide()
   
}
