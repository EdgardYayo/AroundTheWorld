const { Router } = require('express');
const router = Router();
const { getAllCountries } = require('../controllers/country')
// const { 
//     getCountries,
//  } = require('../controllers/country.js');
const { Country, TourActivity } = require('../db.js')
const axios = require('axios');


router.get('/', async ( req, res ) => {
  try {
    getAllCountries();
    const countries = await Country.findAll({
      include: TourActivity
    })
    res.status(200).send(countries);
  } catch (error) {
    res.status(404).send(error.message)
  }
})


router.get('/name', async ( req, res) => {
  try {
    const { name } = req.query;
    let countryName;
    await axios.get(` https://restcountries.com/v3/name/${name}`)
    .then( response => {
      countryName = response.data.map( ct => {
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
   })
   res.status(200).send(countryName)
  } catch (error) {
   res.status(404).send(error.message)
  }
})


router.get('/:id', async ( req, res) => {
  try {
    const { id } = req.params
    let countryId;
    await axios.get(`https://restcountries.com/v3/alpha/${id}`)
      .then( response => {
        countryId = response.data.map( ct => {
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
   })
   res.status(200).send(countryId);
  } catch (error) {
    res.status(404).send(error.message);
  }
})


 module.exports = router;