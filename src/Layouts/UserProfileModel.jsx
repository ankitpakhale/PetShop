import React from "react";
import "../Assets/Styles/css/userprofile.css";

const UserProfileModel = () => {
  return (
    <>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" style={{ fontFamily: "cursive" }}>
                Update Profile
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                {/*  username input> */}
                <div className="form-outline">
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
                {/*  Email input> */}
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

                {/*  number input> */}
                <div className="form-outline  ">
                  <label className="form-label" for="form3Example3">
                    {" "}
                    Number
                  </label>
                  <input
                    type="email"
                    id="#"
                    className="form-control form-control-lg"
                    placeholder="Enter Your Contact Number"
                  />
                </div>

                {/*  gender input> */}
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
                <div className="text-center text-lg-start mt-2 pt-2 mb-5">
                  <button
                    type="button"
                    className="btn btn-info  btn-lg"
                    style={{
                      color: "#fff",
                      paddingLeft: "2.5rem",
                      paddingRight: "2.5rem",
                      backgroundColor: "#7AB730",
                      border: "0",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileModel;
