import mongoose from "mongoose";
import { DB } from "./config";

const connect =() =>{
  mongoose
    .connect(
      `mongodb://${DB.USER}:${DB.PASSWORD}@${DB.API}/${DB.NAME}?authSource=admin`
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Could not connect to MongoDB: "+err.message));
}

export default connect;
