const index = async (req, res) => {
  res.send("category index");
};
const store = async (req, res) => {
  res.send("category store");
};
const update = async (req, res) => {
  res.send("category update");
};
const destroy = async (req, res) => {
  res.send("category destroy");
};

const categoryController = {
  index,
  store,
  update,
  destroy,
};

export default categoryController;
