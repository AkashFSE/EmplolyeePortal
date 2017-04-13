var express = require('express');
var path = require('path');
var mongoose=require('mongoose');
var bodyParser = require('body-parser');
var employeeModelController=require(__dirname+"/server/controllers/EmployeeModel.controller.js");


var app = express();

mongoose.Promise=global.Promise;
mongoose.connect("mongodb://Belal:tadpole@ds157549.mlab.com:57549/belalnode");


//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/js",express.static(path.join(__dirname, 'public','javascripts')));

app.get("/",function(req,res){
res.sendFile(__dirname+"/views/homepage.html");
});
app.post("/createAEmployee",employeeModelController.createAUser);
app.get("/getAllEmployees",employeeModelController.getAllUsers);
app.put("/updateAEmployee/:_id",employeeModelController.updateAUser);
app.delete("/deleteAEmployee/:_id",employeeModelController.deleteAUser);


app.listen(8080,function(){
console.log("Listening on PORT 8080");
});


