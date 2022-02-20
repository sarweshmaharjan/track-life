const success = (res, data, message) =>
  res.status(200).send({ status: 200, data, message });

const successWithHeader = (res, header, data, message) =>
  res
    .status(200)
    .header("x-auth-token", header)
    .header("access-control-expose-headers", "x-auth-token")
    .send({ status: 200, data, message });
const failure = (res, status, err) => res.status(status).send({ status, err });

const response = {
  success,
  successWithHeader,
  failure,
};

export default response;
