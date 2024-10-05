const express = require('express');
const mongodb = require('./data/database')
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
app.use('/', require('./routes'));

app.all('*', (req, res, next) => {
    const err = new Error(`Can't find ${req.originalUrl} on the server!`);
    err.status = 'fail';
    err.statusCode = 404;

    next(err);
});

//Error handler
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    res.status(err.statusCode).json({
        status: err.statusCode,
        message: err.message
    });
});

mongodb.initDB((err) => {
    if (err) {
        console.log(err)
    }
    else {
        app.listen(port, () => {console.log(`Database is listening and running on port ${port}`)})
    }
})
