import { configureStore } from "@reduxjs/toolkit";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";

export const store = configureStore({
  reducer: {
    changeCategoryReducer,
    categoryListReducer,
    productListReducer

  },

});
