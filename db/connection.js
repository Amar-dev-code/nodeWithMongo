const mongoose = require("mongoose");

const constants = require("../constants");
const URI = constants.dbUri;

const connectDb = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connection successful");
};

module.exports = connectDb;
