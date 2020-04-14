const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=cd8d530ec9b3f1034023506d5ade52c8&units=metric`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}