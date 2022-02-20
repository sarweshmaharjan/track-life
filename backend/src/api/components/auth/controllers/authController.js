/* import bcrypt from "bcrypt";
import  registerUsersRequest from "../requests/registerUsersRequest";
import  authRequest from "../requests/authRequest";
import  authService from "../services/authService";
import  response from "../../../helpers/response";
import  helper from "../../../helpers/helper"; */
import "express-async-errors";
/**
 * Async function to register new user
 * @param {object} req
 * @param {object} res
 * @returns json response
 */
const register = async (req, res) => {
  res.send("register");
  /*  // Performing Request Validation
  const validated = registerUsersRequest(req.body);
  if (Object.keys(validated).length!==0)
    return response.failure(res, 400, validated);

  // Checking if the user already exist or not.
  const checkUser = await authService.isValid(req.body.email);
  // console.log(checkUser);
  if (checkUser) return response.failure(res, 400,{message: "User already exists"});
  // Creating new user.
  try {
    const newUser = await authService.register(
      helper.pick(req.body, ["email", "name", "password"])
    );

    // Generating Token upon sucessful creation.
    const token = newUser.generateAuthToken();
    return response.successWithHeader(
      res,
      token,
      helper.pick(newUser, ["email", "name"]),
      "User registerd Successfully"
    );
  } catch (error) {
    return response.failure(res, 204, {message: "Could not register new user"});
  } */
};
/**
 *
 * @param {object} req
 * @param {object} res
 * @returns json response
 */
const login = async (req, res) => {
  res.send("login");
  /* // Request validation.
  const validated = authRequest(req.body);
  if (Object.keys(validated).length!==0)
    return response.failure(res, 400, validated);

  // Checking if email exist or not.
  const user = await authService.isValid(req.body.email);
  if (!user) return response.failure(res, 400, {message: "Invalid email or password"});

  // Checking encrypted password.
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return response.failure(res, 400, {message: "Invalid email or password"});
  }

  // Generating token
  const token = user.generateAuthToken();
  return response.success(res, token, "User Authenticated"); */
};
const refreshToken = async (req, res) => {
  res.send("refreshToken");
};
const forgetPassword = async (req, res) => {
  res.send("forgetPassword");
};
const resetPassword = async (req, res) => {
  res.send("resetPassword");
};

const authController = {
  register,
  login,
  forgetPassword,
  resetPassword,
  refreshToken,
};

export default authController;
