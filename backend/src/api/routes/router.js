import auth from "../components/auth/route/authAPI";
import home from "../components/home/route/homeAPI";
import expenses from "../components/expenses/route/expensesAPI";
import income from "../components/income/route/incomeAPI";
import categories from "../components/category/route/categoryAPI";
import rules from "../components/rules/route/rulesAPI";
import shopLists from "../components/shopList/route/shopListAPI";
import reports from "../components/report/route/reportAPI";
import user from "../components/auth/route/userAPI";

/**
 * Every router API present in the project.
 * @function router
 * @param {any} app
 */
const router = (app) => {
  app.use("/api/v1/auth", auth);
  app.use("/api/v1/home", home);
  app.use("/api/v1/expenses", expenses);
  app.use("/api/v1/income", income);
  app.use("/api/v1/categories", categories);
  app.use("/api/v1/rules", rules);
  app.use("/api/v1/shop-lists", shopLists);
  app.use("/api/v1/reports", reports);
  app.use("/api/v1/user", user);
};

export default router;
