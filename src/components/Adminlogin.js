import axios from "axios";
import React, { useState } from "react";
import { FcLock } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Adminlogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
   
  const login = async (e) => {
    e.preventDefault(); 
    const data = { email, password };
    try {
      const result = await axios.post("http://localhost:4545/adminlogin", data);
      console.log(result);
      if (result.data.success) {
        Cookies.set('adminid',1)
        alert(result.data.message);
        navigate('/adminpage');

        
      } else {
        alert(result.data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  
  return (
    <>
      <div
        style={{ minHeight: "100vh" }}
        className="container-fluid text-center d-flex align-items-center justify-content-center flex-column ha-6"
      >
        <div
          style={{ maxWidth: "500px", minWidth: "250px" }}
          className="d-flex justify-content-center flex-column border border-2 p-3"
        >
          <span className="d-inline-block mb-1 fs-5">
            <FcLock />
          </span>
          <h5 className="fw-bold text-white mb-3 text-center my-2">LOGIN</h5>

          <form  action="">
            <div className=" input-group mb-2">
              <input
                className=" form-control"
                placeholder="Email"
                type="email"  
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className=" input-group my-4">
              <input
                className=" form-control"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-check text-start mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" for="gridCheck">
                <p className="text-white fw-medium opacity-75">remember me ?</p>
              </label>
            </div>

            <button
              type="submit"
              style={{ width: "100%" }}
              className="btn btn-primary mb-3 "
              onClick={login}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Adminlogin;
