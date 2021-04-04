import React, { useContext,} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../Login/firebase.confige'
import {UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import icon from "../../icons/Group 573.png"
import './Login.css'

const Login = () => {

   const [loggedInUser, setLoggedInUser] = useContext(UserContext);

   const history = useHistory()
   const location = useLocation()

   const { from } = location.state || { from: { pathname: "/" } };

   if(firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
   }

   const handelGoogleSignIn = () => {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
         const { displayName, email} = result.user;
         const signInUser = {
            name: displayName, 
            email: email,
         }
         setLoggedInUser(signInUser);
         history.replace(from);
      }).catch((error) => {
         var errorCode = error.code;
         var errorMessage = error.message;
         var email = error.email;
         var credential = error.credential;
         console.log(errorMessage, errorCode,email, credential)
         
      });
   }


   return (
      <div className="container">
         <button className="button-click" onClick={handelGoogleSignIn}> <img src={icon}/> Connect With Google</button>
      </div>
   );
};

export default Login;