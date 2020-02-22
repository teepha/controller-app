import mongoose from "mongoose";
import config from "./config";

// MongoDB connection
const connectToDB = () => {
  return mongoose.connect(config.dbUrl, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });
};

export default connectToDB;
