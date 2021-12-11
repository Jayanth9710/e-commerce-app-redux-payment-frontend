import axios from 'axios';
import React from 'react';
import {useState,useEffect} from 'react';
import env from "../settings";
import {useParams,useNavigate} from 'react-router-dom';


function UserAddress() {

const {id} = useParams()

let navigate = useNavigate();
const [address,setAddress] = useState([]);

const user = window.localStorage.getItem("user")


const handleAddress = async (user) => {
    try {
        
    const AddressData = await axios.get(`${env.api}/address/${user}`,)
    console.log("--------")
    console.log(user)
    setAddress([AddressData])
    } catch (error) {
        console.log(error)
    }
    
}


useEffect(()=>{
    handleAddress(user)
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[])
    return (
        <>
        {address.map((e)=>(
            <div key={e.data._id}>
           <div>
                    <p>{e.data.shippingAddress}</p>
                    {console.log(e.data._id)}
                    
                </div>
        </div>
        ))}
        </>
    )
}

export default UserAddress
