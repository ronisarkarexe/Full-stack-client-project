import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './HomeCartDetals.css'

const HomeCartDetals = (props) => {
   const {_id,id,name, image, price} = props.product;

   const history = useHistory()

   const handelProduct = (pdID) => {
      const url = `/checkout/${pdID}`;
      history.push(url)
  }

   return (
      <div className="col-md-4">
         <div className="home-card">
            <div>
               <img className="image-card" src={image}/>
               <h5>{name}</h5>
            </div>
            <div className="product-price">
               <h4>${price}</h4>
               <Button onClick={() => handelProduct(_id)}>Buy Now</Button>
            </div>
         </div>
      </div>
   );
};

export default HomeCartDetals;