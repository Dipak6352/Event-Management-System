import axios from 'axios';
import React, { useState } from 'react'
import Cookies from 'js-cookie';

const ChangepassAdmin = () => {
    const[password,setPassword]=useState();
    const[newPassword,setNewPassword]=useState();
    const Token = Cookies.get("accessToken");
     const changepass=async(e)=>{
        e.preventDefault();
        const p={password,newPassword}
        await axios.post('http://localhost:3046/api/v1/admin/passwordChange',p,{
            headers: { Authorization: Token },}).then((res)=>{
                if(res.data.success==true){
                    alert(res.data.message)
                }
                else{
                    alert(res.data.message)
                }
                
            }).catch((err)=>console.log(err))
     }

  return (
  <>
  <div style={{height:"100vh"}} className="container-fluid  d-flex ha-6 text-white justify-content-center align-items-center ">
    <div style={{maxWidth:'350px',}} className="container border border-2 border-primary py-5 px-sm-5 px-3 rounded-2">
        <form onSubmit={changepass} action="">
  <div className="mb-3">
    <label htmlFor="formGroupExampleInput" className="form-label">
      Old Password
    </label>
    <input
      type="text"
      className="form-control"
      id="formGroupExampleInput"
      placeholder="Enter Old Password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="formGroupExampleInput2" className="form-label">
      New Password
    </label>
    <input
      type="text"
      className="form-control"
      id="formGroupExampleInput2"
      placeholder="Enter New Password"
      value={newPassword}
      onChange={(e)=>setNewPassword(e.target.value)}
    />
  </div>
  <div className="form-check text-start mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" for="gridCheck">
                      <p className="fe fw-medium opacity-75">remember me ?</p>
                    </label>
                  </div>

  <div className="mb-3 ">
    <button className='w-100 btn  btn-outline-primary ' type="submit ">Change</button>
  </div>

        </form>
        
    </div>
  </div>
  </>
  )
}

export default ChangepassAdmin