import React from "react";

export const Home = () => {
  return (
    <>
      <div style={{ minHeight: "100vh" }} className="container-fluid ha-5 p-5 ">
        <div className="row d-flex justify-content-center justify-content-md-start">
          <div className="col-md-8  p-0  p-md-4">
            <h1 className="text fw-bold mb-3">
              One Stop Event <br /> Planner 
            </h1>
            <p className="text-white fw-semibold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              possimus, quibusdam labore atque suscipit velit perferendis quos,
              distinctio laudantium cum facilis illo officiis veritatis natus
              ipsam ipsum ratione praesentium sequi commodi repellendus
              consequuntur aliquam laborum! Quia at eum corrupti, assumenda
              voluptates reprehenderit quibusdam provident enim fugit doloribus
              saepe sed debitis.
            </p>
            <p className="text-white">Every event Should be perfact</p>
            <div className="input-group pe-md-5 my-md-4">
              <input
                type="email"
                className="form-control rounded-0 rounded-start-2"
                placeholder="Enter your email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-danger rounded-0 rounded-end-2"
                  type="button"
                >
                  Button
                </button>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-4 ">
                <img className="img-fluid" src="images/people.png" alt="" />
              </div>
              <div className="col-6 d-flex py-lg-3">
                <p className="text-white text-wrap ss">
                  1600 people requested a access visit in last 24hour
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 d-none d-sm-block"></div>
        </div>
      </div>
      {/* second section */}
      <div className="container-fluid ha-6 p-md-5 py-3">
        <div className="container d-flex flex-wrap p-4 justify-content-evenly">
          <img className="py-2" src="images/google.png" alt="" />
          <img  className="py-2"src="images/shopify.png" alt="" />
          <img className="py-2" src="images/slack.png" alt="" />
          <img className="py-2" src="images/dropbox.png" alt="" />
          <img className="py-2" src="images/atlassian.png" alt="" />
        </div>
        <div
          style={{ minHeight: "auto" }}
          className="container rounded-2 mt-5 ha-7 pt-3 "
        >
          <div className="row p-md-4 ">
            <div className="col-sm-4 position-relative  flex-column d-flex">
              <p className="fw-bold text-white-50">
                What is Harmony <br /> Event
              </p>
              <p className='  position-absolute deco  '></p>
            </div>
            <div className="col-sm-8">
              <p className="text-white-50">
                We so opinion friends me message as delight. Whole front do of
                plate heard oh ought. His defective nor convinced residence own.
                Connection has put impossible own apartments boisterous. At
                jointure ladyship an insisted so humanity he Friendly bachelor
                entrance to on by.
              </p>
            </div>
          </div>
          <div className="row p-md-4 text d-flex justify-content-center">
            <div className="col-sm-8">
              <h3 className="">Your Event will be beyond your imaganation</h3>
            </div>
            <div className="col-sm-4 py-2">
              <p className="fw-bold">Explore the library</p>
            </div>
          </div>
          <div className="row text-white-50 p-md-4 text-center justify-content-evenly">
            <div className="col-md-3">
              <h5>Chatbots</h5>
              <p>
                We so opinion friends me message as delight Whole front do of
                plate heard on ought
              </p>
            </div>
            <div className="col-md-3">
              <h5>Knowledgebase</h5>
              <p>
                At jointure ladyship an insisted so humanity ne, Friendly
                bachelor entrance to on by. As put Impossible own apartments b
              </p>
            </div>
            <div className="col-md-3">
              <h5>Education</h5>
              <p>
                At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by As put
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row p-4">
            <div className="col-sm-5 p-3 px-md-5">
              <h4 className="text">
                Harmony Event Management Firm & Wedding Planners is a group of
                creative minds who would like to make weddings, birthdays & any
                kind of events courteous & a better place for our clients to
                celebrate important moments of their lives...
              </h4>
            </div>
            <div className="col-sm-7 text-white p-3 py-md-5">
              <div className="row mb-2">
                <div className="col-sm-4  ">
                  <h6>photography</h6>
                </div>
                <div className="col-8">
                 <p className="font"> A Team Of 3 talented Photographers are ready to snap the best
                  moments of your ceremony .
                  </p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-4  ">
                  <h6>Cinematography or Videography Service</h6>
                </div>
                <div className="col-8">
                 <p className="font"> Creative full HD 1080p Video, a different scape of your
                  ceremony. .</p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-4  ">
                  <h6>Full Venue Decoration Service</h6>
                </div>
                <div className="col-8">
                 <p className="font"> A Blend of out-of-the-box ideas to decore your precious date .</p>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-4  ">
                  <h6>Home Decoration</h6>
                </div>
                <div className="col-8">
                 <p className="font"> just call us and get total event solution under one roof..</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{minHeight:'auto'}} className="container fontt text-white rounded-3">
          <div className="row p-3">
            <div className="col-sm-9">
              <p>Request early access to get started</p>
              <h6>
                register today & start exploring endless posibility
              </h6>

            </div>
            <div className="col-sm-3 p-3">
              <button className="border border-2 rounded-3 text-white border-white py-1 px-3 bg-dark">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
