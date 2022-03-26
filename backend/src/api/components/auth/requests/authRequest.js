import Joi from "joi";

const rules = Joi.object({
  email: Joi.string().min(5).max(255).email().required().messages({
    "string.empty": "the field is required",
    "string.email": "incorrect email format. Example: example@example.com",
  }),
  password: Joi.string().min(5).max(255).required().messages({
    "string.empty": "the field is required",
    "string.max":
      "length must be less than or equal to {{#limit}} characters long",
    "string.min": "length must be at least {{#limit}} characters long",
  }),
}).options({ abortEarly: false });

function authUser(data) {
  const result = rules.validate(data);
  const mapError = {};
  if (result.error) {
    Object.keys(result.error.details).map((key) => {
      const keyName = result.error.details[key].context.key;
      mapError[keyName] = result.error.details[key].message;
      return mapError;
    });
  }
  return mapError;
}

export default authUser;
