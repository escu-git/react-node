import React, {useState, useEffect} from 'react'
import { useLogin } from '../../Contexts/LoginContext';
import ProductForm from './ProductForm/ProductForm'
import Products from './ProductList/Products'

const ProductsContainer = () => {
    const[products, setProducts]=useState(null);
    const login = useLogin();
    useEffect(()=>{
       fetch('/api/home')
       .then(res=>res.json())
       .then(res=>setProducts(res.data))
    }, []);

    return (
        <div>
            <ProductForm/>
            <Products products={products}/>
        </div>
    )
}

export default ProductsContainer
