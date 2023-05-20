import { Component } from "../core/component";
import { apiService } from "../services/api.service";
import { TransformService } from "../services/transform.service";
import { renderPost } from "../templates/post.template"
//import { LoaderComponent } from "./loader.component";

export class PostsComponent extends Component{
    constructor(id, {loader}){
        super(id)
        this.loader = loader
    }

    init(){
        this.$el.addEventListener('click', buttonHandler.bind(this))
    }
   async onShow(){
        this.loader.show()
        const fbData = await apiService.fetchPosts()
        const posts = TransformService.fbObjectToArray(fbData) //posts - массив
        const html = posts.map(post => renderPost(post, {withButton: true})).join(' ')  //на каждой итерации получаем пост и возвращаем новую верстку
        this.loader.hide()
        this.$el.insertAdjacentHTML('afterbegin', html)
              
    }

    onHide(){
        this.$el.innerHTML = ''
    }
}

function buttonHandler(event){
    const $el = event.target
    const id = $el.dataset.id
    const title = $el.dataset.title
    
        
    if(id){ //клик по кнопке
        
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [] //если ничего не вернется с первого, то будет пустой массив
        
        let checkEl = favorites.find(post => post.id === id)

        if(checkEl){
            //удалить элемент
            $el.textContent = 'Сохранить'
            $el.classList.add('button-primary')
            $el.classList.remove('button-danger')
            favorites = favorites.filter(post => post.id !== id)
        }else {
            //добавить элемент
            $el.classList.remove('button-primary')
            $el.classList.add('button-danger')
            $el.textContent = 'Удалить'
            favorites.push({id, title})
        }

        // if(favTitle.includes(title)){
        //     favTitle = favTitle.filter(favT => favT !== title)
        //     // console.log(favTitle);
            
        // }else {
        //     favTitle.push(title)
        // }
        localStorage.setItem('favorites', JSON.stringify(favorites))
        // localStorage.setItem('title', JSON.stringify(favTitle))
        

    }
    
}