import React, { useEffect, useState } from "react";
import { FcEngineering } from "react-icons/fc";
import { IoHome } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsGenderMale } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const Account = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
 
  const token=Cookies.get('accesstoken');

 
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('http://localhost:2024/getcurrentUser',{
          headers:{Authorization:token}
        });
        console.log(res);
        if (res.data.success) {
          setUser(res.data.data);
         }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [token]);
  return (
    
    <>
      <div className="container-fluid ha-6 ">
        <div className="row d-flex justify-content-center align-items-center ">
          <div
            style={{ height: "80vh" }}
            className="col-sm-6 ha-7 px-0  bg-danger "
          >
            <div className="h6 pt-4 text-white fw-bold">
              <span className="pe-3">
                <FcEngineering />
              </span>
              Account Details
            </div>
            <hr />
            <div className="d-flex  px-2 text-primary fw-bold justify-content-between">
              <h6 onClick={() => navigate("/")}>
                <span className="pe-2">
                  <IoHome />
                </span>
                Home
              </h6>
              <p  onClick={()=>navigate('/Changepassword')}className="text-center">Change Password ?</p>
            </div>
            <div className="container-fluid mt-2 p-3  textt text-white bg-white bg-opacity-25">
              <h6 className=" fw-semibold mb-4 small text-white ">
                Change Account Detail
              </h6>
              <div className="d-flex justify-content-between">
                {" "}
                <p>
                  <span className="pe-2">
                    <FaUserFriends />
                  </span>{" "}
                  {user?.fullname}
                </p>
                <p onClick={() => navigate("/ChangeDetail", { state: user })}>
                  <FaEdit />
                </p>
              </div>
              <div className="d-flex justify-content-between">
                {" "}
                <p>
                  <span className="pe-2">
                    <MdOutlineEmail />
                  </span>{" "}
                  {user?.email}
                </p>
                <p onClick={() => navigate("/ChangeDetail", { state: user })}>
                  <FaEdit />
                </p>
              </div>
              <div className="d-flex justify-content-between">
                {" "}
                <p>
                  <span className="pe-2">
                    <BsGenderMale />
                  </span>{" "}
                  {user?.gender}
                </p>
                <p onClick={() => navigate("/ChangeDetail", { state: user })}>
                  <FaEdit />
                </p>
              </div>
              <div className="d-flex justify-content-between">
                {" "}
                <p>
                  <span className="pe-2">
                    <FaPhone />
                  </span>{" "}
                  {user?.mobile_no}
                </p>
                <p onClick={() => navigate("/ChangeDetail", { state: user })}>
                  <FaEdit />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
