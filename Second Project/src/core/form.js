export class Form{
    constructor(form, controls){
        this.form = form
        this.controls = controls
        
        
    }

    
    
    value(){
        const value = {}
        //! ПОЧЕМУ ЗДЕСЬ ОБЪЕКТ
        Object.keys(this.controls).forEach(control => {//возвращает массив ключей и после перебор
            value[control] = this.form[control].value
            console.log(this.form[control].value);
        }) 
        
        
         return value
    }

    //! очистка формы после создания
    clear(){
        Object.keys(this.controls).forEach(control => {//возвращает массив ключей и после перебор
            this.form[control].value = ''
        }) 
    }

    isValid(){
        let isFormValid = true

        Object.keys(this.controls).forEach(control => {
            const validators = this.controls[control]
            
            let isValid = true
            validators.forEach(validator => {
                isValid = validator(this.form[control].value) && isValid
            })
            
            isValid ? clearError(this.form[control]) : setError(this.form[control])
            isFormValid = isFormValid && isValid
        })
        

        return isFormValid
    }
}

function setError($control){
    //console.log($control);    //! это два блока (название и текст)
    clearError($control)
    const error = '<p class = "validation-error">Введите корректное значение</p>'
    $control.classList.add('invalid')
    $control.insertAdjacentHTML('afterend', error)

    
}

function clearError($control){
    $control.classList.remove('invalid')
    if($control.nextSibling){
        $control.closest('.form-control').removeChild($control.nextSibling)
    }
    
}