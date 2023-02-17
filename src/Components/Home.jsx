import React from "react";
import { Link } from "react-router-dom";

import Carousel from "react-elastic-carousel";

const Home = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <>
      {/*  Hero Start  */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1
                className="display-1 text-uppercase text-dark mb-lg-4"
                style={{ fontFamily: "cursive" }}
              >
                Pet Shop
              </h1>
              <h1 className="text-uppercase text-white mb-lg-4">
                Make Your Pets Happy
              </h1>
              <p className="fs-4 text-white mb-lg-4">
                Dolore tempor clita lorem rebum kasd eirmod dolore diam eos
                kasd. Kasd clita ea justo est sed kasd erat clita sea
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  Hero End  */}

      {/*  About Start  */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row gx-5">
            <div
              className="col-lg-5 mb-5 mb-lg-0"
              style={{ minHeight: "500px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded"
                  src={require("../Assets/Images/about.jpg")}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="border-start border-5 border-primary ps-5 mb-5">
                <h6 className="text-primary text-uppercase">About Us</h6>
                <h1 className="display-5 text-uppercase mb-0">
                  We Keep Your Pets Happy All Time
                </h1>
              </div>
              <h4 className="text-body mb-4">
                Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet
                no labore lorem sit clita duo justo magna dolore
              </h4>
              <div className="bg-light p-4">
                <ul
                  className="nav nav-pills justify-content-between mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item w-50" role="presentation">
                    <button
                      className="nav-link text-uppercase w-100 active"
                      id="pills-1-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-1"
                      type="button"
                      role="tab"
                      aria-controls="pills-1"
                      aria-selected="true"
                    >
                      Our Mission
                    </button>
                  </li>
                  <li className="nav-item w-50" role="presentation">
                    <button
                      className="nav-link text-uppercase w-100"
                      id="pills-2-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-2"
                      type="button"
                      role="tab"
                      aria-controls="pills-2"
                      aria-selected="false"
                    >
                      Our Vission
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-1"
                    role="tabpanel"
                    aria-labelledby="pills-1-tab"
                  >
                    <p className="mb-0">
                      Tempor erat elitr at rebum at at clita aliquyam
                      consetetur. Diam dolor diam ipsum et, tempor voluptua sit
                      consetetur sit. Aliquyam diam amet diam et eos sadipscing
                      labore. Clita erat ipsum et lorem et sit, sed stet no
                      labore lorem sit. Sanctus clita duo justo et tempor
                      consetetur takimata eirmod, dolores takimata consetetur
                      invidunt magna dolores aliquyam dolores dolore. Amet erat
                      amet et magna
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-2"
                    role="tabpanel"
                    aria-labelledby="pills-2-tab"
                  >
                    <p className="mb-0">
                      Tempor erat elitr at rebum at at clita aliquyam
                      consetetur. Diam dolor diam ipsum et, tempor voluptua sit
                      consetetur sit. Aliquyam diam amet diam et eos sadipscing
                      labore. Clita erat ipsum et lorem et sit, sed stet no
                      labore lorem sit. Sanctus clita duo justo et tempor
                      consetetur takimata eirmod, dolores takimata consetetur
                      invidunt magna dolores aliquyam dolores dolore. Amet erat
                      amet et magna
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  About End  */}

      {/*  Services Start  */}
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
            <div className="col-md-6">
              <div className="service-item bg-light d-flex p-4">
                <i className="flaticon-house display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Pet Boarding</h5>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <a className="text-primary text-uppercase" href="">
                    Read More<i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item bg-light d-flex p-4">
                <i className="flaticon-food display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Pet Feeding</h5>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <a className="text-primary text-uppercase" href="">
                    Read More<i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item bg-light d-flex p-4">
                <i className="flaticon-grooming display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Pet Grooming</h5>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <a className="text-primary text-uppercase" href="">
                    Read More<i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item bg-light d-flex p-4">
                <i className="flaticon-cat display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Pet Training</h5>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <a className="text-primary text-uppercase" href="">
                    Read More<i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item bg-light d-flex p-4">
                <i className="flaticon-dog display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Pet Exercise</h5>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <a className="text-primary text-uppercase" href="">
                    Read More<i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item bg-light d-flex p-4">
                <i className="flaticon-vaccine display-1 text-primary me-4"></i>
                <div>
                  <h5 className="text-uppercase mb-3">Pet Treatment</h5>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <a className="text-primary text-uppercase" href="">
                    Read More<i className="bi bi-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Services End  */}

      {/*  Products Start  */}
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
            <div className="pb-5">
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
            <div className="pb-5">
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
            <div className="pb-5">
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
            <div className="pb-5">
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
            <div className="pb-5">
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
          </Carousel>
        </div>
      </div>
      {/*  Products End  */}

      {/*  Offer Start  */}
      <div className="container-fluid bg-offer my-5 py-5">
        <div className="container py-5">
          <div className="row gx-5 justify-content-start">
            <div className="col-lg-7">
              <div className="border-start border-5 border-dark ps-5 mb-5">
                <h6 className="text-dark text-uppercase">Special Offer</h6>
                <h1 className="display-5 text-uppercase text-white mb-0">
                  Save 50% on all items your first order
                </h1>
              </div>
              <p className="text-white mb-4">
                Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et
                dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero
                eos vero ea et dolore eirmod et. Dolores diam duo lorem. Elitr
                ut dolores magna sit. Sea dolore sed et.
              </p>

              <Link to={"/product"}>
                <div className="btn btn-light py-md-3 px-md-5 me-3">
                  Shop Now
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*  Offer End  */}

      {/*  Testimonial Start  */}
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
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-4">
                    <img
                      className="img-fluid mx-auto"
                      src={require("../Assets/Images/testimonial-1.jpg")}
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
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat. Erat dolor
                    rebum sit ipsum.
                  </p>
                  <hr className="w-25 mx-auto" />
                  <h5 className="text-uppercase">Client Name</h5>
                  <span>Profession</span>
                </div>
                <div className="testimonial-item text-center">
                  <div className="position-relative mb-4">
                    <img
                      className="img-fluid mx-auto"
                      src={require("../Assets/Images/testimonial-2.jpg")}
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
                    Dolores sed duo clita tempor justo dolor et stet lorem kasd
                    labore dolore lorem ipsum. At lorem lorem magna ut et,
                    nonumy et labore et tempor diam tempor erat. Erat dolor
                    rebum sit ipsum.
                  </p>
                  <hr className="w-25 mx-auto" />
                  <h5 className="text-uppercase">Client Name</h5>
                  <span>Profession</span>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/*  Testimonial End  */}
    </>
  );
};

export default Home;
