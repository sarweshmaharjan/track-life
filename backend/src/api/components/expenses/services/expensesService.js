import Expenses from "../models/expensesModel";
import HTTP from "../../../const/httpStatus";

const all = async () =>
  Expenses.find({ deleted_at: false }).sort({ created_at: 1 });

const findByID = async (expensesID) =>
  Expenses.find({_id:expensesID, deleted_at: false}).sort({ created_at: 1 });

const create = async (data) => {
  try {
    data.created_at = Date.now();
    await new Expenses(data).save();
  } catch (error) {
    throw HTTP.NOT_IMPLEMENTED;
  }
};

const edit = async (expensesID, data) => {
  try {
    data.updated_at = Date.now();
    await Expenses.findByIdAndUpdate(
      expensesID,
      {
        $set: data,
      },
      { new: true }
    );
  } catch (error) {
    throw HTTP.NOT_MODIFIED;
  }
};

const remove = async (expensesID) => {
  try {
     await Expenses.findByIdAndUpdate(
      expensesID,
      {
        $set:{
            deleted_at: true
        },
      },
      { new: true }
    );
  } catch (error) {
    throw HTTP.NOT_MODIFIED;
  }
};
const expensesService = {
  all,
  findByID,
  create,
  edit,
  remove,
};

export default expensesService;
