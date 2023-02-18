import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isUser, setIsUser] = useState(false);
  const [isLoginUrl, setIsLoginUrl] = useState(false);

  const location = useLocation();
  useEffect(() => {
    const url = location.pathname.split("/").at(-1);
    if (url === "user-login" || url === "vendor-login") {
      setIsLoginUrl(true);
    }
    if (url === "user-login") {
      setIsUser(true);
    }
    return () => {
      setIsUser(false);
      setIsLoginUrl(false);
    };
  }, [location]);

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
            <Link className="nav-item nav-link" to={"/"}>
              Home
            </Link>
            <Link className="nav-item nav-link" to={"/product"}>
              Product
            </Link>
            <Link className="nav-item nav-link" to={"/service"}>
              Service
            </Link>

            <Link className="nav-item nav-link" to={"/about"}>
              About
            </Link>

            <div className="nav-item dropdown">
              <div class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Login
              </div>
              <div className="dropdown-menu m-0 text-center">
                <Link className="dropdown-item" to={"/user-profile"}>
                  Profile
                </Link>
                {isLoginUrl ? (
                  isUser ? (
                    <Link className="dropdown-item" to={"/vendor-login"}>
                      VENDOR LOGIN
                    </Link>
                  ) : (
                    <Link className="dropdown-item" to={"/user-login"}>
                      USER LOGIN
                    </Link>
                  )
                ) : (
                  <>
                    <Link className="dropdown-item" to={"/vendor-login"}>
                      VENDOR LOGIN
                    </Link>
                    <Link className="dropdown-item" to={"/user-login"}>
                      USER LOGIN
                    </Link>
                  </>
                )}
              </div>
            </div>
            <Link
              className="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5"
              to={"/contact"}
            >
              Contact <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
