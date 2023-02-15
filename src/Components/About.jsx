import React from "react";

const About = () => {
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
        <a href="index.html" className="navbar-brand ms-lg-5">
          <h1 className="m-0 text-uppercase text-dark">
            <i className="bi bi-shop fs-1 text-primary me-3"></i>
            Pet Shop
          </h1>
        </a>
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
            <a href="index.html" className="nav-item nav-link ">
              Home
            </a>
            <a href="product.html" className="nav-item nav-link">
              Product
            </a>
            <a href="service.html" className="nav-item nav-link">
              Service
            </a>
            <a href="about.html" className="nav-item nav-link active">
              About
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Login
              </a>
              <div className="dropdown-menu m-0 text-center">
                <a href="userlogin.html" className="dropdown-item">
                  USER LOGIN
                </a>
                <a href="vendorlogin.html" className="dropdown-item">
                  VENDOR LOGIN
                </a>
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
                  src="../Assets/Images/about.jpg"
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
              <a
                href="product.html"
                className="btn btn-light py-md-3 px-md-5 me-3"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*  Offer End  */}

      {/*  Team Start  */}
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: "600px" }}
          >
            <h6 className="text-primary text-uppercase">Team Members</h6>
            <h1 className="display-5 text-uppercase mb-0">
              Qualified Pets Care Professionals
            </h1>
          </div>
          <div
            className="owl-carousel team-carousel position-relative"
            style={{ paddingRight: "25px" }}
          >
            <div className="team-item">
              <div className="position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="../Assets/Images/team-1.jpg"
                  alt=""
                />
                <div className="team-overlay">
                  <div className="d-flex align-items-center justify-content-start">
                    <a className="btn btn-light btn-square mx-1" href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a className="btn btn-light btn-square mx-1" href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a className="btn btn-light btn-square mx-1" href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-light text-center p-4">
                <h5 className="text-uppercase">Full Name</h5>
                <p className="m-0">Designation</p>
              </div>
            </div>
            <div className="team-item">
              <div className="position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="../Assets/Images/team-2.jpg"
                  alt=""
                />
                <div className="team-overlay">
                  <div className="d-flex align-items-center justify-content-start">
                    <a className="btn btn-light btn-square mx-1" href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a className="btn btn-light btn-square mx-1" href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a className="btn btn-light btn-square mx-1" href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-light text-center p-4">
                <h5 className="text-uppercase">Full Name</h5>
                <p className="m-0">Designation</p>
              </div>
            </div>
            <div className="team-item">
              <div className="position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="../Assets/Images/team-3.jpg"
                  alt=""
                />
                <div className="team-overlay">
                  <div className="d-flex align-items-center justify-content-start">
                    <a className="btn btn-light btn-square mx-1" href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a className="btn btn-light btn-square mx-1" href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a className="btn btn-light btn-square mx-1" href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-light text-center p-4">
                <h5 className="text-uppercase">Full Name</h5>
                <p className="m-0">Designation</p>
              </div>
            </div>
            <div className="team-item">
              <div className="position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="../Assets/Images/team-4.jpg"
                  alt=""
                />
                <div className="team-overlay">
                  <div className="d-flex align-items-center justify-content-start">
                    <a className="btn btn-light btn-square mx-1" href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a className="btn btn-light btn-square mx-1" href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a className="btn btn-light btn-square mx-1" href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-light text-center p-4">
                <h5 className="text-uppercase">Full Name</h5>
                <p className="m-0">Designation</p>
              </div>
            </div>
            <div className="team-item">
              <div className="position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="../Assets/Images/team-5.jpg"
                  alt=""
                />
                <div className="team-overlay">
                  <div className="d-flex align-items-center justify-content-start">
                    <a className="btn btn-light btn-square mx-1" href="#">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a className="btn btn-light btn-square mx-1" href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a className="btn btn-light btn-square mx-1" href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-light text-center p-4">
                <h5 className="text-uppercase">Full Name</h5>
                <p className="m-0">Designation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Team End  */}

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
                <a className="text-body mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Home
                </a>
                <a className="text-body mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary me-2"></i>About
                  Us
                </a>
                <a className="text-body mb-2" href="#">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Our
                  Services
                </a>
                <a className="text-body" href="#">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Contact
                  Us
                </a>
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
      <a href="#" className="btn btn-primary py-3 fs-4 back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
};

export default About;
