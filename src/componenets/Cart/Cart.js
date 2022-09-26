import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h3>Order Summary</h3>
            <div>
                <h4>Selected Items: {cart.length}</h4>
            </div>
        </div>
    );
};

export default Cart;