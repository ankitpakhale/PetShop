import React from "react";
import "../Assets/Styles/css/userprofile.css";
const UserProfile = () => {
  return (
    <>
      <section style={{ backgroundColor: "#f4f5f7" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-10 mb-4 mb-lg-0">
              <div class="card mb-3" style={{ borderRadius: ".5rem" }}>
                <div class="row g-0">
                  <div
                    class="col-md-4 gradient-custom text-center text-white"
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderBbottomLeftRadius: ".5rem",
                    }}
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      class="img-fluid my-5"
                      style={{ width: "80px" }}
                    />
                    <h5>Username</h5>
                    <p>DOB:25/02/1998</p>
                  </div>

                  <div class="col-md-8 mt-2">
                    <button
                      type="button"
                      class="btn "
                      style={{ float: "right" }}
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                    >
                      <i class="fa fa-edit m-3 "> Edit</i>
                    </button>
                    {/*  The Modal> */}
                    <div class="modal" id="myModal">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h4
                              class="modal-title"
                              style={{ fontFamily: "cursive" }}
                            >
                              Update Profile
                            </h4>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <form>
                              {/*  username input> */}
                              <div class="form-outline">
                                <label class="form-label" for="form3Example3">
                                  Username
                                </label>
                                <input
                                  type="text"
                                  id="#"
                                  class="form-control form-control-lg"
                                  placeholder="Enter Your Name"
                                />
                              </div>
                              {/*  Email input> */}
                              <div class="form-outline  ">
                                <label class="form-label" for="form3Example3">
                                  E-mail Address
                                </label>
                                <input
                                  type="email"
                                  id="#"
                                  class="form-control form-control-lg"
                                  placeholder="Enter Your E-mail"
                                />
                              </div>

                              {/*  number input> */}
                              <div class="form-outline  ">
                                <label class="form-label" for="form3Example3">
                                  {" "}
                                  Number
                                </label>
                                <input
                                  type="email"
                                  id="#"
                                  class="form-control form-control-lg"
                                  placeholder="Enter Your Contact Number"
                                />
                              </div>

                              {/*  gender input> */}
                              <div class="form-outline  mb-2">
                                <input
                                  type="radio"
                                  name="gender"
                                  value="male"
                                />{" "}
                                Male
                                <input
                                  type="radio"
                                  name="gender"
                                  value="female"
                                />{" "}
                                Female
                                <input
                                  type="radio"
                                  name="gender"
                                  value="others"
                                />{" "}
                                Others
                              </div>
                              {/* DOB input */}
                              <div class="form-outline ">
                                <label class="form-label" for="form3Example4">
                                  Date Of Birth
                                </label>
                                <input
                                  type="date"
                                  id="form3Example4"
                                  class="form-control form-control-lg"
                                />
                              </div>

                              {/* address input */}
                              <div class="form-outline ">
                                <label class="form-label" for="form3Example4">
                                  Address
                                </label>
                                <textarea
                                  type="text"
                                  id="form3Example4"
                                  class="form-control form-control-lg"
                                  placeholder="Enter Your Address"
                                ></textarea>
                              </div>
                              <div class="text-center text-lg-start mt-2 pt-2 mb-5">
                                <button
                                  type="button"
                                  class="btn btn-info  btn-lg"
                                  style={{
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
                    <br />
                    <div class="card-body p-4">
                      {/*  <h6>Information6> --> */}
                      <hr class="mt-0 mb-4" />
                      <div class="row pt-1">
                        <div class="col-6 mb-3">
                          <h6>Email</h6>
                          <p class="text-muted">info@example.com</p>
                        </div>
                        <div class="col-6 mb-3">
                          <h6>Phone</h6>
                          <p class="text-muted">123 456 789</p>
                        </div>
                      </div>
                      {/*  <h6>Projects6> --> */}
                      <hr class="mt-0 mb-4" />
                      <div class="row pt-1">
                        <div class="col-6 mb-3">
                          <h6>Address</h6>
                          <p class="text-muted">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit.{" "}
                          </p>
                        </div>
                        <div class="col-6 mb-3">
                          <h6>Gender</h6>
                          <p class="text-muted">Female</p>
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
