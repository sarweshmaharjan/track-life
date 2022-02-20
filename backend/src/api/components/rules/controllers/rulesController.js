const index = async (req, res) => {
  res.send("rules index");
};
const store = async (req, res) => {
  res.send("rules store");
};
const update = async (req, res) => {
  res.send("rules update");
};

const rulesController = {
  index,
  store,
  update,
};

export default rulesController;
