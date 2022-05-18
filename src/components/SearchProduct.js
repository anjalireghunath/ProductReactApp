import React, { useState } from 'react'
import Header from './Header'

const SearchProduct = () => {
    var [name,setProductFn]=useState("")
const subdata=()=>{
 const data={"name":name}
    console.log(data)
}
  return (
    <div>
<Header/>
<div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl">
            <div class="row g-3">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl">
                    <label for="" class="form-label">Product Name</label>
                    <input onChange={(e)=>{setProductFn(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl">
                    <button onClick={subdata} class="btb btn-success">Search</button>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default SearchProduct