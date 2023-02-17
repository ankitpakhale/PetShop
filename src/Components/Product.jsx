// import "../Assets/Styles/css/carousel.css";
import "../Assets/Styles/lib/owlcarousel/assets/owl.carousel.css";
import "../Assets/Styles/lib/owlcarousel/assets/owl.carousel.min.css";
import "../Assets/Styles/lib/owlcarousel/assets/owl.theme.default.css";
import "../Assets/Styles/lib/owlcarousel/assets/owl.theme.default.min.css";
import "../Assets/Styles/lib/owlcarousel/assets/owl.theme.green.css";
import "../Assets/Styles/lib/owlcarousel/assets/owl.theme.green.min.css";

import React, { useEffect, useState } from "react";
import axios from "axios";
import breakPoints from "../Assets/breakpoints";
import Carousel from "react-elastic-carousel";
import ProductBox from "../Container/ProductBox";

const Product = () => {
  const GetUrlData = async () => {
    const data = await axios.get("https://fakestoreapi.com/products");
    setProductList(data.data);
  };

  const [productList, setProductList] = useState([]);
  useEffect(() => {
    GetUrlData();
  }, []);

  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: "600px" }}
          >
            <h6 className="text-primary text-uppercase">Products</h6>
            <h1 className="display-5 text-uppercase mb-0">
              Products For Your Best Friends
            </h1>
          </div>
          <Carousel breakPoints={breakPoints} className="product-carousel">
            {productList.map((prod) => (
              <ProductBox prod={prod} />
            ))}

            {/* <div className="pb-5 m-2">
              <div className="product-item position-relative bg-light d-flex flex-column text-center">
                <img
                  className="img-fluid mb-4"
                  src={require("../Assets/Images/product-2.png")}
                  alt=""
                />
                <h6 className="text-uppercase">Quality Pet Foods</h6>
                <h5 className="text-primary mb-0">$199.00</h5>
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

            <div className="pb-5 m-2">
              <div className="product-item position-relative bg-light d-flex flex-column text-center">
                <img
                  className="img-fluid mb-4"
                  src={require("../Assets/Images/product-3.png")}
                  alt=""
                />
                <h6 className="text-uppercase">Quality Pet Foods</h6>
                <h5 className="text-primary mb-0">$199.00</h5>
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
            <div className="pb-5 m-2">
              <div className="product-item position-relative bg-light d-flex flex-column text-center">
                <img
                  className="img-fluid mb-4"
                  src={require("../Assets/Images/product-4.png")}
                  alt=""
                />
                <h6 className="text-uppercase">Quality Pet Foods</h6>
                <h5 className="text-primary mb-0">$199.00</h5>
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
            <div className="pb-5 m-2">
              <div className="product-item position-relative bg-light d-flex flex-column text-center">
                <img
                  className="img-fluid mb-4"
                  src={require("../Assets/Images/product-2.png")}
                  alt=""
                />
                <h6 className="text-uppercase">Quality Pet Foods</h6>
                <h5 className="text-primary mb-0">$199.00</h5>
                <div className="btn-action d-flex justify-content-center">
                  <a className="btn btn-primary py-2 px-3" href="">
                    <i className="bi bi-cart"></i>
                  </a>
                  <a className="btn btn-primary py-2 px-3" href="">
                    <i className="bi bi-eye"></i>
                  </a>
                </div>
              </div>
            </div> */}
          </Carousel>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: "600px" }}
          >
            <h6 className="text-primary text-uppercase">Products</h6>
            <h1 className="display-5 text-uppercase mb-0">
              Products For Your Best Friends
            </h1>
          </div>
          <Carousel breakPoints={breakPoints} className="product-carousel">
            {productList.map((prod) => (
              <ProductBox prod={prod} />
            ))}
            {/* <div className="pb-5 m-2">
              <div className="product-item position-relative bg-light d-flex flex-column text-center">
                <img
                  className="img-fluid mb-4"
                  src={require("../Assets/Images/product-1.png")}
                  alt=""
                />
                <h6 className="text-uppercase">Quality Pet Foods</h6>
                <h5 className="text-primary mb-0">$199.00</h5>
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
            <div className="pb-5 m-2">
              <div className="product-item position-relative bg-light d-flex flex-column text-center">
                <img
                  className="img-fluid mb-4"
                  src={require("../Assets/Images/product-2.png")}
                  alt=""
                />
                <h6 className="text-uppercase">Quality Pet Foods</h6>
                <h5 className="text-primary mb-0">$199.00</h5>
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
            <div className="pb-5 m-2">
              <div className="product-item position-relative bg-light d-flex flex-column text-center">
                <img
                  className="img-fluid mb-4"
                  src={require("../Assets/Images/product-3.png")}
                  alt=""
                />
                <h6 className="text-uppercase">Quality Pet Foods</h6>
                <h5 className="text-primary mb-0">$199.00</h5>
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
            <div className="pb-5 m-2">
              <div className="product-item position-relative bg-light d-flex flex-column text-center">
                <img
                  className="img-fluid mb-4"
                  src={require("../Assets/Images/product-4.png")}
                  alt=""
                />
                <h6 className="text-uppercase">Quality Pet Foods</h6>
                <h5 className="text-primary mb-0">$199.00</h5>
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
            <div className="pb-5 m-2">
              <div className="product-item position-relative bg-light d-flex flex-column text-center">
                <img
                  className="img-fluid mb-4"
                  src={require("../Assets/Images/product-2.png")}
                  alt=""
                />
                <h6 className="text-uppercase">Quality Pet Foods</h6>
                <h5 className="text-primary mb-0">$199.00</h5>
                <div className="btn-action d-flex justify-content-center">
                  <a className="btn btn-primary py-2 px-3" href="">
                    <i className="bi bi-cart"></i>
                  </a>
                  <a className="btn btn-primary py-2 px-3" href="">
                    <i className="bi bi-eye"></i>
                  </a>
                </div>
              </div>
            </div> */}
          </Carousel>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: "600px" }}
          >
            <h6 className="text-primary text-uppercase">Products</h6>
            <h1 className="display-5 text-uppercase mb-0">
              Products For Your Best Friends
            </h1>
          </div>
          <Carousel breakPoints={breakPoints} className=" product-carousel">
            {productList.map((prod) => (
              <ProductBox prod={prod} />
            ))}
            {/* <div className="pb-5 m-2">
              <div className="product-item position-relative bg-light d-flex flex-column text-center">
                <img
                  className="img-fluid mb-4"
                  src={require("../Assets/Images/product-1.png")}
                  alt=""
                />
                <h6 className="text-uppercase">Quality Pet Foods</h6>
                <h5 className="text-primary mb-0">$199.00</h5>
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
            <div className="pb-5 m-2">
              <div className="product-item position-relative bg-light d-flex flex-column text-center">
                <img
                  className="img-fluid mb-4"
                  src={require("../Assets/Images/product-2.png")}
                  alt=""
                />
                <h6 className="text-uppercase">Quality Pet Foods</h6>
                <h5 className="text-primary mb-0">$199.00</h5>
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
            <div className="pb-5 m-2">
              <div className="product-item position-relative bg-light d-flex flex-column text-center">
                <img
                  className="img-fluid mb-4"
                  src={require("../Assets/Images/product-3.png")}
                  alt=""
                />
                <h6 className="text-uppercase">Quality Pet Foods</h6>
                <h5 className="text-primary mb-0">$199.00</h5>
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
            <div className="pb-5 m-2">
              <div className="product-item position-relative bg-light d-flex flex-column text-center">
                <img
                  className="img-fluid mb-4"
                  src={require("../Assets/Images/product-4.png")}
                  alt=""
                />
                <h6 className="text-uppercase">Quality Pet Foods</h6>
                <h5 className="text-primary mb-0">$199.00</h5>
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
            <div className="pb-5 m-2">
              <div className="product-item position-relative bg-light d-flex flex-column text-center">
                <img
                  className="img-fluid mb-4"
                  src={require("../Assets/Images/product-2.png")}
                  alt=""
                />
                <h6 className="text-uppercase">Quality Pet Foods</h6>
                <h5 className="text-primary mb-0">$199.00</h5>
                <div className="btn-action d-flex justify-content-center">
                  <a className="btn btn-primary py-2 px-3" href="">
                    <i className="bi bi-cart"></i>
                  </a>
                  <a className="btn btn-primary py-2 px-3" href="">
                    <i className="bi bi-eye"></i>
                  </a>
                </div>
              </div>
            </div> */}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Product;
