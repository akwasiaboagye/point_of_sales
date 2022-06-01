import React, { useState } from "react";

const AddCustomers = () => {
  const [customerItems, setCustomerItems] = useState({
    customer_name: "",
    customer_email: "",
    customer_number: "",
    customer_country: "",
    customer_address: "",
    customer_city: "",
    customer_group: "",
    customer_state:"",
    createdby: "admin",
    createdon: new Date(),
    modifiedby: "admin",
    modifiedon: new Date(),
  });

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setCustomerItems((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    //postoptions code here//
  };

  return (
    <div>
      <div class="content-page">
        <div class="container-fluid add-form-list">
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header d-flex justify-content-between">
                  <div class="header-title">
                    <h4 class="card-title">Add Customer</h4>
                  </div>
                </div>
                <div class="card-body">
                  <form
                    action="page-list-customers.html"
                    data-toggle="validator"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Name *</label>
                          <input
                            type="text"
                            name="customer_name"
                            class="form-control"
                            placeholder="Enter Name"
                            required
                            value={customerItems.customer_name}
                            onChange={handleChange}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Email *</label>
                          <input
                            type="text"
                            name="customer_email"
                            class="form-control"
                            placeholder="Enter Email"
                            required
                            value={customerItems.customer_email}
                            onChange={handleChange}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Phone Number *</label>
                          <input
                            type="number"
                            name="customer_number"
                            class="form-control"
                            placeholder="Enter Phone Number"
                            required
                            value={customerItems.customer_number}
                            onChange={handleChange}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Country *</label>
                          <input
                            type="text"
                            name="customer_country"
                            class="form-control"
                            placeholder="Enter Country"
                            required
                            value={customerItems.customer_country}
                            onChange={handleChange}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Address</label>
                          <input
                            type="text"
                            name="customer_address"
                            class="form-control"
                            placeholder="Enter Address"
                            required
                            value={customerItems.customer_address}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>City *</label>
                          <input
                            type="text"
                            name="customer_city"
                            class="form-control"
                            placeholder="Enter City"
                            required
                            value={customerItems.customer_city}
                            onChange={handleChange}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>State *</label>
                          <input
                            type="text"
                            name="customer_state"
                            class="form-control"
                            placeholder="Enter State"
                            required
                            value={customerItems.customer_state}
                            onChange={handleChange}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Customer Group</label>
                          <input
                            type="text"
                            name="customer_group"
                            class="form-control"
                            value={customerItems.customer_group}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">
                      Add Customer
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

export default AddCustomers;
