import React from 'react';
// import Dancer from '../Dancer/Dancer';
import './cart.css'

const Cart = (props) => {
    const {cart} = props || {};

    const totalReducer=(prevValue,currentValue)=>prevValue+currentValue.price

   const total=cart.reduce(  totalReducer   ,  0)

    return (
        <div className='cart'>
            <h3>Dancers Cart Details</h3>
            <h5><i className="fas fa-user"></i> Dancers Added: {cart.length}</h5>
            <ul>
               {
                    cart.map(dancer => <p>{dancer.name}: {dancer.price}</p>)
               }
            </ul>
            <h5>Total Price: {total}</h5>
            <button className='btn btn-primary'>Buy Now</button>
        </div>
    );
};

export default Cart;