import React, { useState } from 'react'
import Header from './Header'

const ProductEntry = () => {
    var [name,setProduct]=useState("")
    var [price,setPrice]=useState("")
    var [description,setDescription]=useState("")
    const subData=()=>{
        const data={"name":name,"price":price,"description":description}
        console.log(data)
    }
  return (
    <div>
<Header/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">ProductName</label>
                    <input onChange={(y)=>{setProduct(y.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Price</label>
                    <input  onChange={(y)=>{setPrice(y.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Description</label>
                    <textarea onChange={(y)=>{setDescription(y.target.value)}} name="" id="" cols="30" rows="10" class="form-control"></textarea>
                    
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-success">Submit</button>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default ProductEntry