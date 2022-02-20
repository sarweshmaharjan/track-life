import mongoose from "mongoose";

const Rules = mongoose.model(
  "Rules",
  new mongoose.Schema({
    rule: {
      name: {
        type: String,
      },
      percentage: {
        type: Number,
      },
      total_amount: {
        type: Number,
      },
      Date: {
        type: Date,
      },
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

export default Rules;
