const { Router } = require('express');
const router = Router();
//const { getActivities, addActivity } = require('../controllers/tourActivity.js');
const { TourActivity, Country } = require('../db.js');
const { Sequelize } = require('sequelize');

router.get("/", async (req, res) => {
    try {
        const activities = await TourActivity.findAll();
        res.status(200).send(activities);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

router.post("/create", async (req, res) => {
    try {
        const { name, difficulty, duration, season, countryId } = req.body;
        if(name) {
          const newAct = await TourActivity.create({name, difficulty, duration, season});
          newAct.addCountry(countryId);
          return res.status(200).send(newAct);
        }
        res.status(400).send("the name is required to create a new activity")
    } catch (error) {
        res.status(404).send(error.message);
    }
})




module.exports = router;
