import React from "react";

const OrderItem = () => {
  return (
    <>
      <th scope="row">
        <div className="d-flex align-items-center">
          <img
            src={require(`../Assets/Images/product-4.png`)}
            className="img-fluid rounded-3"
            style={{ width: "120px" }}
            alt="Book"
          />
          <div className="flex-column ms-4">
            <p className="mb-2">Thinking, Fast and Slow</p>
            <p className="mb-0">Daniel Kahneman</p>
          </div>
        </div>
      </th>
      <td className="align-middle">
        <div className="d-flex flex-row">
          <input
            id="form1"
            min="0"
            name="quantity"
            type="number"
            className="form-control form-control-sm"
            style={{ width: "50px" }}
            readonly
          />
        </div>
      </td>
      <td className="align-middle">
        <p className="mb-0" style={{ fontWeight: 500 }}>
          799.00
        </p>
      </td>
    </>
  );
};

export default OrderItem;
