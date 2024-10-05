const express = require('express');
const router = express.Router();

const { productValidationRules, validate } = require('../validation')

const productsControllers = require('../controllers/products')

router.get('/', productsControllers.getAll);

router.get('/:id', productsControllers.getSingle );

router.post('/', productValidationRules(), validate, productsControllers.createProduct);

router.put('/:id', productValidationRules(), validate, productsControllers.updateProduct);

router.delete('/:id', productsControllers.deleteProduct)

module.exports = router;