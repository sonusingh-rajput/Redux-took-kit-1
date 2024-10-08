import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetProduct } from '../store/action/ProductAction';

const Products = () => {
    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.productReducer);
    console.log(products)
    useEffect(()=>{
      dispatch(asyncGetProduct()) 
    },[])
  return (
    <div className="p-5">
      <h1 className="text-center text-2xl bg-red-100 rounded-md mb-3 p-2">
        Products list
      </h1>
      <ul className="text-center border-2 border-cyan-600 rounded-md bg-slate-200 flex flex-col gap-2 p-5">
        <li>Hello</li>
      </ul>
    </div>
  )
}

export default Products