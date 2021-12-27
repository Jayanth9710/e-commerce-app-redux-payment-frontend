import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {useState} from 'react'; 
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import AddProduct from './components/AddProduct';
import About from './components/About';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
import CartPage from './components/CartPage';
import UserAddress from './components/UserAddress';
import EditUserDetails from './components/EditUserDetails';
import UserLogin from './components/userLogin';
import UserRegister from './components/userRegister';
import ManageAccount from './components/ManageAccount';


function App() {
  const[sideToggle,setSideToggle] = useState(false)
  return (
   <>
   
     <BrowserRouter>
     <Header click={()=> setSideToggle(true)} />
     <SideDrawer show={sideToggle} click={()=>setSideToggle(false)}/>
     <Backdrop show={sideToggle} click={()=>setSideToggle(false)} />
    <Routes>
      <Route path="/" element={<ManageAccount/>}/>
      <Route path="/register" element={<UserRegister />}/>
      <Route path="/login" element={<UserLogin />}/>
      <Route path="/about" element={<About/>}/>
      {/* <Route path="/edit" element={<EditUserDetails/>}/> */}
      <Route path="/home" element={<Home/>}/>
      <Route path="/address/:user" element={<UserAddress/>}/>
      <Route path="/api/products" element={<ProductListing />}/>
      <Route path="/api/addproduct" element={<AddProduct />}/>
      <Route path="/api/product/:id" element={<ProductDetails />}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route>404 Not Found</Route>
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
