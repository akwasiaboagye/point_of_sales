import React, { useState } from 'react'

const AddReturns = () => {

  const [returnItems, setReturnItems] = useState({
    date:"",
    reference_no:"",
    biller:"",
    customer:"",
    order_tax:"",
    order_shipping:"",
    
  })

  return (
    <div>
      <div class="content-page">
        <div class="container-fluid add-form-list">
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header d-flex justify-content-between">
                  <div class="header-title">
                    <h4 class="card-title">Add Return</h4>
                  </div>
                </div>
                <div class="card-body">
                  <form action="page-list-returns.html" data-toggle="validator">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Date *</label>
                          <input type="text" class="form-control" />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Reference No *</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Reference No"
                            required
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Biller *</label>
                          <select
                            name="type"
                            class="form-control"
                            data-style="py-0"
                          >
                            <option>Test Biller</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Customer *</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Customer Name"
                            required
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Order Tax *</label>
                          <select
                            name="type"
                            class="form-control"
                            data-style="py-0"
                          >
                            <option>No Text</option>
                            <option>GST @5%</option>
                            <option>VAT @10%</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Order Discount</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Discount"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Shipping</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Shipping"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Attach Document</label>
                          <input
                            type="file"
                            class="form-control image-file"
                            name="pic"
                            accept="image/*"
                          />
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">
                      Add Returns
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

export default AddReturns
