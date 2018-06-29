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
    res.render('form', {title : "Sign Up"});
});
router.post('/', function(req, res){
    var user_entry= req.body;
    if(user_entry.name === null || user_entry.name ===""){
        res.render("show_message", {message : "Please enter the Name" , type: "error", title: "Error"});
    }
    else if(user_entry.password ===null || user_entry.password===""){
        res.render("show_message",{message: "Please provide a password", type:"error", title: "Error"});
    }
    else{
        var newPerson = new personModel(
            {
            name : user_entry.name,
            password : user_entry.password
            }
        );
        newPerson.save(function(err, personModel){
            if(err){
                res.render("show_message", {message: "Oopse, Database Error: ", type:"error", title: "Error"});
            }
            else{
                res.render("show_message", {message:"Thanks for signing up, " + user_entry.name, type : "success", title: "Success"});
            }
        })
    }
});


//export this router to use in our index.js
module.exports = router;