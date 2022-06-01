import React, { useState } from 'react'

const AddCategories = () => {

  const [categoryItems, setCategoryItems] = useState({
    product_name:'',
    product_category:"",
    product_code:"",
    product_imgae:"",
    createdby:"admin",
    createdon:new Date(),
    modifiedby:"admin",
    mmodifiedon:new Date()
  })

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setCategoryItems((prevState) => ({ ...prevState, [name]: value }));
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
                    <h4 class="card-title">Add category</h4>
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
                          <label>Image</label>
                          <input
                            type="file"
                            class="form-control image-file"
                            name="pic"
                            accept="image/*"
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Product Name *</label>
                          <input
                            type="text"
                            name='product_name'
                            class="form-control"
                            placeholder="Enter Product Name"
                            required
                            value={categoryItems.product_name}
                            onChange={handleChange}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>Category *</label>
                          <select
                            name="product_category"
                            class=" form-control"
                            data-style="py-0"
                            value={categoryItems.product_category}
                            onChange={handleChange}
                          >
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
                          <label>Code *</label>
                          <input
                            type="text"
                            name='product_code'
                            class="form-control"
                            placeholder="Enter Code"
                            required
                            value={categoryItems.product_code}
                            onChange={handleChange}
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">
                      Add category
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

export default AddCategories
