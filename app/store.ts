import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import prodcutReducer from "../features/Product/productSlice";
import cartReducer from "../features/Cart/cartSlice";
import { createWrapper } from "next-redux-wrapper";

const store = configureStore({
  reducer: {
    product: prodcutReducer,
    cart: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper(() => store, { debug: true });
