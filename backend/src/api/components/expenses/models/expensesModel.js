import mongoose from "mongoose";

const Expenses = mongoose.model(
  "Expenses",
  new mongoose.Schema({
    _userId: {
      type: Object,
    },
    _categoryId: {
      type: Object,
    },
    _ruleId: {
      type: Object,
    },
    name: {
      type: String,
    },
    spent: {
      type: Number,
    },
    reimbursable: {
      type: Number,
    },
    total_spent: {
      type: Number,
    },
    created_at: {
      type: Date,
    },
    updated_at: {
      type: Date,
    },
    deleted_at: {
      type: Boolean,
    },
    metadata: {
      type: Object,
    },
  })
);

export default Expenses;
