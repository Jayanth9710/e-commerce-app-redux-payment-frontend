import React,{ useState} from 'react';
import * as Yup from 'yup';
import {Formik,Form} from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './userRegister.css';
import env from '../settings';
import Textfield from './Textfield'



function UserRegister() {

    const validate  = Yup.object({
        name : Yup.string()
        .max(15,"Must be within 15 characters")
        .required("Required"),
        email : Yup.string().email("Email is invalid").required("Email is required"),
        password : Yup.string()
        .min(6,"Password must be atleast 6 characters")
        .required("Password is required!"),
        confirmPassword : Yup.string()
        .oneOf([Yup.ref("password"),null],"Password must watch")
        .required("Confirm Password is a required field."),
    });

    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const [success,setSuccess] = useState(false)
const [failure,setFailure] = useState(false)

    const postData = async (data) => {
        setLoading(true)
        try {
            let Data = await axios.post(`${env.api}/register`,data);
            window.alert("User registered successfully");
            setLoading(false);
            setFailure(false)
            setSuccess(true)
            navigate('/login')
        } catch (error) {
            setLoading(false)
            setFailure(true);
            if(error.message === "Request failed with status code 400") {
                window.alert("E-mail is already registered.Please use different e-mail ID.");
                console.log(error)
            } else{
                window.alert("Check your connection");
                console.log(error);
            }
        }
    }
    return (
        <>
        {loading ? <h2>Loading....</h2> : 
        <div className='signup__page'>
            <div className='signup__container'>
            <Formik initialValues={{
                name:"",
                email:"",
                password:"",
                confirmPassword:"",
            }}
            validationSchema={validate}
            onSubmit={async (values) => {
                let data = {
                    name: values.name,
                    email: values.email,
                    password: values.password,
                    username: values.username,
                    shippingAddress: values.shippingAddress,
                    currentAddress: values.currentAddress,
                }; 
                postData(data);
                setLoading(true);
            }}>
                { (formik) => (
                    < div className='signup__title'>
                        <div className='signup__inner'>
                        <Form>
                            <Textfield  
                            label="Name"
                            name="name"
                            type="text"
                            placeholder="Enter your Name"
                            />
                            <Textfield  
                            label="Username"
                            name="username"
                            type="text"
                            placeholder="Enter your Username"
                            />
                            <Textfield 
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Enter your e-mail ID"/>
                            <Textfield 
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"/>
                            <Textfield 
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"/>
                            <Textfield  
                            label="Shipping Address"
                            name="shippingAddress"
                            type="text"
                            placeholder="Enter your Shipping Address"
                            />
                            <Textfield  
                            label="Current Address"
                            name="currentAddress"
                            type="text"
                            placeholder="Enter your Current Address"
                            />

                            <button className='signup__buttons' type='submit'>SIGNUP</button>
                        </Form>
                        {success &&(
                    <span className="success">Successful.You can log in now!</span>
                )}
                {failure && (
                <span className="failure">Something went wrong!</span>
                )}
                        </div>
                    </div>
                )}

            </Formik>
            </div>
            </div>
        }
        </>
        
    )
}

export default UserRegister
