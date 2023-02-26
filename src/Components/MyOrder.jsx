import React from "react";
import OrderBox from "../Container/OrderBox";

const MyOrder = () => {
  return (
    <>
      <div className="container-fluid">
        <table
          id="demo"
          className="table table-striped "
          style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Product</th>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <OrderBox />
            </tr>

            <tr>
              <OrderBox />
            </tr>

            <tr>
              <OrderBox />
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyOrder;
