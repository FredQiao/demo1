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
router.get('/form', function(req, res, next) {
    console.log("go form");
    res.render('form', { title: 'Express' });
});

/* upload file */
router.post('/upload', function(req, res, next) {
    var file = req.body.file;
    console.log("go air" + file);
    res.render('index', { title: 'Express', name: file });
});

module.exports = router;
