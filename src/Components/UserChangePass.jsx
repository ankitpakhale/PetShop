import React from "react";

const UserChangePass = () => {
  return (
    <>
      <div className="mainbody mt-5">
        <div className="col-md-8 col-lg-6 col-xl-4 mt-5 signbox">
          <form>
            <div className="align-items-center justify-content-center justify-content-lg-start text-center ">
              <h1 className="mt-5" style={{ fontFamily: "cursive" }}>
                CHANGE PASSWORD{" "}
              </h1>
            </div>
            {/* old password input */}
            <div className="form-outline mb-4 mt-5">
              <label className="form-label" for="form3Example3">
                Old Password{" "}
              </label>
              <input
                type="password"
                id="form3Example3"
                className="form-control form-control-lg"
                placeholder="Enter Old Password"
              />
            </div>

            {/* new Password input */}
            <div className="form-outline mb-3">
              <label className="form-label" for="form3Example4">
                New Password
              </label>
              <input
                type="password"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Enter New Password"
              />
            </div>

            {/* confirm Password input */}
            <div className="form-outline mb-3">
              <label className="form-label" for="form3Example4">
                Confirm Password
              </label>
              <input
                type="password"
                id="form3Example4"
                className="form-control form-control-lg"
                placeholder="Enter Confirm Password"
              />
            </div>
            {/* change passwrd button */}
            <div className="text-center text-lg-start mt-4 pt-2 btn-block ">
              <button
                type="button"
                className="btn btn-success btn-lg"
                style={{
                  width: "100%",
                  paddingLeft: "2.5rem",
                  paddingRight: "2.5rem",
                  backgroundColor: "#7AB730",
                  border: "0",
                }}
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserChangePass;
