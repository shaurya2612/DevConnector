const mongoose = require("mongoose");
const config = require("config");
const dbUri = config.get("mongoURI");

const connectDb = async () => {
  try {
    await mongoose.connect(
      dbUri,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,  
        useCreateIndex: true,
        useFindAndModify: false,
      },
      () => {
        console.log("MongoDb connected...");
      }
    );
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDb;
