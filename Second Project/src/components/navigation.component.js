import { Component } from '../core/component'
export class NavigationComponent extends Component{
    constructor(id){
        super(id)   //id = navigation(id в html)        
        this.tabs = []  //приватный массив
    }

    init(){     //забрали метод init от родительского класса Component
        this.$el.addEventListener('click', tabClickHandler.bind(this))
    }

    registerTabs(tabs){
        this.tabs = tabs
    }

        
}

function tabClickHandler(event) {
    event.preventDefault()
    if(event.target.classList.contains('tab')){
        Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => {  //!this.$el - блок ul. Перебор псевдомассива и сообщаем ему что на каждом табе нужно убрать класс
            tab.classList.remove('active')
        })
        event.target.classList.add('active')
        
        //взаимодействуем с data-name, для открытия li
        const activeTab = this.tabs.find(tab => tab.name === event.target.dataset.name)
        this.tabs.forEach(tab => tab.component.hide()) //сначала скрываем все, затем показываем по которому кликнули
        activeTab.component.show()       
            
        
        
    }        
}