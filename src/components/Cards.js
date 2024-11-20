import React, { useEffect, useState } from "react";
import { LuClock4 } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
export const Cards = () => {
  const { state } = useLocation();
  // const navigate = useNavigate();
  const [data, setData] = useState([]);
  // const [user, setUser] = useState(null); // Assume user state is managed here

  const token = Cookies.get("accesstoken");


  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount, event_id,category_name,image,price) => {
    console.log(amount, event_id);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("you are offline");
      return;
    }

    // Convert amount to the smallest currency unit
     // assuming amount is in INR, convert to paise

    const option = {
      key: "rzp_test_dEYhZg38SrkYMD",
      currency: "INR",
      amount: price*100 ,// use convertedAmount here
      name: category_name,
      description: "Thanks for buying products from our website",
      image:image,
      handler: async function (response) {
        await axios
          .post(
            "http://localhost:2024/booking",
            { event_id },
            {
              headers: {
                Authorization:token,
              },
            }
          )
          .then((res) => {
            console.log(res.data.data)
            if(res.data.success){
              alert(res.data.message)
            }
            // navigate("/mybooking")
          })
          .catch((err) => console.log(err));
      },
      prefill: {
        name: "hello",
      },
    };

    const paymentObject = new window.Razorpay(option);
    paymentObject.open();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:2024/getcardbycategory/${state.category_name}`
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (state.category_name) {
      fetchData();
    }
  }, [state.category_name]);

 
  return (
    <>
      <div className="container-fluid p-2 p-sm-5 ha-6">
        <div className="container">
          <div className="row">
            {data?.map((item, i) => (
              <div key={item.id} className="col-sm-6 col-md-3 mb-3">
                <div key={item.id} className="card ha-11">
                  <img
                    style={{ height: "150px" }}
                    className="card-img-top"
                    src={item.image}
                    alt="Card cap"
                  />
                  <div key={item.id} className="card-body ">
                    <p className="text-dark text-center border border-black rounded-3 bg-black bg-opacity-25">
                      {item.category_name}
                    </p>
                    <p className="text-dark text-center border border-black rounded-3 bg-black bg-opacity-25">
                      {item.s_date}
                    </p>
                    <p className="text-dark text-center border border-black rounded-3 bg-black bg-opacity-25 w-75">
                      Ticket from ${item.price}
                    </p>
                    <p>
                      <span>
                        <LuClock4 />
                      </span>
                      start {item.s_time}-{item.e_time}
                    </p>
                    <p>
                      <span>
                        <FaLocationDot />
                      </span>
                      {item.location}
                    </p>
                    <div
                      key={item.id}
                      className="main d-flex justify-content-center"
                    >
                      <button
                        onClick={() => displayRazorpay(item.price, item._id,item.category_name,item.image,item.price)}
                        className="ha-12 text-white text-center w-75 fw-semibold"
                        style={{ cursor: "pointer" }}
                      >
                        book event
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
