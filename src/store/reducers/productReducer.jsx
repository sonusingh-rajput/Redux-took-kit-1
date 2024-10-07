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
            console.log(action)
            axios.get("https://fakestoreapi.com/products")
            .then((res)=>{
                console.log(res)
                state.product = res.data
            }).catch((err) => {
                console.log(err)
            })
        }
    }
})

export default productSlice.reducer;

export const { getProducts} = productSlice.actions;