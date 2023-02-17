import React from "react";
import { Link } from "react-router-dom";

import About from "./About";
import Service from "./Service";
import Product from "./Product";
import Offer from "./Offer";
import Testimonial from "./Testimonial";

const Home = () => {

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
      {/* <About /> */}
      {/*  About End  */}

      {/*  Services Start  */}
      <Service />
      {/*  Services End  */}

      {/*  Products Start  */}
      {/* <Product /> */}
      {/*  Products End  */}

      {/*  Offer Start  */}
      <Offer />
      {/*  Offer End  */}

      {/*  Testimonial Start  */}
      <Testimonial />
      {/*  Testimonial End  */}
    </>
  );
};

export default Home;
