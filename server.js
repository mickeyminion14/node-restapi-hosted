const express = require("express");
const app = express();

const mongooseUtil = require('mongoose');

const apiEndpoints = require("./app/routes");
app.set("view engine", "html");
const PORT = process.env.PORT || 8080;
const HOST = process.env.host || "0.0.0.0";
app.use(express.json());
app.use(express.static("./public"));

var mongoUtil = require("./app/util/mongo/mongoUtil");

app.use("/", apiEndpoints);

app.use((req, res) => {
    res.send("404 page not found !!");
});

// mongoUtil.connectToServer((err, client) => {
//     if (err) console.log(err);
app.listen(PORT, () => {
    console.log("server running on https://" + HOST + ":" + PORT + "/");
});
// });