import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/*  Topbar Start  */}
      <div className="container-fluid border-bottom d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-4 text-center py-2">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Our Office</h6>
                <span>123 Street, New York, USA</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center border-start border-end py-2">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Email Us</h6>
                <span>info@example.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center py-2">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Call Us</h6>
                <span>+012 345 6789</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Topbar End  */}

      {/*  Navbar Start  */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <Link to={"/"}>
          <div className="navbar-brand ms-lg-5">
            <h1 className="m-0 text-uppercase text-dark">
              <i className="bi bi-shop fs-1 text-primary me-3"></i>
              Pet Shop
            </h1>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to={"/"}>
              <div className="nav-item nav-link">Home</div>
            </Link>
            <Link to={"/product"}>
              <div className="nav-item nav-link">Product</div>
            </Link>
            <Link to={"/service"}>
              <div className="nav-item nav-link">Service</div>
            </Link>

            <Link to={"/about"}>
              <div className="nav-item nav-link">About</div>
            </Link>

            <div className="nav-item dropdown">
              <div class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Login
              </div>

              <div className="dropdown-menu m-0 text-center">
                <Link to={"/user/login"}>
                  <div className="dropdown-item">USER LOGIN</div>
                </Link>
                <Link to={"/vendor/login"}>
                  <div className="dropdown-item">VENDOR LOGIN</div>
                </Link>
              </div>
            </div>
            <a
              href="contact.html"
              className="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5"
            >
              Contact <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
