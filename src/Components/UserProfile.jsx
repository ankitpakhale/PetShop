import React from "react";
import "../Assets/Styles/css/userprofile.css";
import UserProfileModel from "../Layouts/UserProfileModel";
const UserProfile = () => {
  return (
    <>
      <section style={{ backgroundColor: "#f4f5f7" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-10 mb-4 mb-lg-0">
              <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                <div className="row g-0">
                  <div
                    className="col-md-4 gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBbottomLeftRadius: ".5rem",
                    }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      className="img-fluid my-5"
                      style={{ width: "80px" }}
                    />
                    <h5>Username</h5>
                    <p>DOB:25/02/1998</p>
                  </div>

                  <div className="col-md-8 mt-2">
                    <button
                      type="button"
                      className="btn "
                      style={{ float: "right" }}
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                    >
                      <i className="fa fa-edit m-3 "> Edit</i>
                    </button>
                    {/*  The Modal> */}
                    <UserProfileModel />
                    <br />
                    <div className="card-body p-4">
                      {/*  <h6>Information6> --> */}
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Email</h6>
                          <p className="text-muted">info@example.com</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Phone</h6>
                          <p className="text-muted">123 456 789</p>
                        </div>
                      </div>
                      {/*  <h6>Projects6> --> */}
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Address</h6>
                          <p className="text-muted">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit.{" "}
                          </p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Gender</h6>
                          <p className="text-muted">Female</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
