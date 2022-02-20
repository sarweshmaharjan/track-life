const show = async (req, res) => {
  res.send("user show");
};
const checkOldPassword = async (req, res) => {
  res.send("user checkOldPassword");
};
const changePassword = async (req, res) => {
  res.send("user changePassword");
};
const update = async (req, res) => {
  res.send("user update");
};
const destroy = async (req, res) => {
  res.send("user destroy");
};

const userController = {
  show,
  checkOldPassword,
  changePassword,
  update,
  destroy,
};

export default userController;
