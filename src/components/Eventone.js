import React from "react";
import { LuClock4 } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";

export const Eventone = () => {
  return (
    <>
      <div className=" d-flex justify-content-center ha-6 p-4">
        <div className="card ha-11 col-md-10">
          <img
            className="card-img-top h-50 "
            src="\images\images\event\event-details-1.jpg"
            alt="Card"
          />
          <div className="card-body ">
            <p className="text-dark w-50 text-center border border-black rounded-3 bg-black bg-opacity-25">
              Wedding party
            </p>
            <p className="text-dark text-center border border-black rounded-3 bg-black bg-opacity-25">
              10/05/2023
            </p>
            <p className="text-dark text-center border border-black rounded-3 bg-black bg-opacity-25 w-75">
              Ticket from $52
            </p>
            <p className="text-dark">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              similique officiis, possimus optio saepe nemo placeat, maxime
              quasi praesentium nulla dignissimos tempora. Dicta consequuntur
              omnis neque reprehenderit adipisci quaerat enim architecto. Hic,
              saepe neque. Enim non odio quia assumenda? Quasi laudantium
              ratione vel veniam rem debitis tenetur rerum consequuntur eum.
            </p>
            <p>
              <span>
                <LuClock4 />
              </span>
              start 11.00pm-20.00pm
            </p>
            <p>
              <span>
                <FaLocationDot />
              </span>
              Good Morning all of you...you can join Wedding
            </p>
            <div className="main d-flex justify-content-center">
              <button className="btn btn-outline-primary text-primary text-center w-75 fw-semibold ">
                book
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
