const express = require('express');
const bodyParser = require('body-parser');
const bll = require('./../01_BLL/index');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use middlewares (app level - not controller level):
// this middleware allows to access files in the given folder (this is for css, js, etc...)
app.use(express.static(__dirname + "/views"));

// Main page:
app.get("/", (req, res) => {
    res.status(200);
    res.sendfile(__dirname + "/views/index.html")
})

// ADD A NEW CAR (the car is a json object in the request body)
app.post("/api/chair", (req, res) => {
    let newChair = req.body;

    bll.addChair(newChair,
        (p2, p3) => {
            res.status(201);
            res.send(p2);
        },
        (p1) => {
            res.status(400);
            res.send(p1);
        }
    );
})
