import React, {useState, useEffect} from 'react'
import { useLogin } from '../../Contexts/LoginContext';
import ProductForm from './ProductForm/ProductForm'
import Products from './ProductList/Products'

const ProductsContainer = () => {
    const[productAdded, setProductAdded]=useState(false);
    const[products, setProducts]=useState(null);

    useEffect(()=>{
       fetch('/api/home')
       .then(res=>res.json())
       .then(res=>setProducts(res.data))
       setProductAdded(false);
    },[productAdded]);

    return (
        <div>
            <ProductForm productAdded = {setProductAdded}/>
            <Products products={products}/>
        </div>
    )
}

export default ProductsContainer
