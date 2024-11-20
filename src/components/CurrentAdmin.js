import axios from "axios";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";

const CurrentAdmin = () => {
  const [admin, setAdmin] = useState([]);
  const Token = Cookies.get("accessToken");
  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:3046/api/v1/admin/getcurrentAdmin", {
          headers: { Authorization: Token },
        })
        .then((res) => {
          console.log(res);
          if (res.data.success == true) {
            setAdmin(res.data.data);
            console.log(admin.fullName);
          }
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  return (
    <>
      <div className="container-fluid d-flex justify-content-center  align-items-center">
        <div
          style={{ minWidth: "280px", maxWidth: "350px" }}
          className="border border-2 border-black p-2 p-sm-5 m-4"
        >
          <div className=" row d-flex justify-content-between mb-3 mt-3">
            <h6 className="fw-bold col-sm-4">Admin:</h6>
            <p className="h6  col-8">{admin.fullName}</p>
          </div>
          <div className=" row d-flex justify-content-between mb-3">
            <h6 className="fw-bold col-sm-4">Email:</h6>
            <p className="h6 col-8 ">{admin.email}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentAdmin;
