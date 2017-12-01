// server.js
// Version: Jo Cox

// BASE SETUP
// =============================================================================

var mongoose = require('mongoose');
mongoose.connect('mongodb://10.0.0.21:27017/bears'); // connect to our database
var Bear = require('./app/models/bear');

// call the packages we need
var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ strict: false }));

// utility function
var console_message = function (req) {
    console.log("url     : " + req.url);
    console.log("params  : " + JSON.stringify(req.params));
    console.log("body    : " + JSON.stringify(req.body));
    console.log("method  : " + req.method);
}

// CORS headers
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var port = process.env.PORT || 9090;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.use(function (req, res, next) {
    // do logging
    console.log('Something is happening. ' + Date());
    next(); // make sure we go to the next routes and don't stop here
});

router.use(function (req, res, next) {
    // do logging
    console.log('Something happened. ' + Date());
    res.h
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function (req, res, next) {
    res.json({ message: 'hooray! welcome to our api!' });

});



// more routes for our API will happen here
// on routes that end in /bears
// ----------------------------------------------------
router.route('/bears')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function (req, res) {
        console_message(req);
        var bear = new Bear();      // create a new instance of the Bear model
        bear.name = req.body.name;  // set the bears name (comes from the request)
        bear.created_at = new Date;

        // save the bear and check for errors
        bear.save(function (err, saved_bear) {
            if (err)
                res.send(err);

            // res.json({ message: '>>> Bear created! : ' + bear.name + "<<<" });
            console.log(JSON.stringify(saved_bear));
            // saved_bear.id = saved_bear._id; // uebersetzer, versorger .here
            res.json(saved_bear);
        });
    })

    // get all the bears (accessed at GET http://localhost:8080/api/bears)
    .get(function (req, res) {
        console_message(req);
        Bear.find(function (err, bears) {
            if (err)
                res.send(err);

            res.json(bears);
        });
    });

router.route('/bears/:bear_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function (req, res) {
        console_message(req);
        Bear.findById(req.params.bear_id, function (err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
        });
    })

    // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
    .put(function (req, res) {
        console_message(req);

        // use our bear model to find the bear we want
        Bear.findById(req.params.bear_id, function (err, bear) {

            if (err)
                res.send(err);

            // if bear was not found
            if (!bear) {
                res.send({ message: 'bear not found' });
            } else {

                bear.name = req.body.name;  // update the bears info

                // save the bear
                bear.save(function (err) {
                    if (err)
                        res.send(err);

                    // res.json({ message: 'Bear updated!' });
                    res.json(bear);
                });
            }
        });
    })

    // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
    .delete(function (req, res) {
        console_message(req);
        Bear.remove({
            _id: req.params.bear_id
        }, function (err, was_deleted) {
            if (err)
                res.send(err);

            console.log('was deleted: ' + was_deleted);
            if (was_deleted) {
                res.status(204).send();
            } else {
                res.status(404).send();
                //res.json({ message: 'deleted ' + was_deleted });
            }
        });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);



// START THE SERVER
// =============================================================================
app.listen(port, '0.0.0.0');
console.log('Magic happens on port ' + port);
