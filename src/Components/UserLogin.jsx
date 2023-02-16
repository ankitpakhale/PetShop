import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Styles/css/login.css";
import "../Assets/Styles/css/style.css";

const UserLogin = () => {
  return (
    <>
      <div className="col-md-8 col-lg-6 col-xl-4 mt-5 signbox  ">
        <form>
          <div className="align-items-center justify-content-center justify-content-lg-start text-center mt-5">
            <h1 style={{ fontFamily: "cursive" }}>User Login </h1>
          </div>
          {/* Email input */}
          <div className="form-outline mb-4 mt-5">
            <label className="form-label" for="form3Example3">
              E-mail Address
            </label>
            <input
              type="email"
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="abc@gmail.com"
            />
          </div>

          {/* Password input */}
          <div className="form-outline mb-3">
            <label className="form-label" for="form3Example4">
              Password
            </label>
            <input
              type="password"
              id="form3Example4"
              className="form-control form-control-lg"
              placeholder="Enter Password"
            />
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button
              type="button"
              className="btn btn-success btn-lg "
              style={{
                paddingLeft: "2.5rem",
                paddingRight: "2.5rem",
                backgroundColor: "#7AB730",
                border: "0",
              }}
            >
              Sign In
            </button>
            <p className="small fw-bold mt-2 pt-1 mb-0">
              Don't have an account?
              <br />
              <Link className="link-danger text-dark" to={"/user/signup"}>
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserLogin;
