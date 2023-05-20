import { Component } from "../core/component";
import { Form } from '../core/form'
import { Validators } from '../core/validators'
import { apiService } from '../services/api.service'

export class CreateComponent extends Component{
    constructor(id){
        super(id)
    }

    init() {
       this.$el.addEventListener('submit', submitHandler.bind(this))        //! form#create
              
       this.form = new Form(this.$el, {
            title: [Validators.required],
            fulltext: [Validators.required, Validators.minLength(10)],
        })
    }
}

async function submitHandler(event){
    event.preventDefault()  //чтобы при нажатии создать, форма не перезагружалась


    if (this.form.isValid ()){
        const formData = {
            type: this.$el.type.value,   //!note, news
            date: new Date().toLocaleDateString(),
            ...this.form.value(),   //конвертация в один объект
        }
        await apiService.createPost(formData)
        this.form.clear()   //!очистка формы
        alert('Запись создана в БД')
    }
  
}