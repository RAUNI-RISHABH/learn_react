import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {

    // state here is the initialState
    // action is the object which is dispatched
    // action.payload is the data which is sent along with the action
    // e.g., dispatch(addItem(item)) -> action.payload = item
    // addItem , removeItem , clearCart are action creators we need to export them
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearCart: (state) => {
      state.items = [];
    }
}
}); 

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;