var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var personModel = require('../models/personSchema.js');
// for parsing application/json
router.use(bodyParser.json()); 
router.get('/', function(req, res){
    personModel.find(
        function(err, response){
            res.json(response);
        }
    );
});
router.get('/:name', function(req, res){
    personModel.find({name : req.params.name}, "name",
        function(err, response){
            res.json(response);
        }
    );
});

//export this router to use in our index.js
module.exports = router;