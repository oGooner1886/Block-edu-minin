const rp = require('request-promise')

module.exports = async function(city = ''){
 if(!city){
    throw new Error('Имя города не может быть пустым')
     
 }
//  console.log('City:', city);
const KEY = '07ff3dcff22c3eb4555c6ce9d1025982'
const uri = 'https://api.openweathermap.org/data/2.5/weather'

const options = {
    uri,
    qs: {
        appid: KEY,
        q: city,
        units: 'imperial',
    },
    json: true,
}
try{
    const data = await rp(options)
    const celsius = (data.main.temp - 32) * 5/9
    console.log(data);
    return {
        weather: `${data.name}: ${celsius.toFixed(0)}`,
        error: null,
    }
}catch(error){
    console.log(error);
    
    return {
        weather: null,
        error: error.error.message
    }
}


}

