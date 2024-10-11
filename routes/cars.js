const express = require('express');
const router = express.Router();

const carsControllers = require('../controllers/cars')
const { carValidationRules, validate } = require('../validation')
const { isAuthenticated } = require("../middleware/authenticate");

router.get('/', carsControllers.getAll);

router.get('/:id', carsControllers.getSingle);

router.post('/', isAuthenticated, carValidationRules(), validate, carsControllers.createCar);

router.put('/:id', isAuthenticated, carValidationRules(), validate, carsControllers.updateCar);

router.delete('/:id', isAuthenticated, carsControllers.deleteCar)



module.exports = router;