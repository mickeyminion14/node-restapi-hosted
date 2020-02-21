const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://sarthak:12345noni@ds121382.mlab.com:21382/foodie";

var _db;

module.exports = {
  // _db = client.db('foodie')
  connectToServer: function(callback) {
    MongoClient.connect(
      url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      function(err, client) {
        _db = client.db("foodie");
        return callback(err);
      }
    );
  },

  getDb: function() {
    return _db;
  }
};
