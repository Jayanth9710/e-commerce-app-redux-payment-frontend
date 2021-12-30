import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import './Header.css';
import {Link} from 'react-router-dom';
import { Tooltip } from '@mui/material';


function Header({click}) {
    let navigate = useNavigate();
  const role =  window.localStorage.getItem("role")
    const cart = useSelector(state => state.cart );
    const {cartItems} = cart;

    const getCartCount = () => {
      return cartItems.reduce((qty,item) => qty + Number(item.qty), 0)
    }
 
    return (
        <nav className='header'>
          <div className='header__logo'>
            <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}>
            Squish &#38; Mush
            </Link>
          </div>

          <ul className='header__links'>
      <li>
        <Link to='/cart' className='cart__link'>
          <i className='fas fa-shopping-cart'></i>
          <span>
          Cart 
          <span className='cartlogo__badge'>{getCartCount()}</span>
          </span>
         
        </Link>
      </li>
      <li>
        <Link to='/api/products'>
          Shop
        </Link>
      </li>
      <li>
        <Link to='/account' className='account'>
          <Tooltip title='Manage Account'>
          <div>
          <PermIdentityIcon />
          </div>
          </Tooltip>
          
        
        </Link>
      </li>
          </ul>
          <div className='hamburger__menu' onClick={click}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {role === "admin" ? (<Link className='admin-btn' to='/api/addproduct'>Admin</Link>) : ("")}
        </nav>
    )
}

export default Header
