import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import del from '../../icons/Group 33150.png';
import axios from 'axios';
import './AddProduct.css';
import manage from '../../icons/grid 1.png';
import add from '../../icons/plus 1.png';
import edit from '../../icons/edit 1.png'

const AddProduct = () => {

   const { register, handleSubmit,} = useForm();

   const [imageURL, setImageURL] = useState(null)

   const [product, setProduct] = useState(true)

   const [deletePd, setDeletePd] = useState([])

   useEffect(() => {
      fetch('http://localhost:5055/productItems')
      .then(res => res.json())
      .then(data => setDeletePd(data))
   }, [])
   

   const onSubmit = data => {
      const eventData = {
         name: data.name,
         price: data.price,
         id: data.id,
         image: imageURL
      };
      const url = `http://localhost:5055/addProducts`;

      fetch(url, {
         method: 'POST',
         headers: {'content-type': 'application/json'},
         body: JSON.stringify(eventData)
      })
      .then(res => console.log('server side response', res));
   };

   const handelImageUploaded = event => {
      const imageData = new FormData();
      imageData.set('key', 'd78ff46c0782749a364056d1e65cc5a6');
      imageData.append('image', event.target.files[0]);
      
      

      axios.post('https://api.imgbb.com/1/upload',imageData)
       .then(function (response) {
          console.log('response', response);
         setImageURL(response.data.data.display_url);
       })
       .catch(function (error) {
         console.log(error);
       });
   }

   const deleteProduct = (id) => {
      console.log(id);
      fetch(`http://localhost:5055/delete/${id}`, {
         method: 'DELETE',
      })
      .then(res => res.json())
      .then(result => {
      })
   }

   return (
      <div className="container">
         <div className="row">
            <div className="col-md-3 addProductButton">
               <button onClick={() => setProduct(false)}> <img src={manage}/>  Manage Product</button><br/>
               <button onClick={() => setProduct(true)}> <img src={add}/>Add Product</button> <br/>
               <button> <img src={edit}/> Edit Product</button>
            </div>
            <div className="col-md-9 back-color">
               {
                  product? 
                  <div className="input-from">
                     <form onSubmit={handleSubmit(onSubmit)}>
                     <input name="name" defaultValue="" placeholder="Enter Name" ref={register} /><br/>

                     <input name="price" defaultValue="" placeholder="Enter Price" ref={register} /><br/>

                     <input name="id" defaultValue=""  placeholder="Enter id" ref={register} /> <br/>
                     
                     <input name="example" type="file" onChange={handelImageUploaded} /><br/>

                     <input type="submit" />
                     </form>
                  </div> :

                  <div>
                     <div className="manage-product">
                        <div className="check-out">
                           <table className="table">
                              <thead>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                              </thead>
                              <tbody>
                                 {
                                    deletePd.map(pd => <tr>
                                       <td>{pd.name}</td>
                                       <td>${pd.price}</td>
                                       <td>1</td>
                                       <td><a onClick={() => deleteProduct(pd._id)}> <img src={del}/> </a></td>
                                    </tr> )
                                 }
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               }
            </div>
         </div>
      </div>
   );
};

export default AddProduct;