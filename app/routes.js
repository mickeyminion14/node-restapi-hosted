const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const mongoUtil = require("./util/mongo/mongoUtil");
const User = require('./models/userModel');
// console.log('user>>>>>>>', User);

router.use(bodyParser.json());

async function getData(db) {
    return await db
        .collection("lol")
        .find()
        .toArray();
}

router.get("/addMongo", (req, res) => {
    var db = mongoUtil.getDb();

    let result = getData(db);

    result.then((data, err) => {
        res.json({
            data: data
        });
    });
});

router.post("/mongoose", async (req, res) => {
    console.log(req.body);

    const user = new User(req.body);
    user.save().then(data => res.send("done")).catch(err => res.send("error"))


});

module.exports = router;