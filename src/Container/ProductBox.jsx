import React from "react";

const ProductBox = ({ prod }) => {
  const { image, title, price } = prod;

  return (
    <>
      <div className="pb-5 m-2">
        <div className="product-item position-relative bg-light d-flex flex-column text-center">
          <img className="img-fluid mb-4" src={image} alt="" />
          <h6 className="text-uppercase">{title}</h6>
          <h5 className="text-primary mb-0">${price}</h5>
          <div className="btn-action d-flex justify-content-center">
            <a className="btn btn-primary py-2 px-3" href="">
              <i className="bi bi-cart"></i>
            </a>
            <a className="btn btn-primary py-2 px-3" href="">
              <i className="bi bi-eye"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBox;
