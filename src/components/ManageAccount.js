import React,{useState} from 'react';
import  {Link} from 'react-router-dom';
import './Home.css'

function ManageAccount() {

    const[currentUser,setCurrentUser] = useState(window.localStorage.getItem("user"));
    const handleLogout = async (e) =>{
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("role");
        window.localStorage.removeItem("app_token");
        setCurrentUser();
      }
    return (
        <div className='homePage__right'>
        {currentUser ? (
            <div className='test__logoutScreen'>
                <div className='test__logoutContainer'>
            <button className="test__Button" onClick={handleLogout}>Log out</button>
            </div>
            </div>
            ) : (<div className='test__container'>
                <div className='test__inner_container'>
                    <h2 className='test__heading'>
                        Welcome to Squish &#38; Mush 
                    </h2>
                    <div>
            <Link to="/login" className="test__Button">
                    Login
            </Link>
            </div>
            <div>
            <Link to="/register" className="test__Button">
                    SignUp
            </Link>
            </div>
            </div>
        </div>)  }
        </div>
    )
}

export default ManageAccount
