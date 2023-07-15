const { Country, TourActivity } = require('../db.js');
const axios = require('axios');
const { Op, where } = require('sequelize');
const { ALL_URL } = require('../urls');

const getAllCountries = async () => {
 const API = await axios.get('https://restcountries.com/v3/all')
      const countriesList = await API.data.map( ct => {
          return {
              name: ct.name.common,
              id: ct.cca3,
              capital: ct.capital ? ct.capital[0] : 'This country has no capital',
              continent: ct.continents ? ct.continents : 'This country has no continent',
              area: ct.area ? ct.area : 'This country has no area',
              population: ct.population,
              subregion: ct.subregion ? ct.subregion : 'This country has no subregion',
              flag: ct.flags[0]
          }
      })

countriesList.forEach(e =>{
    Country.findOrCreate({
        where:{
            id: e.id,
            name: e.name,
            flag: e.flag,
            continent: e.continent[0],
            capital: e.capital,
            subregion: e.subregion,
            area: e.area,
            population: e.population,
        }
    })
})
return countriesList;
}


module.exports = {
    getAllCountries
}




