const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World')
});

router.use('/products', require('./products'));
router.use('/cars', require('./cars'))

module.exports = router;