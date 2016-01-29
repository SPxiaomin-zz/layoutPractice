var express = require('express');
var path = require('path');
var logger = require('morgan');

var routes = require('./routes/index');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;

    next(err);
});


if ( app.get('env') === 'development' ) {
    app.use(function(err, req, res, next) {
        if ( !err.status ) {
            err.status = 500;
        }
        res.status(err.status);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function(err, req, res, next) {
    if ( !err.status ) {
        err.status = 500;
    }
    res.status(err.status);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


app.listen(3000, function(req, res, next) {
    console.log('App Started on Port 3000...');
});
