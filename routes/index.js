const router = require('express').Router();

router.use('/', require('./swagger'))

router.get('/', (req, res) => {
    res.send('Hello World')
});

router.use('/products', require('./products'));
router.use('/cars', require('./cars'))

module.exports = router;