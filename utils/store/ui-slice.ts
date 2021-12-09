import { createSlice } from '@reduxjs/toolkit';
import { initialuiState } from '../types';
import reducer from './cart-slice';

const initialState: initialuiState = {
  spinnigSpinner: false,
  showLoginModal:false
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showSpinner(state) {
      state.spinnigSpinner = true;
    },
    hideSpinner(state) {
      state.spinnigSpinner = false;
    },

    showLoginModal(state){
      state.showLoginModal=true
    }
    ,
    hideLoginModal(state){
      state.showLoginModal=false
    }
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
