import React from 'react'

const AddPurchase = () => {
  return (
    <div>
      <div class="content-page">
        <div class="container-fluid add-form-list">
          <div class="row">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-header d-flex justify-content-between">
                  <div class="header-title">
                    <h4 class="card-title">Add Purchase</h4>
                  </div>
                </div>
                <div class="card-body">
                  <form
                    action="page-list-purchase.html"
                    data-toggle="validator"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="dob">Date *</label>
                          <input
                            type="date"
                            class="form-control"
                            id="dob"
                            name="dob"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Reference No *</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Reference No"
                            required
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                      <div class="form-group">
                          <label>Supplier *</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Enter Supplier Name"
                            required
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>  
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Purchase Status</label>
                          <select
                            name="type"
                            class="form-control"
                            data-style="py-0"
                          >
                            <option>Pending</option>
                            <option>Not received yet</option>
                            <option>Received</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Order Tax</label>
                          <select
                            name="type"
                            class="form-control"
                            data-style="py-0"
                          >
                            <option>No Text</option>
                            <option>GST @5%</option>
                            <option>VAT @20%</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Discount</label>
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Discount"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Total</label>
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Total Amount"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Paid</label>
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Amount Paid"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Balance</label>
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Due Balance"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Payment Status</label>
                          <select
                            name="type"
                            class="form-control"
                            data-style="py-0"
                          >
                            <option></option>
                            <option>Pending</option>
                            <option>Not payed yet</option>
                            <option>Payed</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">
                      Add Purchase
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

export default AddPurchase
