const index = async (req, res) => {
  res.send("shopList index");
};
const show = async (req, res) => {
  res.send("shopList show");
};
const store = async (req, res) => {
  res.send("shopList store");
};
const purchase = async (req, res) => {
  res.send("shopList purchase");
};
const update = async (req, res) => {
  res.send("shopList update");
};
const transfer = async (req, res) => {
  res.send("shopList transfer");
};
const destroy = async (req, res) => {
  res.send("shopList destroy");
};

const shopListController = {
  index,
  show,
  store,
  purchase,
  update,
  transfer,
  destroy,
};

export default shopListController;
