import React from "react";
import "../Assets/Styles/css/vendorProducts.css";
import AddProductModal from "../Layouts/AddProductModal";
const VendorProduct = () => {
  return (
    <>
      <div class="col-md-8 col-lg-6 col-xl-4 mt-5 addproduct">
        {/*  Button to Open the Modal  */}
        <button
          type="button"
          class="btn btn-primary text-light"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          Add Product
        </button>
      </div>
      <AddProductModal />
    </>
  );
};

export default VendorProduct;
