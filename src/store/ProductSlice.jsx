import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = {
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
}

const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload
        },

        setStatus(state, action) {
            state.status = action.payload
        }
    }
})

export const { setProducts, setStatus } = ProductSlice.actions;

export default ProductSlice.reducer;

// API request
export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const res = await fetch("https://fakestoreapi.com/products?limit=5");
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDLE));
        }
        catch (err) {
            console.log(err);
            dispatch(setStatus('error'))
        }
    }
}