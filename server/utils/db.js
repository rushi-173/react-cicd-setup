import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URI = process.env.MONGODB_URI;
// console.log(URI);

const connectDb = async () => {
  try {
    await connect(URI);
    console.log("connection successful to DB");
  } catch (error) {
    console.error("database connection fail", error.message);
    process.exit(0);
  }
};

export default connectDb;
