import React from "react";
import { Link } from "react-router-dom";

const ProductBox = ({ prod }) => {
  const { image, title, price } = prod;

  return (
    <>
      <div className="pb-5 m-2">
        <Link
          className="btn btn-primary py-2 px-3"
          to="/product/1"
          style={{ background: "#fff" }}
        >
          <div className="product-item position-relative d-flex flex-column text-center">
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
        </Link>
      </div>
    </>
  );
};

export default ProductBox;
