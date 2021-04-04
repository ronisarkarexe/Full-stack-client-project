import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import CheckOut from './components/CheckOut/CheckOut';
import { createContext, useState } from 'react';
import AddProduct from './components/AddProduct/AddProduct';
import Orders from './components/Orders/Orders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext()


function App() {


  const [loggedInUser, setLoggedInUser] = useState({})


  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/addProduct">
          <AddProduct></AddProduct>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/orders">
          <Orders></Orders>
        </PrivateRoute>
        <PrivateRoute path="/checkout/:pd">
          <CheckOut></CheckOut>
        </PrivateRoute>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
        <h1 className="text-center mt-5">404- Not Found</h1>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
