import { configureStore } from "@reduxjs/toolkit";
import changeCategoryReducer from "./changeCategoryReducer";
import CategoryListReducer from "./categoryListReducer";

export const store = configureStore({
  reducer: {
    changeCategoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        CategoryListReducer,
      },
    }),
});
