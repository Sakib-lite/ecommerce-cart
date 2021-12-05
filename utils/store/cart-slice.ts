import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  initialStatePropertySlice,
  item,
  itemsProperty,
  payloadItems,
} from '../types';

const initialState: initialStatePropertySlice = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    replaceCart(state, action: PayloadAction<initialStatePropertySlice>) {
      state.items = action.payload.items;
      state.totalQuantity=action.payload.totalQuantity
    },

    addItemToCart(state, action: PayloadAction<item>) {
      const newItem = action.payload;
      const existingItem =state.items.find((item) => item.id === newItem.id)
        
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
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }


    },

    removeItemfromCart(state, action:PayloadAction<number>) {
      const id = action.payload;
      const existingItem =state.items.find((item) => item.id === id)
      
      state.totalQuantity--;
    
if(existingItem) {
   if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      }else{
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
