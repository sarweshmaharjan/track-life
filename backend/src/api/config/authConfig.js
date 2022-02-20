import { GENERAL } from "./config";

const jwtConfig = {
  secret: GENERAL.JWT_PRIVATE_KEY,
  Expiration: 30,
  RefreshExpiration: 400,
};

export default jwtConfig;
