import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { FcLock } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";

export const ChangeDetail = () => {
  const { state } = useLocation();
  const [fullname, setName] = useState(state?.fullname);
  const [email, setEmail] = useState(state?.email);
  const [mobile_no, setPhone] = useState(state?.mobile_no);
  const [gender, setGender] = useState(state?.gender);
  const token = Cookies.get("accesstoken");
  const navigate = useNavigate();

  const ChangeDetail = async (e) => {
    e.preventDefault();
    const data = { fullname, email, gender };
    console.log(data);

    await axios
      .post(`http://localhost:2024/update`, data, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res)
        if (res.data.success == true) {
          navigate("/Account");
          window.location.href = "/Account";
        } else {
          alert(`res.data.message`);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-7 d-none d-md-block px-0">
            <img
              style={{ maxHeight: "90vh", minWidth: "100%" }}
              className="w-100 img-fluid"
              src="\images\company-age-bg.jpg"
              alt=""
            />
          </div>
          <div className="col-md-5  pt-3">
            <div className="container d-flex justify-content-center flex-column ">
              <span className="fs-3 text-center">
                <FcLock />
              </span>
              <h5 className="text-dark text-center my-1">
                Change User Details
              </h5>
            </div>
            <div className="row d-flex justify-content-center mt-3">
              <div className="col-8">
                {/* form start */}
                <form
                  onSubmit={ChangeDetail}
                  className="text-start text-dark  "
                  action=""
                >
                  <div className="mb-3 ">
                    {/* username */}
                    <label
                      className=" fw-medium text-dark p-2"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      value={fullname}
                      onChange={(e) => setName(e.target.value)}
                      id="username"
                      type="text"
                      className="form-control"
                      placeholder="Full_Name"
                    />
                  </div>
                  {/* email */}
                  <div className="mb-3">
                    <label className=" fw-medium text-dark p-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      type="email"
                      className="form-control"
                      placeholder="Email*"
                    />
                  </div>
                  {/* phone  */}
                  <div className="mb-3">
                    <label className=" fw-medium text-dark p-2" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      value={mobile_no}
                      id="phone"
                      type="number"
                      className="form-control"
                      placeholder="phone*"
                      disabled
                    />
                  </div>
                  {/* gender  */}
                  <label className=" fw-medium text-dark px-2" htmlFor="gender">
                    Gender
                  </label>
                  <div id="gender" className="row m-3 px-3">
                    <div className="col-6 form-check pe-2">
                      <input
                        onChange={(e) => setGender(e.target.value)}
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios1"
                        value="male"
                      />
                      <label className="form-check-label" htmlFor="gridRadios1">
                        Male
                      </label>
                    </div>
                    <div className="col-6 form-check mb-2">
                      <input
                        onChange={(e) => setGender(e.target.value)}
                        className="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios2"
                        value="female"
                      />
                      <label className="form-check-label" htmlFor="gridRadios2">
                        Female
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit  "
                    style={{ width: "100%" }}
                    className="btn btn-primary mb-3 "
                  >
                    Change
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
