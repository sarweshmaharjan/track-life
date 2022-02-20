import mongoose from "mongoose";

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    email:{
      type: String,
    },
    password:{
      type: String,
    },
    name: {
      type: String,
    },
    img_uri: {
      type: String,
    },
    created_at: {
      type: Date,
    },
    updated_at: {
      type: Date,
    },
    deleted_at: {
      type: Boolean,
    },
    metadata: {
      type: Object,
    },
  })
);

export default User;
