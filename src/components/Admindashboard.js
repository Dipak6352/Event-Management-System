import React, { useEffect, useState } from "react";

import { PiUserListFill } from "react-icons/pi";
import { MdCategory } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { CiBookmarkPlus } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { MdAdminPanelSettings } from "react-icons/md";
import { IoNotificationsCircle } from "react-icons/io5";
import Cookies from "js-cookie";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";


const Admindashboard = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState();
  const idd=Cookies.get('adminid');
 


 useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:4545/getadmin/${idd}`);
      setAdmin(response.data.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (idd) {
    fetchData();
  }
}, [idd]);


  const Logout = async () => {
    Cookies.remove('adminid')
    alert("admin successfully logout");
    window.location.href = "/";
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 col-sm-4 col-md-3 position-sticky top-0 bottom-0 col-lg-2 p-0 ">
            <div className="container-fluid ">
              <div className="row">
                <div className=" bg-dark min-vh-100 d-flex justify-content-between flex-column  ">
                  <div>
                    <a
                      className="text-decoration-none d-flex mt-2 justify-content-center align-items-center text-white ms-1 ms-sm-2"
                      href=""
                    >
                      <i className="fs-4">
                        <MdAdminPanelSettings />
                      </i>
                      <span className=" ms-3 d-none d-sm-inline ">Admin</span>
                    </a>
                    <hr className="text-white" />
                    <ul className="nav d-flex flex-column justify-content-center">
                      <li
                        onClick={() => navigate("")}
                        className="nav-item d-flex mb-2 justify-content-center justify-content-sm-start"
                      >
                        <a
                          href="#"
                          className=" text-decoration-none text-white ms-1 ms-sm-3"
                          aria-current="page"
                        >
                          <i className="fs-4">
                            <PiUserListFill />
                          </i>
                          <span className="ms-2 d-none d-sm-inline">
                            Userlist
                          </span>
                        </a>
                      </li>
                      <li
                        onClick={() => navigate("/adminpage/postevent")}
                        className="nav-item d-flex mb-2 justify-content-center justify-content-sm-start"
                      >
                        <a
                          href="#"
                          className=" text-decoration-none text-white ms-1 ms-sm-3"
                          aria-current="page"
                        >
                          <i className="fs-4">
                            <MdEventAvailable />
                          </i>
                          <span className="ms-2 d-none d-sm-inline">
                            Event Post
                          </span>
                        </a>
                      </li>
                      <li  onClick={() => navigate("/adminpage/bookevent")}
                       className="nav-item d-flex mb-2 justify-content-center justify-content-sm-start">
                        
                        <a
                          href="#"
                          className="text-decoration-none text-white ms-1 ms-sm-3"
                          aria-current="page"
                        >
                          <i className="fs-4">
                            <CiBookmarkPlus />
                          </i>
                          <span className="ms-2 d-none d-sm-inline">
                            Book Event
                          </span>
                        </a>
                      </li>
                      <li
                        onClick={() => navigate("/adminpage/postcategory")}
                        className="nav-item d-flex mb-2 justify-content-center justify-content-sm-start"
                      >
                        <a
                          href="#"
                          className=" text-decoration-none text-white ms-1 ms-sm-3"
                          aria-current="page"
                        >
                          <i className="fs-4">
                            <MdCategory />
                          </i>
                          <span className="ms-2 d-none d-sm-inline">
                            category
                          </span>
                        </a>
                      </li>
                      <li
                        onClick={() => navigate("/adminpage/contactlist")}
                        className="nav-item d-flex mb-2 justify-content-center justify-content-sm-start"
                      >
                        <a
                          href="#"
                          className=" text-decoration-none text-white ms-1 ms-sm-3"
                          aria-current="page"
                        >
                          <i className="fs-4">
                            <PiUserListFill />
                          </i>
                          <span className="ms-2 d-none d-sm-inline">
                            Contactlist
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex flex-column text-white justify-content-center">
                    <p className="text-center d-none d-sm-inline">
                      Authentication
                    </p>
                    <hr className="text white my-3" />
                    <p onClick={Logout} className="text-center">
                      <i className="fs-4">
                        <CiLogin />
                      </i>
                      <span className="ms-2 d-none d-sm-inline">Logout</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-10 col-sm-8 col-md-9 col-lg-10  p-0">
            <div className="container-fluid p-0">
              <div className=" d-flex justify-content-between align-items-center fw-bold px-5 p-3 bg-info text-white">
                <div>{admin ? <h6>{admin.admin_name}</h6> : <h6>ADMIN</h6>}</div>
                <h6>{admin?.email}</h6>
                <div>
                  <h6 className="fs-4">
                    <IoNotificationsCircle />
                  </h6>
                </div>
              </div>
            </div>
            <div
              style={{ height: "550px " }}
              className="container-fluid  px-0  overflow-scroll"
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admindashboard;
