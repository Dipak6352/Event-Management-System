import axios from "axios";


import Cookies from "js-cookie";
import { useState } from "react";
export const Changepassword = () => {
  const[password,setPassword]=useState();
  const[newPassword,setNewpassword]=useState();
  const Token = Cookies.get("accessToken");
  const Changepass=async(e)=>{
    e.preventDefault();
    const pass={password,newPassword}
    console.log(pass);
    await axios.post('http://localhost:3046/api/v1/users/passwordChange',pass,{
      headers: { Authorization: Token },
    }).then(((res) => {
      if(!Token){
         window.location.href='/';
      } 
      if (res.data.success == true) {
       alert('password change successfully')
      } else {
        alert(`old password is incorrect`);
      }
    }))
    .catch((err) => console.log(err))

  }
 
  return (
    <>
      <div className="container-fluid ha-6 h-100">
        <div className="row d-flex justify-content-center p-sm-5">
          <div
            style={{ minHeight: "70vh", maxWidth: "350px" }}
            className="col-6 border border-1 bbgg border-primary rounded-3 p-sm-5"
          >
            <form
onSubmit={Changepass}
              className="text-white mb-auto"
              action=""
            >
                <div className="form-group my-4">
                  <label htmlFor="password">Password</label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="password"
                    aria-describedby="emailHelp"
                    placeholder="Old password*"
                  />
                </div>
                <div className="form-group my-4 ">
                  <label htmlFor="exampleInputPassword1">New Password</label>
                  <input
                    value={newPassword}
                    onChange={(e) =>setNewpassword(e.target.value)}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder=" New Password"
                  />
                </div>
                <div class="form-check my-4">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn w-100 mt-2 btn-outline-primary"
                >
                  Change
                </button>
              
            </form>
            <p className="fw-bolder fst-italic fs-6 text-center text-white-50 mt-4">
              term & Condition apply?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
