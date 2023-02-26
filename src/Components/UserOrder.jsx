import React from "react";
import OrderItem from "../Container/OrderItem";

const UserOrder = () => {
  return (
    <>
      <div className="container  py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="table-responsive">
              <table className="table table-responsive-sm">
                <thead>
                  <tr>
                    <th scope="col" className="h5">
                      Shopping Bag
                    </th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <OrderItem />
                  </tr>
                  <tr>
                    <OrderItem />
                  </tr>
                </tbody>
              </table>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-block btn-lg "
              style={{ width: "100%" }}
            >
              <div className=" justify-content-between">
                <center>
                  <span>Checkout</span>
                  <span></span>
                </center>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserOrder;
