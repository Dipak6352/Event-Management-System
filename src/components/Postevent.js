import axios from "axios";
import React, { useEffect, useState } from "react";

import { FcLock } from "react-icons/fc";

const Postevent = () => {
  const [image, setImage] = useState();
  const [s_date, setS_date] = useState();
  const [e_date, setE_date] = useState();
  const [s_time, setS_time] = useState();
  const [e_time, setE_time] = useState();
  const [location, setLocation] = useState();
  const [price, setPrice] = useState();

  const [category_name, setCategory_name] = useState();
  const [category, setCategory] = useState();
  const data = new FormData();
  // getting category value
  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:2024/getallcategory")
        .then((res) => {
          if (res.data.success == true) {
            setCategory(res.data.data);
          }
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  const Sub = async (e) => {
    e.preventDefault();

    data.append("s_date", s_date);
    data.append("e_date", e_date);
    data.append("s_time", s_time);
    data.append("e_time", e_time);
    data.append("location", location);
    data.append("price", price);
    data.append("category_name", category_name);
    data.append("image", image);
    console.log(data);

    await axios
      .post("http://localhost:2024/postevent", data)
      .then((res) => {
        alert("event post successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container-fluid  px-1 ">
        <div className="text-center my-4">
          <span className="d-inline-block border border-1 rounded-circle px-2 py-1 bg-info">
            <FcLock />
          </span>
          <h5 className="fw-bold text-dark text-center">Post Event</h5>
        </div>

        <div className="row d-flex justify-content-center">
          <div style={{ maxWidth: "min-content" }} className="col-12 px-3 mb-5">
            <form onSubmit={Sub} action="">
              <div className="container d-flex justify-content-between align-items-center rounded-2 bg-info ">
                <input
                  className="p-1"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <p className=" pt-2 text-wrap">choose pic</p>
              </div>

              <input
                className=" w-100 p-1 my-2"
                value={s_date}
                onChange={(e) => setS_date(e.target.value)}
                type="date"
              />
              <input
                className=" w-100 p-1 my-2"
                value={e_date}
                onChange={(e) => setE_date(e.target.value)}
                type="date"
              />
              <div className="container-fluid d-flex justify-content-between gap-1 p-0 ">
                <input
                  type="time"
                  value={s_time}
                  onChange={(e) => setS_time(e.target.value)}
                  className=" p-1 my-2 w-50 "
                />
                <input
                  type="time"
                  value={e_time}
                  onChange={(e) => setE_time(e.target.value)}
                  className=" p-1 my-2 w-50"
                />
              </div>
              <select
                value={category_name}
                onChange={(e) => setCategory_name(e.target.value)}
                className=" w-100 p-1 my-2  "
              >
                <option disabled={category_name}>Select Category</option>
                {category?.map((e, i) => {
                  return (
                    <option key={i} value={e.category_name}>
                      {e.category_name}
                    </option>
                  );
                })}
              </select>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className=" w-100 p-1 my-2 "
                placeholder="Price*"
                type="text"
              />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className=" w-100 p-2 my-2"
                placeholder="location*"
                type="text"
              />

              <button className="w-100 btn-info btn text-white fw-bold ">
                post
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Postevent;
