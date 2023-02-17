import React, { useState } from "react";
import breakPoints from "../Assets/breakpoints";
import Carousel from "react-elastic-carousel";
import TestimonialBox from "../Container/TestimonialBox";

const Testimonial = () => {
  const [teamArr, setTeamArr] = useState([1, 2]);

  return (
    <>
      <div
        className="container-fluid bg-testimonial py-5"
        style={{ margin: "45px 0" }}
      >
        <div className="container py-5">
          <div className="row justify-content-end">
            <div className="col-lg-7">
              <Carousel
                breakPoints={breakPoints}
                className=" testimonial-carousel bg-white p-5"
              >
                {teamArr.map((imgNo) => (
                  <TestimonialBox imgNo={imgNo} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
