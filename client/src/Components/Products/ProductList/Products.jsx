import React from 'react'

const Products = ({products}) => {
       
    return (
        <div id='tableContainer'>
        {products !== null?
            <table>
        <thead  className="tableHeader">
            <tr>
                <th scope="col">Prod. ID</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Picture</th>
            </tr>
        </thead>
        <tbody className='tableBody' id='tableBody'>
            {products?.map((prod)=>{return(
                <tr key={prod.id}>
                    <th scope='row' className='id'>{prod.id}</th>
                    <td className='title'>{prod.title}</td>
                    <td className='price'>{prod.price}</td>
                    <td className='price' ><img src={prod.thumbnail} alt={prod.title}/></td>
                </tr>
            )})}

        </tbody>
        </table>
        :
        <section className='notFoundSection'>
            <h2>No se hayaron productos</h2>
            <span>😭</span>
        </section>

        }
       
    </div>
    )
}

export default Products
