const axios = require('axios');
const { Country } = require('./db.js')

const getApiCountries = async () => {
    let countriesList;
    await axios.get('https://restcountries.com/v3/all')
     .then( response => {
        countriesList = response.data.map( ct => {
            return {
                name: ct.name.common,
                id: ct.cca3,
                capital: ct.capital ? ct.capital[0] : 'This country has no capital',
                continent: ct.continents[0],
                area: ct.area,
                population: ct.population,
                subregion: ct.subregion,
                flag: ct.flags[0]
            }
        })
     })
     await Country.bulkCreate(countriesList);
}


module.exports = { getApiCountries };