const index = async (req, res) => {
  res.send("income index");
};
const show = async (req, res) => {
  res.send("income show");
};
const indexPermanentDeductible = async (req, res) => {
  res.send("income permanent deductible index");
};
const store = async (req, res) => {
  res.send("income store");
};
const storePermanentDeductible = async (req, res) => {
  res.send("income permanent deductible store");
};
const update = async (req, res) => {
  res.send("income update");
};
const updatePermanentDeductible = async (req, res) => {
  res.send("income permanent deductible update");
};
const destroy = async (req, res) => {
  res.send("income destroy");
};
const destroyPermanentDeductible = async (req, res) => {
  res.send("income permanent deductible destroy");
};

const incomeController = {
  index,
  show,
  store,
  update,
  destroy,
  indexPermanentDeductible,
  storePermanentDeductible,
  updatePermanentDeductible,
  destroyPermanentDeductible,
};

export default incomeController;
