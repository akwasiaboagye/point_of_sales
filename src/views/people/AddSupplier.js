import React, { useState } from 'react';

const AddSupplier = () => {

  const [supplierItems, setSupplierItems] = useState({
        supplier_name:"",
        supplier_email:"",
        company_name:"",
        supplier_phone:'',
        supplier_city:"",
        supplier_country:"",
        supplier_region:"",
        supplier_address:"",
        createdby:"admin",
        createdon:new Date(),
        modifiedby:"admin",
        modifiedon:new Date()
  });

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setSupplierItems((prevState) => ({ ...prevState, [name]: value }));
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
                    <h4 class="card-title">Add Supplier</h4>
                  </div>
                </div>
                <div class="card-body">
                  <form
                    onSubmit={submitHandler}
                    data-toggle="validator"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Name *</label>
                          <input
                            type="text"
                            name='supplier_name'
                            class="form-control"
                            placeholder="Enter Name"
                            required
                            value={supplierItems.supplier_name}
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
                            name='supplier_email'
                            class="form-control"
                            placeholder="Enter Email"
                            required
                            value={supplierItems.supplier_email}
                            onChange={handleChange}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Phone Number *</label>
                          <input
                            type="text"
                            name='supplier_phone'
                            class="form-control"
                            placeholder="Enter Phone Number"
                            required
                            value={supplierItems.supplier_phone}
                            onChange={handleChange}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Company Name *</label>
                          <input
                            type="text"
                            name='company_name'
                            class="form-control"
                            placeholder="Enter Company Name"
                            required
                            value={supplierItems.company_name}
                            onChange={handleChange}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Address</label>
                          <input
                            type="number"
                            name='supplier_address'
                            class="form-control"
                            placeholder="Enter Address"
                            required
                            value={supplierItems.supplier_address}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>City *</label>
                          <input
                            type="text"
                            name='supplier_city'
                            class="form-control"
                            placeholder="Enter City"
                            required
                            value={supplierItems.supplier_city}
                            onChange={handleChange}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Region *</label>
                          <input
                            type="text"
                            name='supplier_region'
                            class="form-control"
                            placeholder="Enter Region"
                            required
                            value={supplierItems.supplier_region}
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
                            name='supplier_country'
                            class="form-control"
                            placeholder="Enter Country"
                            required
                            value={supplierItems.supplier_country}
                            onChange={handleChange}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">
                      Add Supplier
                    </button>
                    <button type="reset" class="btn btn-danger">Reset</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddSupplier
