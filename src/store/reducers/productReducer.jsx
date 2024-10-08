import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    product : [],
}

export const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        getProducts: (state , action) =>{
            // console.log(action)
           state.product = action.payload
        }
    }
})

export default productSlice.reducer;

export const { getProducts} = productSlice.actions;