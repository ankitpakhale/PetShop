import React from "react";
import { Link } from "react-router-dom";
import "../Assets/Styles/css/signup.css";
const UserSignup = () => {
  return (
    <>
      <div className="col-md-8 col-lg-6 col-xl-4 mt-3 signbox ">
        <form>
          <div className="align-items-center justify-content-center justify-content-lg-start text-center">
            <h1
              style={{
                fontFamily: "cursive",
                backgroundColor: "#7AB730",
                borderRadius: "30px",
                padding: "50px",
              }}
            >
              {" "}
              User SignUp{" "}
            </h1>
          </div>

          {/* username input  */}
          <div className="form-outline  mt-5">
            <label className="form-label" for="form3Example3">
              Username
            </label>
            <input
              type="text"
              id="#"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
            />
          </div>
          {/* Email input  */}
          <div className="form-outline  ">
            <label className="form-label" for="form3Example3">
              E-mail Address
            </label>
            <input
              type="email"
              id="#"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail"
            />
          </div>

          {/* number input  */}
          <div className="form-outline  ">
            <label className="form-label" for="form3Example3">
              {" "}
              Number
            </label>
            <input
              type="email"
              id="#"
              className="form-control form-control-lg"
              placeholder="Enter Your Number"
            />
          </div>

          {/* gender input  */}
          <div className="form-outline  mb-2">
            <input type="radio" name="gender" value="male" /> Male
            <input type="radio" name="gender" value="female" /> Female
            <input type="radio" name="gender" value="others" /> Others
          </div>
          {/* DOB input */}
          <div className="form-outline ">
            <label className="form-label" for="form3Example4">
              Date Of Birth
            </label>
            <input
              type="date"
              id="form3Example4"
              className="form-control form-control-lg"
            />
          </div>

          {/* address input */}
          <div className="form-outline ">
            <label className="form-label" for="form3Example4">
              Address
            </label>
            <textarea
              type="text"
              id="form3Example4"
              className="form-control form-control-lg"
              placeholder="Enter Your Address"
            ></textarea>
          </div>

          {/* Password input  */}
          <div className="form-outline ">
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

          <div className="text-center text-lg-start mt-2 pt-2 mb-5">
            <button
              type="button"
              className="btn btn-info  btn-lg"
              style={{
                paddingLeft: "2.5rem",
                paddingRight: "2.5rem",
                backgroundColor: "#7AB730",
                border: "0",
              }}
            >
              Sign Up
            </button>
            <p className="small fw-bold mt-2 pt-1 mb-0">
              Already have an account?
              <br />{" "}
              <Link className="link-danger text-dark" to={"/user/login"}>
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserSignup;
