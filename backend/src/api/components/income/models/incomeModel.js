import mongoose from "mongoose";

const Income = mongoose.model(
  "Income",
  new mongoose.Schema({
    _userId: {
      type: Object,
    },
    _categoryId: {
      type: Object,
    },
    _permanentDeductibleId: {
      type: Object,
    },
    name: {
      type: String,
    },
    amount: {
      type: Number,
    },
    payment_at: {
      type: Date,
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

export default Income;
