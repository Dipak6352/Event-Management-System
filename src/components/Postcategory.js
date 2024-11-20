import axios from "axios";

import React, { useEffect, useState } from "react";
import { FcLock } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Postcategory = () => {
  const [category_name, setCategory_name] = useState();
  const [category, setCategory] = useState([]);
  const [URL, setURL] = useState();
  const [ref, setRef] = useState();
  const Token = sessionStorage.getItem("acessToken");
  const data = new FormData();


  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:2024/getallcategory" )
        .then((res) => {
         
          if (res.data.success == true) {
            setCategory(res.data.data);
          }
        })
        .catch((err) => console.log(err));
    })();
  }, [ref]);
  const Delete = async (_id) => {
    await axios
      .delete(`http://localhost:2024/deletecategory/${_id}`,_id)
      .then((res) => {
        console.log(res)
        setRef(Math.random());
      })
      .catch((err) => console.log(err));
  };

  const Send = async (e) => {
    e.preventDefault();
    data.append("category_name", category_name);
    data.append("URL", URL);
    await axios
      .post("http://localhost:2024/postcategory", data, {
        headers: { Authorization: Token },
      })
      .then((res) => {
        console.log(res)
        setRef(Math.random());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container-fluid">
        <div className="text-center my-4">
          {" "}
          <span className="d-inline-block fs-3 ">
            <FcLock className="bg-info text-white p-1 border rounded-circle" />
          </span>
          <h5 className="fw-bold text-dark text-center">Post Category</h5>
        </div>
        <div className="row d-flex justify-content-center">
          <div style={{ maxWidth: "450px" }} className="col-12  mb-5">
            <form onSubmit={Send} action="">
              <div className="container d-flex justify-content-between align-items-center rounded-2 bg-info ">
                <input
                  className=" my-4"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setURL(e.target.files[0])}
                />
                <p className=" pt-2 text-wrap">choose pic</p>
              </div>
              <input
                className=" w-100 p-1  my-4 "
                placeholder="Category_Name"
                type="text"
                value={category_name}
                onChange={(e) => setCategory_name(e.target.value)}
              />

              <button className="w-100 btn-info mt-3 btn text-white fw-bold ">
                post
              </button>
            </form>
          </div>
        </div>
        <div className="container">
          {/* table */}
          <div className="table-responsive-sm p-2">
            <table
              style={{ fontSize: "0.8rem" }}
              className="table table-striped table-bordered  "
            >
              <thead>
                <tr>
                  <th scope="col">NO</th>
                  <th scope="col">Category_name</th>
                  <th scope="col">URl</th>
                  <th scope="col">Upadate</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {category.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.category_name}</td>
                      <td>{item.URL}</td>
                      <td>
                        <button className=" border-0 bg-transparent">
                          <FaEdit className="fs-5 text-success fw-bold" />
                        </button>
                      </td>
                      <td>
                       
                        <button
                          onClick={() => Delete(item._id)}
                          className=" border-0 bg-transparent"
                        >
                          <MdDelete className="fs-5 text-danger fw-bold" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Postcategory;
