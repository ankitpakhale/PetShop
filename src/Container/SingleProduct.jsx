import React from "react";

const SingleProduct = () => {
  return (
    <>
      <div
        className="container p-3"
      >
        <div className="row">
          <div className="col-lg-6 mt-1">
            <div
              className="card mb-3 "
              style={{
                borderRadius: "30px",
                paddingBottom: "40px",
                height: "100%",
              }}
            >
              <img
                style={{ borderRradius: "30px" }}
                className="card-img img-fluid p-5 mt-5"
                src={require(`../Assets/Images/product-1.png`)}
                alt="Card image cap"
                id="product-detail"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="col-lg-6 mt-1 ">
            <div className="card" style={{ borderRadius: "30px" }}>
              <div className="card-body">
                <h1 className="h2">Active Wear</h1>
                <p className="h3 py-2">799</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <h6>Brand:</h6>
                  </li>
                  <li className="list-inline-item">
                    <p className="text-muted">
                      <strong>Easy Wear</strong>
                    </p>
                  </li>
                </ul>

                <h6>Description:</h6>
                <blockquote>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod temp incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse. Donec condimentum elementum convallis.
                  Nunc sed orci a diam ultrices aliquet interdum quis nulla.
                </blockquote>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <h6>Avaliable Color :</h6>
                  </li>
                  <li className="list-inline-item">
                    <p className="text-muted">
                      <strong>White / Black</strong>
                    </p>
                  </li>
                </ul>

                <h6>Specification:</h6>
                <ul className="list-unstyled pb-3">
                  <li>Lorem ipsum dolor sit</li>
                  <li>Amet, consectetur</li>
                  <li>Adipiscing elit,set</li>
                  <li>Duis aute irure</li>
                  <li>Ut enim ad minim</li>
                  <li>Dolore magna aliqua</li>
                  <li>Excepteur sint</li>
                </ul>

                <form action="" method="GET">
                  <input
                    type="hidden"
                    name="product-title"
                    value="Activewear"
                  />

                  <div className="row pb-3">
                    <div className="col d-grid">
                      <button
                        type="submit"
                        className="btn btn-success btn-lg"
                        style={{ backgroundColor: "#7AB730", border: "0" }}
                        name="submit"
                        value="buy"
                      >
                        Buy
                      </button>
                    </div>
                    <div className="col d-grid">
                      <button
                        type="submit"
                        className="btn btn-success btn-lg"
                        style={{ backgroundColor: "#7AB730", border: "0" }}
                        name="submit"
                        value="addtocard"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
