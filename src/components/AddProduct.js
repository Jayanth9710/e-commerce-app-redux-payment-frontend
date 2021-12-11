import React,{ useState } from 'react';
import axios from 'axios'
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import env from "../settings";

function AddProduct() {

    const [productName,setProductName] = useState();
    const [description,setDescription] = useState();
    const [countInStock,setCountInStock] = useState(0);
    const [price,setPrice] = useState(0);
    const[pics,setPics] = useState('');
    const [multipleProgress,setmultipleProgress] = useState(0);

    const MultipleFileChange = (e) => {
        setPics(e.target.files);
        setmultipleProgress(0);
    }

    const multipleFileOptions = {
        onUploadProgress:(ProgressEvent) => {
            const {loaded,total} = ProgressEvent;
            const percentage = Math.floor(((loaded/1000)*100) / (total/1000));
            setmultipleProgress(percentage);
        }
    }

    const UploadMultipleFiles = async () => {
        const formData = new FormData();
        formData.append('productName',productName);
        formData.append('description',description);
        formData.append('countInStock',countInStock);
        formData.append('price',price);
        for (let i = 0; i < pics.length; i++) {
            formData.append('files',pics[i])
        }

    const ProductUpload = async (data,options) => {
        try {
            await axios.post(`${env.api}/api/addproduct`,data,options)
        } catch (error) {
            throw(error)
        }
    }
        
        await ProductUpload(formData,multipleFileOptions);
    }

    return (
        <div className="row mt-3 ml-5">
      <div className="col-6">
        <label>Product Name</label>
        <input type="text" onChange={(e)=>setProductName(e.target.value)} className="form-control" />
        <label>countInStock</label>
        <input type="number" onChange={(e)=>setCountInStock(e.target.value)} className="form-control" />
        <label>Price</label>
        <input type="number" onChange={(e)=>setPrice(e.target.value)} className="form-control" />
        <label>Description</label>
        <textarea
          onChange={(e)=>setDescription(e.target.value)}
          placeholder="Something about the product"
          className="form-control"
        />
        <div className="form-group">
          <label>Upload photos of the product.</label>
          <input type="file" onChange={(e)=>MultipleFileChange(e)} className="form-control" multiple  />
        </div>
        <div className="row">
          <div className="col-10">
            <button type="button" onClick={()=> UploadMultipleFiles()} className="btn btn-primary" multiple>Upload</button>
          </div>
          <div className="col-2">
              <CircularProgressbar value={multipleProgress} text={`${multipleProgress}%`} styles={buildStyles({
                  rotation:0.25,
                  strokeLinecap:'butt',
                  textSize:'16px',
                  pathTransitionDuration:0.5,
                  pathColor:`rgba(255,136,136, ${multipleProgress/100})`,
                  textColor:'#f88',
                  trailColor:'#d6d6d6',
                  backgroundColor:'#3e98c7',
              })}/>
          </div>
        </div>
      </div>
    </div>
    )
}

export default AddProduct
