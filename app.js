const express = require('express');
const path = require('path');
const morgan = require('morgan')
const errorHandler = require("errorhandler");
const index = require('./routes/index');
require('./database');

const app = express();
module.exports = app;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

require('./config/session.config');
require('./config/passport.config');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(index);

if (process.env.NODE_ENV === 'dev') {
    app.use(errorHandler());
} else {
    app.use((err, req, res, next) => {
        const code = err.code || 500;
        res.status(code).json({
            code: code,
            message: code ? null : err.message
        })
    })
}
