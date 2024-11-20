import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import "./header.css";
import { IoMdNotifications } from "react-icons/io";


import { IoLogInOutline } from "react-icons/io5";
import axios from "axios";
import Cookies from "js-cookie";
export const Header = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const token=Cookies.get('accesstoken');

  const speak=async(name)=>
    {
      const text=`welcome  ${name} sir`
      var utterance = new SpeechSynthesisUtterance (text);
      speechSynthesis.speak(utterance); 
    }
 
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('http://localhost:2024/getcurrentUser',{
          headers:{Authorization:token}
        });
        console.log(res);
        if (res.data.success) {
          speak(res.data.data.fullname)
          setUser(res.data.data);
         }
      } catch (err) {
        console.error(err);
      }
    })();
  }, [token]);

  const logout = () => {
    Cookies.remove("accesstoken");
    window.location.href = "/";
  };

  return (
    <>
      <nav className="navbar dd  navbar-expand-md ">
        <div className="container-fluid">
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="d-md-none">
            <img 
              style={{ height: "50px" }}
              className="img-fluid "
              src="images/images/headlogo.png"
              alt="1"
            />
          </div>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link
           
              className="navbar-brand d-flex justify-content-center ms-md-4 d-none d-md-block me-md-auto "
              to="#"
            >
              <img
           
                style={{ height: "50px" }}
                className="img-fluid "
                src="images/images/headlogo.png"
                alt=""
              />
            </Link>
            <ul className="navbar-nav ms-md-auto me-md-auto  mb-2 mb-lg-0 ">
              <li onClick={() => navigate("/")} className="nav-item ">
                <Link
                  className="nav-link active fw-bold text-white"
                  aria-current="page"
                  to="#"
                >
                  HOME
                </Link>
              </li>
              <li onClick={() => navigate("/about")} className="nav-item">
                <Link className="nav-link text-white fw-bold" to="#">
                  ABOUT
                </Link>
              </li>
              <li onClick={() => navigate("/Events")} className="nav-item">
                <Link className="nav-link text-white fw-bold" to="#">
                  EVENTS
                </Link>
              </li>
              <li onClick={() => navigate("/Gallary")} className="nav-item">
                <Link className="nav-link text-white fw-bold" to="#">
                  GALLARY
                </Link>
              </li>
              <li onClick={() => navigate("/Contact")} className="nav-item">
                <Link className="nav-link text-white fw-bold" to="#">
                  CONTACT  
                </Link>
              </li>
            </ul>
            { user ? (
              <div className="d-flex justify-content-center gap-3 mx-2">
                <div
                  onClick={() => navigate("/Account")}
                  className="d-inline-block pt-1  "
                >
                  <img
                    width="40px"
                    height="40px"
                    className="img-fluid rounded-circle"
                    src={user.avatar}
                    alt="1"
                  />
                  <span className="text-white ms-2">{user.fullname}</span>
                </div>
                <span
                  className="pt-2"
                  style={{ cursor: "pointer" }}
                  onClick={logout}
                >
                  <p className="text-primary fw-bold">
                    <FiLogOut />
                    Logout 
                  </p>
                </span>
              </div>
            ) : (
              <div style={{ width: "150px" }} className="dropdown">
                <button
                  type="button"
                  className="btn border-primary  pe-4 btn-md dropdown-toggle text-primary fw-bolder"
                  data-bs-toggle="dropdown"
                >
                  Register
                </button>
                <ul
                  style={{ minWidth: "120px" }}
                  className="dropdown-menu bg-transparent p-1 "
                >
                  <li onClick={() => navigate("/Signup")}>
                    <Link
                      className="dropdown-item text-primary fw-bold my-1 border border-2 rounded-2 border-primary"
                      href="#"
                    >
                      <span>
                        {" "}
                        <IoLogInOutline />
                      </span>
                      Sign up
                    </Link>
                  </li>
                  <li onClick={() => navigate("/Signin")}>
                    <Link
                      className="dropdown-item text-primary fw-bold rounded-2 border border-2 border-primary"
                      href="#"
                    >
                      <span>
                        {" "}
                        <IoLogInOutline />
                      </span>
                      Sign in
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

        
        </div>
      </nav>
    </>
  );
};
