/**
 * Created by siddiqui on 15-07-2015.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //console.log("request is " + req.user.username);
    res.render('index', { title: "Tweet"});
});

module.exports = router;