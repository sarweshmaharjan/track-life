import mongoose from "mongoose";

const PermanentDeductible = mongoose.model(
  "PermanentDeductible",
  new mongoose.Schema({
    name: {
      type: String,
    },
    amount: {
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

export default PermanentDeductible;
