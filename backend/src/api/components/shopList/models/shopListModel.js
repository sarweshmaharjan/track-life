import mongoose from "mongoose";

const ShopList = mongoose.model(
  "ShopList",
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
    required_amount: {
      type: Number,
    },
    save_amount: {
      type: Number,
    },
    priority: {
      type: String,
    },
    isPurchased: {
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

export default ShopList;
