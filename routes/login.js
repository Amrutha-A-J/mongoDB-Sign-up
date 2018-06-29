var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var personModel = require('../models/personSchema.js');
// for parsing application/json
router.use(bodyParser.json()); 

// for parsing application/xwww-
router.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

router.get('/', function(req, res){
    res.render('loginForm', {title : "Login"});
});
router.post('/', function(req, res){
    var user_entry = req.body;
    if(user_entry.name === null || user_entry.name ===""){
        res.render("show_message", {message : "Please enter the Name" , type: "error"});
    }
    else if(user_entry.password ===null || user_entry.password===""){
        res.render("show_message",{message: "Please provide a password", type:"error"});
    }
    else{
        personModel.findOne({name : user_entry.name, password: user_entry.password}, "name",
            function(err, response){
                if(err || !response)
                {
                    res.render("loginResult", {status: "failed", name: ""});
                }
                else{
                    console.log(response);
                    res.render("loginResult", {status: "success", name: user_entry.name});
                }
            }
        );
    }
});

//export this router to use in our index.js
module.exports = router;