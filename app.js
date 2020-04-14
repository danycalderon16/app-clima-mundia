const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const arvg = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//arvg.direccion

// lugar.getLugarLatLon(arvg.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(err => {
//         console.log("Error");
//     });

// clima.getClima(21.037500, -86.876945)
//     .then(console.log)
//     .catch(err => {
//         console.log(err);
//     });

const getInfo = async(direccion) => {

    try {
        const coord = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);

        return `El clima de la ciudad ${direccion} es ${temp}°C`;
    } catch (error) {
        return error;
    }
}

getInfo(arvg.direccion)
    .then(console.log)
    .catch((err) => {
        console.log(err);
    });