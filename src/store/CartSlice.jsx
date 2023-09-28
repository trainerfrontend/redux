const { createSlice } = require('@reduxjs/toolkit');

const initialState = [];

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload)
        }
    }
})

export const { add } = CartSlice.actions

export default CartSlice.reducer;

