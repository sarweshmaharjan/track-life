const index = async (req, res) => {
    res.send("home index");
  };
  const getUnderBudget = async (req, res) => {
    res.send("home getUnderBudget");
  };
  const getOverBudget = async (req, res) => {
    res.send("home getOverBudget");
  };
 
  
  const homeController = {
    index,
    getUnderBudget,
    getOverBudget,
  };
  
  export default homeController;
  