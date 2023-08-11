import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import productReducer from "./features/product/productSlice";


 const store = configureStore({
   reducer: {
      product: productReducer,
   }
 });

setupListeners(store.dispatch);
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch