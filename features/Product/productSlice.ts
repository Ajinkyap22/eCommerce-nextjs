import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { HYDRATE } from "next-redux-wrapper";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // set products
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = [...action.payload];
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      // console.log("HYDRATE", action.payload);
      return {
        ...state,
        ...action.payload.product,
      };
    },
  },
});

export const selectProducts = (state: RootState) => state.product.products;

export const { setProducts } = productSlice.actions;

// export const fetchProducts = (): AppThunk => async (dispatch) => {
//   const res = await axios.get("https://api.escuelajs.co/api/v1/products");

//   const data: Product[] = res.data;

//   dispatch(setProducts(data));

//   return data;
// };

// export const fetchProduct =
//   (id: number): AppThunk =>
//   async () => {
//     const product = await axios.get(
//       `https://api.escuelajs.co/api/v1/products/${id}`
//     );

//     return product;
//   };

export default productSlice.reducer;
