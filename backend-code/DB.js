const { MongoClient } = require("mongodb");

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect("mongodb://0.0.0.0:27017")
      .then((client) => {
        console.log("Connected");
        dbConnection = client.db("airlineDB");
        console.log("Connecting to table");
        return cb();
      })
      .catch((err) => {
        console.log("Error caught");
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
