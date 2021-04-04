import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


import './CheckOut.css'

const CheckOut = () => {

   
   const {pd} = useParams()
   
   const [checks, setChecks] = useState({})

   useEffect(() => {
      fetch(`http://localhost:5055/cart/${pd}`)
      .then(res => res.json())
      .then(data => setChecks(data))
   },[pd])

   return (
      <div className="container">
         <h4>CheckOut</h4>
         <div className="check-out">
            <div>
               <table className="table">
                  <thead>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                  </thead>
                  <tbody>
                     <tr>
                        <td>{checks.name}</td>
                        <td>1</td>
                        <td>${checks.price}</td>
                     </tr>
                     <tr>
                        <td colSpan="2">Total</td>
                        <td>${checks.price}</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         <Button as={Link} to="/orders" variant="info">CheckOut</Button>
      </div>
   );
};

export default CheckOut;