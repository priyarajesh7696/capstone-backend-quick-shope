import mongoose from "./index.js";
const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, "Name is required"],
    },
    image: {
      type: String,
      required: [true, "image is required"],
    },
    code: {
      type: String,
      required: [true, "code is required"],
    },
    price: {
      type: String,
      required: [true, "price is required"],
    },
    count: {
      type: String,
    },
    brand: {
      type: String,
    },
    category: {
      type: String,
    },
   
    description: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    last_update: {
      type: Date,
      
    },
  },
  {
    collection: "product",
    versionKey: false,
  }
);

const ProductModel = mongoose.model("product", productSchema);
export default ProductModel;
