import React from 'react';
import Rating from 'react-rating';
import './dancer.css';


const Dancer = (props) => {
    const {name,age,danceStyle,Division,price,img}=props.dancer || {};
    return (
        <div>
            {/* dancer data display  */}
            <div className="col ">
                    <div className="card h-100 card-element">
                    <img src={img} className="card-img-top img-dancer mx-auto d-block" alt="..."/>
                    <div className="card-body text-ele">
                        <h5 className="card-title">Name: {name}</h5>
                        <p className="card-text"><b>Age:</b> {age}</p>
                        <p className="card-text"><b>Dance Style:</b> {danceStyle}</p>
                        <p className="card-text"><b>Division:</b> {Division}</p>
                        <p className="card-text"><b>Price: </b>Tk {price}</p>
                        <p className="card-text"><b>Rating: </b><Rating className='rating' emptySymbol="fa fa-star-o fa-2x" 
                        fullSymbol="fa fa-star fa-2x"
                        initialRating={3.5}
                        readonly
                        /></p>
                    </div>
                    <div className="card-footer">
                        <button onClick={()=> props.handleDancer(props.dancer)} className='px-5 btn-design'><i className="fas fa-cart-plus me-2"></i>Add to Cart</button>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Dancer;