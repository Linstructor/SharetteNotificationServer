var express = require('express');
var querystring = require('querystring');
var url = require('url');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var parametres = querystring.parse(url.parse(req.url).query);
    console.log(parametres);
    res.send('respond with a resource');
});

module.exports = router;
