import React, { useState } from 'react'

const AddSales = () => {

  const [salesItems, setSalesItems] = useState({
    product_name:"",
    date:new Date(),
    referance_no:"",
    biller:"",
    customer:"",
    order_tax:"",
    order_discount:"",
    sales_status:"",
    payment_status:"",
    createdby:"admin",
    createdon:new Date(),
    modifiedby:"admin",
    modifiedon:new Date()
  })

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setSalesItems((prevState) => ({ ...prevState, [name]: value }));
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
                    <h4 class="card-title">Add Sale</h4>
                  </div>
                </div>
                <div class="card-body">
                  <form onSubmit={submitHandler} data-toggle="validator">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Product Name *</label>
                          <input
                            type="text"
                            name='product_name'
                            class="form-control"
                            placeholder="Enter Product Name"
                            value={salesItems.product_name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Date *</label>
                          <input
                            type="date"
                            class="form-control"
                            placeholder="Date"
                            required
                            readOnly
                            value={salesItems.date}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                        
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Reference No *</label>
                          <input
                            type="number"
                            name='referance_no'
                            class="form-control"
                            placeholder="Enter Reference No"
                            required
                            value={salesItems.referance_no}
                            onChange={handleChange}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Biller *</label>
                          <input
                            type="text"
                            name='biller'
                            class="form-control"
                            placeholder="Sales Person Name"
                            required
                            value={salesItems.biller}
                            onChange={handleChange}
                            readOnly
                           />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Customer *</label>
                          <input
                            type="text"
                            name='customer'
                            class="form-control"
                            placeholder="Enter Customer Name"
                            required
                            value={salesItems.customer}
                            onChange={handleChange}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Order Tax *</label>
                          <select
                            type="type"
                            name='order_tax'
                            class="form-control"
                            placeholder="Enter Customer Name"
                            required
                            value={salesItems.order_tax}
                            onChange={handleChange}
                           >
                             <option value="1"></option>
                             <option value="2">No Text</option>
                            <option value="3">GST @5%</option>
                            <option value="4">VAT @10%</option>
                           </select>
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Order Discount</label>
                          <input
                            type="text"
                            name='order_discount'
                            class="form-control"
                            placeholder="Discount"
                            value={salesItems.order_discount}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Sale Status *</label>
                          <select
                            type="text"
                            name='sales_status'
                            class="form-control"
                            placeholder="Enter Customer Name"
                            required
                            value={salesItems.sales_status}
                            onChange={handleChange}
                           >
                             <option></option>
                             <option>Pending</option>
                            <option>Completed</option>
                           </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Payment Status *</label>
                          <select
                            type="text"
                            name='payment_status'
                            class="form-control"
                            placeholder="Enter Customer Name"
                            required
                            value={salesItems.payment_status}
                            onChange={handleChange}
                           >
                             <option></option>
                             <option>Pending</option>
                             <option>Due</option>
                             <option>Paid</option>
                           </select>
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">
                      Add Sale
                    </button>
                    <button type="button" class="btn btn-success">Print</button>
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

export default AddSales
