import React from "react";

const TestimonialBox = ({ imgNo }) => {
  return (
    <>
      <div className="testimonial-item text-center">
        <div className="position-relative mb-4">
          <img
            className="img-fluid mx-auto"
            src={require(`../Assets/Images/testimonial-${imgNo}.jpg`)}
            alt=""
          />
          <div
            className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white"
            style={{ width: "45px", height: "45px" }}
          >
            <i className="bi bi-chat-square-quote text-primary"></i>
          </div>
        </div>
        <p>
          Dolores sed duo clita tempor justo dolor et stet lorem kasd labore
          dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et
          tempor diam tempor erat. Erat dolor rebum sit ipsum.
        </p>
        <hr className="w-25 mx-auto" />
        <h5 className="text-uppercase">Client Name</h5>
        <span>Profession</span>
      </div>
    </>
  );
};

export default TestimonialBox;
