import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import env from "../settings";
import './Login.css'

function Login() {

    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let logindata = await axios.post(`${env.api}/login`, { email, password })
            window.localStorage.setItem("app_token",logindata.data.token);
            window.localStorage.setItem("user",logindata.data.message)
            navigate("/api/products")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <main className='form-signin text-center'>
            <form onSubmit={handleSubmit} >
        <div className='login_container'>
            <h2 className='login_heading'>LOG IN</h2>
            <div className='form-floating'>
            <input id='floatingInput' className='form-control mb-2' type={email} onChange={e=>setEmail(e.target.value)} placeholder="name@example.com" ></input>
            <label for="floatingInput">Email address</label>
            </div>
            <div className='form-floating'>
            <input id='floatingPassword' className='form-control mb-2' type={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" ></input>
            <label for="floatingPassword">Password</label>
            </div>
            <input className="w-100 btn btn-lg btn-warning mb-2" type="submit" value="Sign in" />
            <p className='forgot-password'>Don't have an account <span className='register'onClick={()=>{navigate('/register')}}>Create one</span></p>
                <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </div>
        </form>
        </main>
    )
}

export default Login
