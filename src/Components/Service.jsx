import React, { useState } from "react";
import ServiceBox from "../Container/ServiceBox";

const Service = () => {
  const [services, setServices] = useState([
    {
      title: "Pet Boarding",
      description:
        "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit",
    },

    {
      title: "Pet Feeding",
      description:
        "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit",
    },

    {
      title: "Pet Grooming",
      description:
        "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit",
    },

    {
      title: "Pet Treatment",
      description:
        "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit",
    },

    {
      title: "Pet Boarding",
      description:
        "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit",
    },

    {
      title: "Pet Boarding",
      description:
        "Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit",
    },
  ]);

  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: "600px" }}
          >
            <h6 className="text-primary text-uppercase">Services</h6>
            <h1 className="display-5 text-uppercase mb-0">
              Our Excellent Pet Care Services
            </h1>
          </div>
          <div className="row g-5">
            {services.map((item) => (
              <div className="col-md-6">
                <ServiceBox item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
