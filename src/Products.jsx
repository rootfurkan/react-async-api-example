import React from 'react'

function Products({product}) {
    const {id,title, desc, price, link,image} = product;
  return (
    <div className='product'>
            <img src={image}/>
            <h4>{title}</h4>
            <h5>{desc}</h5>
            <h3>{price} TL</h3>
            <a href={link}>Ürüne Git</a>
    </div>
  )
}

export default Products