import mongoose from "mongoose";

const Category = mongoose.model(
  "Category",
  new mongoose.Schema({
    name: {
      type: String,
    },
    isDefault: {
      type: Boolean,
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

export default Category;
