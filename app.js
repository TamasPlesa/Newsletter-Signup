const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")

const app = express();


app.listen(3000, ()=> {
    console.log("App is listening to port 3000")
})

