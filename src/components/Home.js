import React,{useState} from 'react';
import  {Link} from 'react-router-dom';
import './Home.css'

function Home() {
    const[currentUser,setCurrentUser] = useState(window.localStorage.getItem("user"));
    const handleLogout = async (e) =>{
        window.localStorage.removeItem("user");
        setCurrentUser();
      }
    return (<>
        {currentUser ? (
            <div className='test__logoutScreen'>
                <div className='test__logoutContainer'>
            <button className="test__Button" onClick={handleLogout}>Log out</button>
            </div>
            </div>
            ) : (<div className='test__container'>
                <div className='test__inner_container'>
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
        </>
    )
}

export default Home
