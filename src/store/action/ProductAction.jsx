import axios from "axios";
import { getProducts } from "../reducers/productReducer";


export const asyncGetProduct = () => async(dispatch , getState)=> {
    console.log(getState())
    try{
        const res = await axios.get("https://fakestoreapi.com/products");
        // We have data of the product is sync data
        console.log(res.data)
        dispatch(getProducts(res.data));
    }catch(error){
        console.log(error)
    }
}