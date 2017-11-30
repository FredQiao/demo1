var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("go index");
    request('http://localhost:9090/api/hello/1312', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the baidu homepage.
            res.render('index', { title: 'Express', name: body });
        }
    })
});

/* GET users listing. */
router.get('/users', function(req, res, next) {
    console.log("go user");
    request('http://localhost:9090/api/hello/1312', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the baidu homepage.
            res.render('index', { title: 'Express', name: body });
        }
    })
});

/* GET users listing. */
router.get('/air', function(req, res, next) {
    console.log("go air");
    res.render('index', { title: 'Express', name: "air" });
});

module.exports = router;
