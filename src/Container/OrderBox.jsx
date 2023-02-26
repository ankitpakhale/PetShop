import React from "react";

const OrderBox = () => {
  return (
    <>
      <th className="m-5">123456</th>
      <td>
        <div className="" style={{ height: "100px", width: "100px" }}>
          <img
            height="100%"
            width="100%"
            src={require(`../Assets/Images/product-1.png`)}
          />
        </div>
      </td>
      <td>
        <div style={{ height: "auto", width: "400px" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          libero quia placeat sequi illum ut rerum blanditiis non odit, nihil a,
          dolores, similique nisi minus! In laboriosam soluta excepturi eveniet!
        </div>
      </td>
      <td>Product 1</td>
      <td>799</td>
      <td>1</td>
      <td>2011-04-25</td>
    </>
  );
};

export default OrderBox;
