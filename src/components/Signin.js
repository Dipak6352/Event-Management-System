import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { FcLock } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const [mobile_no, setNumber] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const data = { mobile_no, password };
    await axios
      .post("http://localhost:2024/login", data)
      .then((result) => {
        console.log(result)
        if (result.data.success == true) {
          // alert(result.data.message)
          const val=result.data.accessToken;
          Cookies.set("accesstoken",val);
          navigate("/");
          window.location.href='/';
        } else {
          alert(result.data.message);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="container-fluid py-1 ha-2">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-12 col-lg-8  d-none text-center d-md-block">
            <img
              style={{ minWidth: "100%", maxHeight: "460px" }}
              className=" img-fluid rounded-2"
              src="./images/harmony.png"
              alt=""
            />
          </div>

          <div className="col-md-5 col-lg-4 mt-2">
            <div
              style={{ maxWidth: "350px", maxHeight: "500px" }}
              className="container-fluid text-center  py-4 px-4 text-white "
            >
              <span
                style={{ width: "auto" }}
                className="cotainer border rounded-circle bg-warning p-1"
              >
                <FcLock />
              </span>
              <h5 className="fw-bold mt-2  mb-4">Sign In</h5>
              <div className="container-fluid text-center">
                <form onSubmit={login} className="text-center " action="">
                  <div className="input-group mb-3 ">
                    <input
                      value={mobile_no}
                      onChange={(e) => setNumber(e.target.value)}
                      type="number"
                      className="form-control p-2"
                      placeholder="phone"
                    />
                  </div>
                  <div className="input-group mb-3 ">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control p-2"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-check text-start mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      <p className="fe fw-medium opacity-75">remember me ?</p>
                    </label>
                  </div>

                  <button
                    type="submit"
                    style={{ width: "100%" }}
                    className="btn btn-primary mb-3 "
                  >
                    Log in
                  </button>
                </form>
              </div>
              <div style={{ fontSize: "12px" }} className="row text-white">
                <div className="col-md-6">
                  <p className=" fw-semibold opacity-75">Forget Password ?</p>
                </div>
                <div className="col-md-6">
                  <p
                    onClick={() => navigate("/Signup")}
                    className="fw-semibold opacity-75"
                  >
                    Don`t have an Account?
                  </p>
                </div>
              </div>
              <p
                style={{ fontSize: "11px" }}
                className="fw-bold  opacity-50 my-3 "
              >
                copyright @suthardipak2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
