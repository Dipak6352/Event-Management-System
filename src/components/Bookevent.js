import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
const Bookevent = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const Token = Cookies.get("accesstoken");

  useEffect(() => {
    const allbooking = async () => {
      try {
        const res = await axios.get("http://localhost:2024/getallbooking", {
          headers: { Authorization: Token },
        });
        console.log(res);
        setData(res.data.data);
      } catch (error) {
        console.log("error:", error);
      }
    };
    allbooking();
  }, [Token]);

  return (
    <div className="container-fluid px-0">
      <div className="table-responsive-sm p-2">
        <table
          style={{ fontSize: "0.8rem" }}
          className="table table-striped table-bordered"
        >
          <thead>
            <tr>
              <th scope="col">NO</th>
              <th scope="col">customer</th>
              <th scope="col">Event</th>
              <th scope="col">EventName</th>
              <th scope="col">S-date</th>
              <th scope="col">E-date</th>
              <th scope="col">S-time</th>
              <th scope="col">E-time</th>
              <th scope="col">Location</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.user_id.fullname}</td>
                <td>
                  <img
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      margin: "auto",
                    }}
                    src={item.event_id.image}
                    alt=""
                  />
                </td>
                <td>{item.event_id.category_name}</td>
                <td>{item.event_id.s_date}</td>
                <td>{item.event_id.e_date}</td>
                <td>{item.event_id.s_time}</td>
                <td>{item.event_id.s_time}</td>
                <td>{item.event_id.location}</td>
                <td>{item.event_id.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookevent;
