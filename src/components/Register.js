import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
// import './Register.css';
import env from "../settings";

function Register() {
    const [username, setusername] = useState([]);
    const[name,setName] = useState([]);
    const [password, setpassword] = useState([]);
    const [confirmpassword, setconfirmpassword] = useState([]);
    const [email,setEmail] = useState([]);
    const [crrAdd,setCrrAdd] = useState([]);
  const [shipAdd,setShipAdd] = useState([]);
    
    let navigate = useNavigate();

    let handleSubmit = async (e) => {
        e.preventDefault()
        console.log({ name,username, password, confirmpassword,email,crrAdd,shipAdd })
        try {
            await axios.post(`${env.api}/register`, { name,username, password,email,crrAdd,shipAdd });
            
            navigate('/login')
        } catch (error) {
            if (error.message === "Request failed with status code 403") {
                window.alert("That Email has been already registered.Please continue with different email.")
                console.log(error)
            }
            
            console.log(error)
        }
    }
    return (
        <main className="form-signin text-center">
            <form onSubmit={(e) => {
                handleSubmit(e)
            }}>
                {/* <img className="mb-4" src="" alt="" width="72" height="57" /> */}
                <h1 className="h3 mb-3 fw-normal">Please Register</h1>

                <div className="form-floating">
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control mb-1" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control mb-1" id="floatingInput" placeholder="Jake peralta" />
                    <label for="floatingInput">Name</label>
                </div>
                <div className="form-floating">
                    <input type="text" value={username} onChange={e => setusername(e.target.value)} className="form-control mb-1" id="floatingInput" placeholder="call_me_jake" />
                    <label for="floatingInput">User Name</label>
                </div>
                <div className="form-floating">
                    <input type="password" value={password} onChange={e => setpassword(e.target.value)} className="form-control mb-1" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
                <div className="form-floating">
                    <input type="password" value={confirmpassword} onChange={e => setconfirmpassword(e.target.value)} className="form-control mb-1" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Confirm Password</label>
                </div>

                
                <div class="form-group">
    <label for="exampleFormControlTextarea1">Add your Current address</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e=>setCrrAdd(e.target.value)}></textarea>
  </div>
  
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Add your Shipping address</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e=>setShipAdd(e.target.value)}></textarea>
  </div>
  <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <input className="w-100 btn btn-lg btn-warning" type="submit" value="Sign up" />
                <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
            </form>
        </main>
    )
}

export default Register
