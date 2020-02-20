const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
    'extended': 'true'
}));

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.use(bodyParser.json());





router.post("/add", (req, res) => {

    res.send("data posted successfully");

});

router.get("/getData", (req, res) => {
    res.send("this is data from server");
})




module.exports = router;