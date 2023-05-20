export class Validators{
    static required(value = ''){ //будет проверять пустой сейчас контрол или нет
        return value && value.trim()    //контрол - в createcomp this.form .................
    }

    static minLength(length){
        //замыкание
        return value => {
            return value.length >= length
        }
    }
}