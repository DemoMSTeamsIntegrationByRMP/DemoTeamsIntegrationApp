var express = require("express");
var app = express();
var http = require("http");
var server = http.createServer(app);
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(err, req, res, next) {
res.header("Access-Control-Allow-Origin");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next(err);
});
app.get("/test",(req,res)=>{
    console.log("hi")
   return res.json({status:200,msg:"successfully created "})
})
server.listen(3000, function () {
console.log('Example app listening on port 3000!');
});