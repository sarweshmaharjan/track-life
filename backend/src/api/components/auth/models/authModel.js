import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { GENERAL } from "../../../config/config";

const AuthSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
});

AuthSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { _id: this._id, email: this.email, name: this.name },
    GENERAL.JWT_PRIVATE_KEY
  );
};
// DB model: Contact
const Auth = new mongoose.model("Auth", AuthSchema);

export default Auth;
