import axios from "axios";
import React, { useState } from "react";
import { FcLock } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
export const Contact = () => {
 const navigate=useNavigate();
  const[fulName,setFulName]=useState();
  const[email,setEmail]=useState();
  const[mobile_no,setNumber]=useState();
  const[message,setMessage]=useState();
    const Submit=async(e)=>{
      e.preventDefault();
      const val={fulName,email,mobile_no,message}
  
      await axios.post('http://localhost:4545/contact',val)
      .then((res) => {
        if (res.data) {
          navigate('/');
          alert(res.data);
        } 
      })
      .catch((err) => console.log(err));
  
    }
  return (
    <>
      <div className="container-fluid ha-1 d-flex justify-content-center align-items-center">
        <div className="main">
          {" "}
          <p className="text-center text-white ">
            <pre>C O N T A C T U S N O W</pre>
          </p>
          <h1 className="text-center text-white fw-bold ">
            <span className="text-warning me-1">KEEP</span> IN TOUCH
          </h1>
          <p className="text-center text-light fw-semibold ">
            <pre>
              HOME<strong className="fw-bold">|</strong> CONTACT US
            </pre>
          </p>
        </div>
      </div>
      <div className="container-fluid py-4 ha-2">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-12 col-lg-6 mt-4 d-none text-center d-md-block">
            <img
              style={{ minWidth: "550px", maxHeight: "450px" }}
              className=" img-fluid rounded-2"
              src="./images/harmony.png"
              alt=""
            />
          </div>

          <div className="col-md-5 col-lg-6 mt-4 mb-3 pb-4">
            <div
              style={{ maxWidth: "350px", maxHeight: "450px" }}
              className="container-fluid text-center border border- border-success-3  rounded-3 border-opacity-50 py-4 px-4 "
            >
              <span
                style={{ width: "auto" }}
                className="cotainer border rounded-circle bg-warning p-1"
              >
                <FcLock />
              </span>
              <h5 className="fw-bold text-white mt-2 mb-4">CONTACT</h5>
              <div className="container-fluid text-center">
                <form onSubmit={Submit} className="text-center " action="">
                  <div className="input-group mb-3 ">
                    <input
                      value={fulName}
                      onChange={(e) => setFulName(e.target.value)}
                      type="text"
                      className="form-control p-2 "
                      placeholder="fulName*"
                    />
                  </div>
                  <div className="input-group mb-3 ">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control p-2"
                      placeholder="Email*"
                    />
                  </div>
                  <div className="input-group mb-3 ">
                    <input
                      value={mobile_no}
                      onChange={(e) => setNumber(e.target.value)}
                      type="number"
                      className="form-control p-2"
                      placeholder="mobile_no*"
                    />
                  </div>
                  <div className="input-group mb-3 ">
                    <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                      type="text"
                      className="form-control p-2"
                      placeholder="Message*"
                    />
                  </div>
                 
                 
                  <button
                    type="submit"
                    style={{ width: "100%" }}
                    className="btn btn-primary mb-3 "
                  >
                    Submit
                  </button>
                </form>
              </div>

              <p
                style={{ fontSize: "12px" }}
                className="h6 text-white opacity-50 my-3 "
              >
                copyright @suthardipak2023
              </p>
            </div>
          </div>
        </div>
      </div>
      <iframe
      title="map"
        className="my-1"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6316852204286!2d72.5092972743882!3d23.037291879163497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b4922484c6f%3A0xe077cfffcd90ee87!2sTop%20App%20%26%20Web%20Development%20company%20in%20ahmedabad.%20Summer%20internship%20in%20Php%2CFlutter%2CPython%2CAngularJS%2CReact%20JS%2CNode%20JS%20%2C%20UI%2FUx!5e0!3m2!1sen!2sin!4v1702980909486!5m2!1sen!2sin"
        style={{ border: 0, width: "100%", height: "50vh" }}
        // allowFullScreen=""
        // loading="lazy"
        // referrerPolicy="no-referrer-when-downgrade"
      />
    </>
  );
};
