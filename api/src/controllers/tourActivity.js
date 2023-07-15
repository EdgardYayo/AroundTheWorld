const { TourActivity } = require('../db.js')
let ID = 1;

const getActivities = () => {
    let activities = [];
    return TourActivity.findAll()
     .then( response => {
        response.forEach( ACTV => activities.push(ACTV.name));
        return activities;
     })
}

const addActivity = ( name, difficulty, duration, season, countryId ) => {
    return TourActivity.create({
        id: ID++,
        name,
        difficulty,
        duration,
        season
    })
    .then( res => res.addCountries(countryId));

}



module.exports = {
    getActivities,
    addActivity
}