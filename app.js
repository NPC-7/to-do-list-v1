//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser")

const app = express()

app.get("/", function (req, res){

    var today = new Date();
    var currentDay = today.getDay()

    if(currentDay === 6 || currentDay === 0){
        res.write("<h1>Yay! It's the weekend.</h1>")
    }else {
        res.write("<p>It's a weekday.</p>")
        res.write("<h1>Booo! I have to work.</h1>")
    }

    res.send()
})

app.listen(3000, function (){
    console.log("server is runnning on port 3000")
})