const express = require('express');
const router = express.Router();

const { productValidationRules, validate } = require('../validation');
const { isAuthenticated } = require("../middleware/authenticate");

const productsControllers = require('../controllers/products')

router.get('/', productsControllers.getAll);

router.get('/:id', productsControllers.getSingle );

router.post('/', isAuthenticated, productValidationRules(), validate, productsControllers.createProduct);

router.put('/:id', isAuthenticated, productValidationRules(), validate, productsControllers.updateProduct);

router.delete('/:id', isAuthenticated,productsControllers.deleteProduct)

module.exports = router;