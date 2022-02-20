import response from "../helpers/response";

/**
 * Checking the request for any validation
 * @async
 * @function validate
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const validate = async (req, res, next) => {
  let validated;
  const { path } = req.route;
  const method = Object.keys(req.route.methods)[0];
  const toChoose = `${method} ${path}`;
  switch (toChoose) {
    case "post /sign-up":
      // validated = createUserRequest(req.body);
      break;
    case "post /sign-in":
      // validated = authRequest(req.body);
      break;
    case "get /":
      break;
    case "get /:id":
      break;
    case "post /":
      // validated = createContactRequest(req.body);
      break;
    case "put /:id":
      // validated = updateContactRequest(req.body);
      break;
    case "delete /:id":
      break;
    case "post /:id/set-favorite":
      // validated = setFavoriteRequest(req.body);
      break;

    default:
      break;
  }
  if (validated && Object.keys(validated).length !== 0) {
    return response.failure(res, 400, validated);
  }
  next();
};

export default validate;
