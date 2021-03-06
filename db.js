const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL.toString(), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("Database connected successfully !");
  } catch (err) {
    console.error(err.message);
    //process exit with failure
    process.exit(1);
  }
};
module.exports = connectDB;
