import React from 'react';
import './Product.css'

const Product = (props) => {
    const { handleAddToCart } = props;
    const { category, name, img, seller, price, ratings } = props.product

    console.log(props);

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h4>{name}</h4>
                <h4>Price: ${price}</h4>
                <p>Manufecture: {seller}</p>
                <p>Ratings: {ratings} Star</p>
            </div>
            <button onClick={props.handleAddToCart} className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;