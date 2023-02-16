import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/*  Footer Start  */}
      <div className="container-fluid bg-light mt-5 py-5">
        <div className="container pt-5">
          <div className="row g-5">
            <div className="col-lg-5 col-md-4">
              <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">
                Get In Touch
              </h5>
              <p className="mb-4">
                No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita
                et et dolor sed dolor
              </p>
              <p className="mb-2">
                <i className="bi bi-geo-alt text-primary me-2"></i>123 Street,
                New York, USA
              </p>
              <p className="mb-2">
                <i className="bi bi-envelope-open text-primary me-2"></i>
                info@example.com
              </p>
              <p className="mb-0">
                <i className="bi bi-telephone text-primary me-2"></i>+012 345
                67890
              </p>
            </div>
            <div className="col-lg-4 col-md-4">
              <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">
                Quick Links
              </h5>
              <div className="d-flex flex-column justify-content-start">
                <Link className="text-body mb-2" to={"/"}>
                  <i className="bi bi-arrow-right text-primary me-2"></i>Home
                </Link>
                <Link className="text-body mb-2" to={"/about"}>
                  <i className="bi bi-arrow-right text-primary me-2"></i>About
                  Us
                </Link>
                <Link className="text-body mb-2" to={"/service"}>
                  <i className="bi bi-arrow-right text-primary me-2"></i>Our
                  Services
                </Link>
                <Link className="text-body mb-2" to={"/contact"}>
                  <i className="bi bi-arrow-right text-primary me-2"></i>Contact
                  Us
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">
                Follow Us
              </h5>
              <div className="d-flex">
                <a className="btn btn-outline-primary btn-square me-2" href="#">
                  <i className="bi bi-twitter"></i>
                </a>
                <a className="btn btn-outline-primary btn-square me-2" href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a className="btn btn-outline-primary btn-square me-2" href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a className="btn btn-outline-primary btn-square" href="#">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-12 text-center text-body">
              <a className="text-body" href="">
                Terms & Conditions
              </a>
              <span className="mx-1">|</span>
              <a className="text-body" href="">
                Privacy Policy
              </a>
              <span className="mx-1">|</span>
              <a className="text-body" href="">
                Customer Support
              </a>
              <span className="mx-1">|</span>
              <a className="text-body" href="">
                Payments
              </a>
              <span className="mx-1">|</span>
              <a className="text-body" href="">
                Help
              </a>
              <span className="mx-1">|</span>
              <a className="text-body" href="">
                FAQs
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*  Footer End  */}

      {/*  Back to Top  */}
      <Link className="btn btn-primary py-3 fs-4 back-to-top" to={""}>
        <i className="bi bi-arrow-up"></i>
      </Link>
    </>
  );
};

export default Footer;
