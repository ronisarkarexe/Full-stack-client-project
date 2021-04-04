import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import HomeCartDetals from '../HomeCartDetals/HomeCartDetals';
import './Home.css'


const Home = () => {

   const [products, setProducts] = useState([])

   useEffect(() => {
      fetch('http://localhost:5055/productItems')
      .then(res => res.json())
      .then(data => setProducts(data))
   }, [])

   return (
      <div className="container">
         <div className="row">
            {
               products.length === 0 && <Spinner className="spinner-empty" animation="border" variant="danger" />
            }
            {
               products.map(product => <HomeCartDetals product={product}></HomeCartDetals>)
            }
         </div>
      </div>
   );
};

export default Home;