import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Events = () => {
  const Navigate = useNavigate();
  const [category, setCategory] = useState([]);
  console.log(category);

  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:2024/getallcategory"
        )
        .then((res) => {
         
          if (res.data.success == true) {
            setCategory(res.data.data);
          }
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  return (
    <>
      <div className="container-fluid ha-1 d-flex justify-content-center align-items-center">
        <div className="main">
          <p className="text-center text-white ">
            <pre>H A R M O N Y E V E N T S</pre>
          </p>
          <h2 className="text-center text-warning fw-bold "> HARMONY</h2>
          <p className="text-center text-white  display-6 ">EVENTS</p>
          <p className="text-center text-light fw-semibold ">
            <pre>
              HOME<strong className="fw-bold">|</strong>Harmony
            </pre>
          </p>
        </div>
      </div>
      <div className="container-fluid ha-6 py-3">
        <div className="container">
          <div className="row ">
            {category?.map((item,i) => {
              return (
                <div key={i} className="col-sm-4 col-md-3 mb-3">
                  <div key={i} className="card rounded-0">
                    <img style={{height:'200px'}} className="card-img-top img-fluid" src={item.URL} alt="h" />
                    <div key={item.id} className="card-body">
                      <p
                         key={i}
                        onClick={() => Navigate("/Cards",{state:item})}
                        className="card-text text-center text-primary"
                      >
                        {item.category_name}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
