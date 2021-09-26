import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Dancer from '../Dancer/Dancer';
import './shop.css';

const Shop = () => {

    const [dancers,setDancers]= useState([]);

    const [cart, setCart] = useState([]);

    const handleAddDancer = (dancer) =>{
        const newCart = [...cart , dancer]
        setCart(newCart)
        
    }

    useEffect(()=>{
        fetch('/dancer.JSON')
        .then(res => res.json())
        .then(data => setDancers(data))
    },[])

    return (
        <div className='shop-container mb-3'>
            <div className="row row-cols-1 row-cols-md-3 g-4 card-design pb-3">
                {
                    
                    dancers.map(dancer=> <Dancer dancer={dancer} handleDancer={handleAddDancer}/>)
                }
            </div>
            <div>
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;