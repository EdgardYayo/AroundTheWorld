const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRouter = require('./country.js');
const activitiesRouter = require('./tourActivity.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/countries', countriesRouter);
router.use('/activity', activitiesRouter);

router.get('/' , ( req, res ) => {
    res.send('Home')
});

module.exports = router;
