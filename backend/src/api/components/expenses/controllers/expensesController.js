const index = async (req, res) => {
  res.send("expenses index");
};
const show = async (req, res) => {
  res.send("expenses show");
};
const store = async (req, res) => {
  res.send("expenses store");
};
const update = async (req, res) => {
  res.send("expenses update");
};
const destroy = async (req, res) => {
  res.send("expenses destroy");
};

const expensesController = {
  index,
  show,
  store,
  update,
  destroy,
};

export default expensesController;
