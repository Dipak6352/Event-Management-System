import axios from "axios";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const Userlist = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();

  const [ref, setRef] = useState();
  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:2024/getdata")
        .then((res) => {
          console.log(res);
          if (res.data.success == true) {
            setData(res.data.data);
          } else {
            navigate("/adminlogin");
          }
        })
        .catch((err) => console.log(err));
    })();
  }, [ref]);

  // block$unblock api

  const Block = async (_id, isblock) => {
    const newIsBlocked = !isblock;
    await axios
      .patch(`http://localhost:2024/block/${_id}`, {
        isblock: newIsBlocked,
      })
      .then((res) => {
        console.log(res);
        setRef(Math.random());
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container-fluid px-0">
        {/* usertablelist */}

        <div className="table-responsive-sm p-2">
          <table
            style={{ fontSize: "0.8rem" }}
            className="table table-striped table-bordered  "
          >
            <thead>
              <tr>
                <th scope="col">NO</th>
                <th scope="col">image</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Block&Unblock</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img alt="profile"
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        margin: "auto",
                      }}
                      src={
                         item.avatar
                      }
                    />
                  </td>
                  <td>{item.fullname}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                  <td>{item.mobile_no}</td>
                  <td className="d-flex justify-content-center gap-3 btn-group-sm">
                    <button
                      key={item._id}
                      onClick={() => Block(item._id, item.isblock)}
                      className="btn btn-outline-primary"
                    >
                      {item.isblock == false ? "Block" : "Unblock"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Userlist;
