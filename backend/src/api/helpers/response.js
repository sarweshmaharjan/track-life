const failure = (res, http, err) =>
  res.status(http.status).send({
    status: http.status,
    statusType: http.statusType,
    message: http.message,
    err,
  });

const success = (res, data, http, header = null) => {
  const jsonResponse = {
    status: http.status,
    statusType: http.statusType,
    message: http.message,
    data,
  };
  if (header !== null) {
    return res
      .status(200)
      .header("x-auth-token", header)
      .header("access-control-expose-headers", "x-auth-token")
      .send(jsonResponse);
  }
  return res.status(http.status).send(jsonResponse);
};

const response = {
  success,
  failure,
};

export default response;
