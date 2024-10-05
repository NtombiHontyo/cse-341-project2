const express = require('express');
const router = express.Router();

const carsControllers = require('../controllers/cars')
const { carValidationRules, validate } = require('../validation')

router.get('/', carsControllers.getAll);

router.get('/:id', carsControllers.getSingle);

router.post('/', carValidationRules(), validate, carsControllers.createCar);

router.put('/:id', carValidationRules(), validate, carsControllers.updateCar);

router.delete('/:id', carsControllers.deleteCar)



module.exports = router;