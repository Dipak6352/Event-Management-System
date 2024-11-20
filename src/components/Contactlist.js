import axios from "axios";
import React, { useEffect, useState } from "react";


import { useNavigate } from "react-router-dom";

const Contactlist = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
 

 
  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:4545/getcontact")
        .then((res) => {
          if (res.data) {
            setData(res.data);
          } else {
            navigate("/adminlogin");
          }
        })
        .catch((err) => console.log(err));
    })();
  }, [data]);

  // block$unblock api


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
             
                <th scope="col">Name</th>
                <th scope="col">Email</th>
               
                <th scope="col">Phone Number</th>
                <th scope="col">Message</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                 
                  <td>{item.fulName}</td>
                  <td>{item.email}</td>
                
                  <td>{item.mobile_no}</td>
                  <td>{item.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contactlist;