import axios from "axios";
import React, { useState } from "react";
import { FcLock } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [fullname, setname] = useState();
  const [email, setEmail] = useState();
  const [mobile_no, setPhone] = useState();
  const [gender, setGender] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    const val = { fullname, email, mobile_no, gender, password };
    console.log(val);

    await axios
      .post("http://localhost:2024/datapost", val)
      .then((res) => {
        console.log(res)
        if (res.data.success==1) {
          alert(res.data.message)
          navigate("/signin");
        } else {
          alert(res.data.message );
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container-fluid py-1 ha-2">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-12 col-lg-8  d-none text-center d-lg-block">
            <img
              style={{ minWidth: "100%", maxHeight: "500px" }}
              className=" img-fluid rounded-2"
              src="./images/harmony.png"
              alt=""
            />
          </div>

          <div className="col-md-6 col-lg-4 mt-2">
            <div
              style={{ maxWidth: "350px", maxHeight: "500px" }}
              className="container-fluid text-center py-4 px-4 "
            >
              <span
                style={{ width: "auto" }}
                className="cotainer border rounded-circle bg-warning p-1"
              >
                <FcLock />
              </span>
              <h5 className="fw-bold text-white mt-2 mb-4">REGISTER</h5>
              <div className="container-fluid text-center">
                {/* form start */}
                <form
                  onSubmit={register}
                  className="text-start text-white "
                  action=""
                >
                  <div className="mb-3 ">
                    <input
                      value={fullname}
                      onChange={(e) => setname(e.target.value)}
                      type="text"
                      className="form-control"
                      placeholder="username"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="Email*"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      value={mobile_no}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control"
                      placeholder="phone*"
                    />
                  </div>
                  <div className="row px-3">
                    <div className="col-6 form-check pe-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios1"
                        onChange={(e) => setGender(e.target.value)}
                        value="male"
                      />
                      <label className="form-check-label" htmlFor="gridRadios1">
                        Male
                      </label>
                    </div>
                    <div className="col-6 form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios2"
                        onChange={(e) => setGender(e.target.value)}
                        value="female"
                      />
                      <label className="form-check-label" htmlFor="gridRadios2">
                        Female
                      </label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      placeholder="Password*"
                    />
                  </div>

                  <button
                    type="submit  "
                    style={{ width: "100%" }}
                    className="btn btn-primary mb-3 "
                  >
                    REGISTER
                  </button>
                </form>
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
      </div>
    </>
  );
};
