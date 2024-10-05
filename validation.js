const { body, validationResult } = require('express-validator')
const productValidationRules = () => {
  return [
    body('name').isLength({ min: 3 }).withMessage('Must be a minimum of 2 characters').trim().notEmpty().withMessage('Name is required'),
    body('price').isLength({ min: 3 }).withMessage('Must be a minimum of 2 characters').trim().notEmpty().withMessage('Price is required'),
    body('quantity').isLength({ min: 3 }).withMessage('Must be a minimum of 2 characters').trim().notEmpty().withMessage('Quantity is required'),
    body('type').isLength({ min: 3 }).withMessage('Must be a minimum of 2 characters').trim().notEmpty().withMessage('Type color is required'),
    
  ]
};

const carValidationRules = () => {
    return [
      body('make').isLength({ min: 3 }).withMessage('Must be a minimum of 2 characters').trim().notEmpty().withMessage('Make is required'),
      body('model').isLength({ min: 3 }).withMessage('Must be a minimum of 2 characters').trim().notEmpty().withMessage('Model is required'),
      body('color').isLength({ min: 3 }).withMessage('Must be a minimum of 2 characters').trim().notEmpty().withMessage('Color is required'),
      body('price').isLength({ min: 3 }).withMessage('Must be a minimum of 2 characters').trim().notEmpty().withMessage('Price is required')
    ]
  }

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.path]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  productValidationRules,
  carValidationRules,
  validate,
}
  
   



