import React,{useState} from 'react';
import * as Yup from 'yup';
import {Formik,Form} from 'formik';
import axios from 'axios';
import env from '../../settings';
import Textfield from '../Textfield';
import './Register.css'
import { Navigate, useNavigate } from 'react-router-dom';


function Register() {

    const validate = Yup.object({
        name : Yup.string()
        .max(15,"Must be within 15 characters")
        .required("Required"),
        username : Yup.string()
        .min(5,"Username must be atleast 5 Characters")
        .required("Required"),
        email : Yup.string().email("Email is Invalid").required("Email is required"),
        password : Yup.string()
        .min(6,"Password must be atleast 6 characters")
        .required("Password is required."),
        confirmPassword : Yup.string()
        .oneOf([Yup.ref("password"),null],"Password must Match")
        .required("Confirm password is a required field"),
        currentAddress : Yup.string()
        .min(30,"Address must be atleast 30 characters"),
        shippingAddress : Yup.string()
        .min(30,"Address must be atleast 30 characters")
        .required("Shipping Address is a reqired field!"),
    });

    const [loading,setLoading] = useState(false);
    const [success,setSuccess] = useState(false);
    const [failure,setFailure] = useState(false);

    const navigate = useNavigate();

    const postData = async (data) => {
        setLoading(true)
        try {
            let Data = await axios.post(`${env.api}/register`,data);
            window.alert("User Registered Successfully");
            setLoading(false);
            setFailure(false);
            setSuccess(true);
            navigate('/login')
        } catch (error) {
            setLoading(false)
            setFailure(true)
            if(error.message === "Request failed with status code 400") {
                window.alert("E-mail is already registered.Please use different email ID!");
                console.log(error)
            } else {
                window.alert("Check your Network");
                console.log(error)
            }
            
        }
    }
    return (
        <>
        {loading ? <h2>Loading......</h2> : 
        <div className='signup__page'>
            <div className='signup__container'>
                <Formik initialValues={{
                    name:"",
                    username:"",
                    email:"",
                    password:"",
                    confirmPassword:"",
                    currentAddress:"",
                    shippingAddress:"",
                }}
                validationSchema={validate}
                onSubmit={async (values) => {
                    let data ={
                        name:values.name,
                        email:values.email,
                        username:values.username,
                        password:values.password,
                        currentAddress:values.currentAddress,
                        shippingAddress:values.shippingAddress,
                    };
                    postData(data);
                    setLoading(true);
                }}>
                    {
                        (formik)=> (
                            <div className='signup__title'>
                                <div className='signup__inner'>
                                    <Form>
                                        <div className='left'>
                                        <Textfield
                                        label="Name"
                                        name="name"
                                        type="text"
                                        placeholder="Enter your Name"/>
                                        <Textfield 
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter your e-mail ID"/>
                                        <Textfield 
                                        label="Username"
                                        name="username"
                                        type="text"
                                        placeholder="Enter your Username"/>
                                        <Textfield 
                                        label="Password"
                                        name="password"
                                        type="password"
                                        placeholder="Enter your Password"/>
                                        <Textfield 
                                        label="Confirm Password"
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Confirm your Password"/>
                                        </div>
                                        <div className='right'>
                                        <Textfield 
                                        label="Current Address"
                                        name="currentAddress"
                                        type="text"
                                        placeholder="Enter your Current Address"/>
                                        <Textfield 
                                        label="Shipping Address"
                                        name="shippingAddress"
                                        type="text"
                                        placeholder="Enter your Shipping Address"/>
                                    </div>
                                    <button className='signup__buttons' type='submit'>Register</button>
                                    </Form>
                                    {success && (
                                        <span className='success'>Successfull. You can log in now!</span>
                                    )}
                                    {failure && (
                                        <span className='failure'>Something went wrong try again!</span>
                                    )}
                                </div>
                            </div>
                        )
                    }

                </Formik>
            </div>
        </div>
        }
        </>
    )
}

export default Register
