import bcrypt from "bcrypt"
import Auth from "../models/authModel"
import "express-async-errors"


async function isValid(email) {
  try {
    const users = await Auth.findOne({ email });
    return users;
  } catch (error) {
    throw new Error("User is not valid.");
  }
}
async function create(data) {
  try {
    const newUser = Auth(data);
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(data.password, salt);
    const result = await newUser.save();
    return result;
  } catch (error) {
    throw new Error("New user create fail.");
  }
}

const authService = { 
  isValid,
  create
}

export default authService;
