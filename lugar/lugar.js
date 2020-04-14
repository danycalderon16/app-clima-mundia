const axios = require('axios');

const getLugarLatLon = async(dir) => {

    const encodeURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "679da0beb3msh2cb5edc1ab9c68cp18e8a1jsncfac77ac052e"
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0)
        throw new Error(`No hay resutados para ${dir}`)

    const data = resp.data.Results[0];

    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLon
}