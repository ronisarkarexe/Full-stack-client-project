import React, {useContext } from 'react';
import { UserContext } from '../../App';
import './Orders.css'

const Orders = () => {
   const [loggedInUser, setLoggedInUser] = useContext(UserContext)
   return (
      <div className="container orders-buyer">
         <h1>Congratulations Sir</h1>
         <h6>{loggedInUser.name}</h6>
         <h5>Your Orders has been booked</h5>
      </div>
   );
};

export default Orders;