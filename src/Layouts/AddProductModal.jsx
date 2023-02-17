import React from "react";
import "../Assets/Styles/css/vendorProducts.css";

const AddProductModal = () => {
  return (
    <>
      {/*  The Modal  */}
      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            {/*  Modal Header  */}
            <div class="modal-header">
              <div class="align-items-center justify-content-center justify-content-lg-start text-center p-2">
                <h2 style={{ fontFamily: "cursive" }}>Add Product</h2>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <form class="p-3">
              <div class="form-outline mb-4 mt-2">
                <label class="form-label" for="form3Example3">
                  Product Name
                </label>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Enter Product Name"
                />
              </div>
              <div class="form-outline mb-4 mt-2">
                <label class="form-label" for="form3Example3">
                  Product Price
                </label>
                <input
                  type="number"
                  class="form-control form-control-lg"
                  placeholder="Enter Product Price"
                />
              </div>
              <div class="form-outline mb-4 mt-2">
                <label class="form-label" for="form3Example3">
                  Product Description
                </label>
                <textarea
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Enter Product Description"
                ></textarea>
              </div>
              <div class="form-outline mb-4 mt-2">
                <label class="form-label" for="form3Example3">
                  Product Image
                </label>
                <input type="file" class="form-control form-control-lg" />
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  class="btn btn-success"
                  style={{ backgroundColor: "#7ab730", border: "0" }}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProductModal;
