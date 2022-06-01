import React, { useState } from "react";

const AddProducts = () => {
  const [productItems, setProductItems] = useState({
    type: "",
    product_name: "",
    brand_name: "",
    manufacturing_date: "",
    expiry_date: "",
    barcode: "",
    category: "",
    cost: "",
    price: "",
    tax_method: "",
    quantity: "",
    product_description: "",
    createby: "admin",
    createon: new Date(),
    modifiedby: "admin",
    modifiedon: new Date(),
  });

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setProductItems((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault()

    //postoptions code here//
  }

  return (
    <div>
      <div class="content-page">
        <div class="container-fluid add-form-list">
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header d-flex justify-content-between">
                  <div class="header-title">
                    <h4 class="card-title">Add Product</h4>
                  </div>
                </div>
                <div class="card-body">
                  <form  data-toggle="validator" onSubmit={submitHandler}>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="producttype">Product Type *</label>
                          <select
                            id="producttype"
                            name="type"
                            class="form-control"
                            data-style="py-0"
                            value={productItems.type}
                            onChange={handleChange}
                          >
                            <option value="1">select</option>
                            <option value="2">Standard</option>
                            <option value="3">Combo</option>
                            <option value="4">Digital</option>
                            <option value="5">Service</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="name">Name *</label>
                          <input
                            id="name"
                            name="product_name"
                            type="text"
                            class="form-control"
                            placeholder="Enter Name"
                            data-errors="Please Enter Name."
                            required
                            value={productItems.product}
                            onChange={handleChange}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Brand Name *</label>
                          <input
                            type="text"
                            name="brand_name"
                            class="form-control"
                            placeholder="Enter Brand"
                            data-errors="Please Enter Brand Name."
                            required
                            value={productItems.brand_name}
                            onChange={handleChange}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Manufacturing Date*</label>
                          <input
                            type="date"
                            name="manufacturing_date"
                            class="form-control"
                            placeholder="Enter Manufacturing Date"
                            data-errors="Please Enter Manufacturing Date."
                            required
                            value={productItems.manufacturing_date}
                            onChange={handleChange}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Expiry Date *</label>
                          <input
                            type="date"
                            name="expiry_date"
                            class="form-control"
                            placeholder="Enter Expiry Date"
                            data-errors="Please Enter Expiry Date."
                            required
                            value={productItems.expiry_date}
                            onChange={handleChange}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Barcode Symbology *</label>
                          <select
                            name="barcode"
                            class="form-control"
                            data-style="py-0"
                            value={productItems.barcode}
                            onChange={handleChange}
                          >
                            <option></option>
                            <option>CREM01</option>
                            <option>UM01</option>
                            <option>SEM01</option>
                            <option>COF01</option>
                            <option>FUN01</option>
                            <option>DIS01</option>
                            <option>NIS01</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Category *</label>
                          <select
                            name="category"
                            class="form-control"
                            data-style="py-0"
                            value={productItems.category}
                            onChange={handleChange}
                          >
                            <option></option>
                            <option>Beauty</option>
                            <option>Grocery</option>
                            <option>Food</option>
                            <option>Furniture</option>
                            <option>Shoes</option>
                            <option>Frames</option>
                            <option>Jewellery</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Cost *</label>
                          <input
                            type="number"
                            name="cost"
                            class="form-control"
                            placeholder="Enter Cost"
                            data-errors="Please Enter Cost."
                            required
                            value={productItems.cost}
                            onChange={handleChange}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Price *</label>
                          <input
                            type="number"
                            name="price"
                            class="form-control"
                            placeholder="Enter Price"
                            data-errors="Please Enter Price."
                            required
                            value={productItems.price}
                            onChange={handleChange}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Tax Method *</label>
                          <select
                            name="tax_method"
                            class="form-control"
                            data-style="py-0"
                            value={productItems.tax_method}
                            onChange={handleChange}
                          >
                            <option></option>
                            <option>Exclusive</option>
                            <option>Inclusive</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Quantity *</label>
                          <input
                            type="number"
                            name="quantity"
                            class="form-control"
                            placeholder="Enter Quantity"
                            required
                            value={productItems.quantity}
                            onChange={handleChange}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Image</label>
                          <input
                            type="file"
                            class="form-control image-file"
                            name="pic"
                            accept="image/*"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Description / Product Details</label>
                          <textarea
                            class="form-control"
                            name="product_description"
                            rows="4"
                            value={productItems.product_description}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">
                      Add Product
                    </button>
                    <button type="reset" class="btn btn-danger">
                      Reset
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
