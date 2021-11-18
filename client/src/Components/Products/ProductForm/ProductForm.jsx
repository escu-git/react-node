import React,{useState} from 'react'

const ProductForm = () => {
    const[producto, setProducto]=useState({});

    const handleChange = (event)=>{
        setProducto({
            ...producto,
            [event.target.name]: event.target.value,
          });
    }

    const postProduct = (event)=>{
        event.preventDefault();
        fetch('http://localhost:3001/api/productos/guardar',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(producto)
        }).then(res=>console.log(res))
    }
    return (
        <section className='productFormSection'>
            <form id='productForm' onSubmit={postProduct}>
                <h3>CREAR NUEVO PRODUCTO!</h3>
                <div>
                    <label htmlFor='title'>Product title</label>
                    <input type="text" name='title' id='formTitle' onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='price'>Product price</label>
                    <input type="number" name='price' id='formPrice' onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor='thumbnail'>Product thumbnail</label>
                    <input type="text" name='thumbnail' id='formThumbnail' onChange={handleChange}/>
                </div>
                <button type='submit' id='submitBtn'>ENVIAR </button>
            </form>
    </section>
    )
}

export default ProductForm
