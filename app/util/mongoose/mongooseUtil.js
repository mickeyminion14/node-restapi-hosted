const mongoose = require('mongoose');


mongoose.connect("mongodb://sarthak:12345noni@ds121382.mlab.com:21382/foodie", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})