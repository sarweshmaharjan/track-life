import mongoose from "mongoose";
import response from "../../../helpers/response";
import expensesService from "../services/expensesService";
import HTTP from "../../../const/httpStatus";
import _ from "../../../helpers/helper";

const index = async (req, res) => {
  try {
    const result = await expensesService.all();
    if (_.isEmpty(result)) {
      return response.success(res, result, HTTP.NO_CONTENT);
    }
    response.success(res, result, HTTP.OK);
  } catch (error) {
    response.failure(res, HTTP.BAD_REQUEST);
  }
};
const show = async (req, res) => {
  try {
    const expensesID = req.params.expenseId;
    if (!mongoose.Types.ObjectId.isValid(expensesID)) {
      throw new Error("Not a valid ID");
    }
    const result = await expensesService.findByID(expensesID);
    response.success(res, result, HTTP.OK);
  } catch (error) {
    response.failure(res, HTTP.BAD_REQUEST,error);
  }
};
const store = async (req, res) => {
  try {
    await expensesService.create(
      _.pick(req.body, [
        "_userId",
        "_categoryId",
        "_ruleId",
        "name",
        "spent",
        "reimbursable",
        "total_spent",
        "metadata",
      ])
    );
    response.success(res, "Expenses was created", HTTP.CREATED);
  } catch (error) {
    response.failure(res, HTTP.NOT_IMPLEMENTED);
  }
};
const update = async (req, res) => {
  const expensesID = req.params.expenseId;
  if (!mongoose.Types.ObjectId.isValid(expensesID)) {
    throw new Error("Not a valid ID");
  }
  try {
   await  expensesService.edit(
      expensesID,
      _.pick(req.body, [
        "_userId",
        "_categoryId",
        "_ruleId",
        "name",
        "spent",
        "reimbursable",
        "total_spent",
        "metadata",
      ])
    );
    response.success(res, "Expenses was update", HTTP.RESET_CONTENT);
  } catch (error) {
    response.failure(res, HTTP.NOT_IMPLEMENTED);
  }
};
const destroy = async (req, res) => {
  const expensesID = req.params.expenseId;
  if (!mongoose.Types.ObjectId.isValid(expensesID)) {
    throw new Error("Not a valid ID");
  }
  try {
    await expensesService.remove(expensesID);
    response.success(res, "Expenses was deleted", HTTP.RESET_CONTENT);
  } catch (error) {
    response.failure(res, HTTP.NOT_IMPLEMENTED);
  }
};

const expensesController = {
  index,
  show,
  store,
  update,
  destroy,
};

export default expensesController;
