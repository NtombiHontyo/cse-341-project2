const express = require('express');
const router = express.Router();

const carsControllers = require('../controllers/cars')

router.get('/', carsControllers.getAll);

router.get('/:id', carsControllers.getSingle);

router.post('/', carsControllers.createCar);

router.put('/:id', carsControllers.updateCar);

router.delete('/:id', carsControllers.deleteCar)



module.exports = router;