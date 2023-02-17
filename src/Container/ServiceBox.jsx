import React from "react";

const ServiceBox = ({ item }) => {
  const { title, description } = item;
  return (
    <>
      <div className="service-item bg-light d-flex p-4">
        <i className="flaticon-house display-1 text-primary me-4"></i>
        <div>
          <h5 className="text-uppercase mb-3">{title}</h5>
          <p>{description}</p>
          <a className="text-primary text-uppercase" href="">
            Read More<i className="bi bi-chevron-right"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default ServiceBox;
