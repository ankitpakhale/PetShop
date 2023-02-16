import React from "react";

const VendorLogin = () => {
  return (
    <>
      <div class="mainbody mt-5">
        <div class="col-md-8 col-lg-6 col-xl-4 mt-5 signbox">
          <form>
            <div class="align-items-center justify-content-center justify-content-lg-start text-center ">
              <h1 class="mt-5" style={{ fontFamily: "cursive" }}>
                Vendor Login{" "}
              </h1>
            </div>
            {/* Email input */}
            <div class="form-outline mb-4 mt-5">
              <input
                type="email"
                id="form3Example3"
                class="form-control form-control-lg"
                placeholder="Enter Your E-mail"
              />
              <label class="form-label" for="form3Example3">
                E-mail{" "}
              </label>
            </div>

            {/* Password input */}
            <div class="form-outline mb-3">
              <input
                type="password"
                id="form3Example4"
                class="form-control form-control-lg"
                placeholder="Enter Password"
              />
              <label class="form-label" for="form3Example4">
                Password
              </label>
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button
                type="button"
                class="btn btn-success btn-lg "
                style={{
                  paddingLeft: "2.5rem",
                  paddingRight: "2.5rem",
                  backgroundColor: "#7AB730",
                  border: "0",
                }}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default VendorLogin;
