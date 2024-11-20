import React from "react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ minHeight: "350px" }} className="container-fluid ha-2 py-5">
        <div className="container-fluid d-flex justify-content-center align-items-center text-center ">
          <div className="container">
            {" "}
            <h1 className=" text-warning opacity-75 text">
              Do you want to Step in to the future of our upcoming events.{" "}
            </h1>
            <button className="btn bg-transparent border text-white my-5 border-white">
              Request Early Access
            </button>
          </div>
        </div>

        <div className="row row-gap-4 text-center">
          <div className="col-6 col-md-3">
            <ul className="list-unstyled text-white">
              <li>
                <h6>made with React</h6>
              </li>
              <li>all right reserve</li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <ul className="list-unstyled text-white">
              <li>
                <h6>link</h6>
              </li>
              <li>Account</li>
              <li>adress</li>
              <li>location</li>
            </ul>
          </div>
          <div className="col-6 col-lg-3">
            <ul className="list-unstyled text-white">
              <li>
                <h6>company</h6>
              </li>
              <li>Terms & condition</li>
              <li>policy</li>
              <li>contact</li>
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <ul className=" list-unstyled text-white ">
              <li>
                <h6>Get in touch</h6>
              </li>
              <li>suthar@2004</li>
              <li>6352204670</li>
            </ul>
          </div>
         
        </div>
        <p
          style={{ fontSize: "13px" }}
          className="h6 text-white opacity-25 my-5 text-center mb-3"
        >
          copyright @suthardipak2023
        </p>
      </div>
    </>
  );
};
