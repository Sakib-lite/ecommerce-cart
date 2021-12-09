import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialStatePropertySlice, item } from '../types';

const initialState: initialStatePropertySlice = {
  items: [],
  totalQuantity: 0,
  allProductPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    replaceCart(state, action: PayloadAction<initialStatePropertySlice>) {
      state.items = action.payload.items;
      (state.totalQuantity = action.payload.totalQuantity),
        (state.allProductPrice = action.payload.allProductPrice);
    },

    addItemToCart(state, action: PayloadAction<item>) {
      const newItem = action.payload;
    
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          description: newItem.description,
          image: newItem.image,
          slug: newItem.slug,
          category: newItem.category,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
        console.log(newItem)
        state.allProductPrice =state.allProductPrice + newItem.price;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        state.allProductPrice = state.allProductPrice + existingItem.price;
      }
    },

    removeItemfromCart(state, action: PayloadAction<number>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      state.totalQuantity--;

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
          state.allProductPrice =
          state.allProductPrice - existingItem.totalPrice;
        } else {
          existingItem.quantity--;
          existingItem.totalPrice =
            existingItem.totalPrice - existingItem.price;
          state.allProductPrice =
            state.allProductPrice - existingItem.price;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
