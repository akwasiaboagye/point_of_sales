import React, { useState } from 'react';

const AddUsers = () => {

  const [userItems, setUserItems] = useState({
    user_role: "",
    firstname:"",
    middlename:"",
    lastname:"",
    address:"",
    country:"",
    mobile:"",
    contact:"",
    email:"",
    town:"",
    pincode:"",
    username:"",
    password:"",
    repeatpassword:"",
    createdby:"admin",
    createdon:new Date(),
    modifiedby:"admin",
    modifiedon:new Date()
  });

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setUserItems((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault()

    //postoptions code here//
  }

  return (
    <div>
      <div class="content-page">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-3 col-lg-4">
              <div class="card">
                <div class="card-header d-flex justify-content-between">
                  <div class="header-title">
                    <h4 class="card-title">Add New User</h4>
                  </div>
                </div>
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <div class="crm-profile-img-edit position-relative">
                        <img
                          class="crm-profile-pic rounded avatar-100"
                          src="../assets/images/user/11.png"
                          alt="profile-pic"
                        />
                        <div class="crm-p-image bg-primary">
                          <i class="las la-pen upload-button"></i>
                          <input
                            class="file-upload"
                            type="file"
                            accept="image/*"
                          />
                        </div>
                      </div>
                      <div class="img-extension mt-3">
                        <div class="d-inline-block align-items-center">
                          <span>Only</span>
                          <a href="javascript:void();">.jpg</a>
                          <a href="javascript:void();">.png</a>
                          <a href="javascript:void();">.jpeg</a>
                          <span>allowed</span>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label>User Role:</label>
                      <select
                        name="user_role"
                        class=" form-control"
                        data-style="py-0"
                        value={userItems.user_role}
                        onChange={handleChange}
                      >
                        <option>Select</option>
                        <option>Administrator</option>
                        <option>User</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-8">
              <div class="card">
                <div class="card-header d-flex justify-content-between">
                  <div class="header-title">
                    <h4 class="card-title">New User Information</h4>
                  </div>
                </div>
                <div class="card-body">
                  <div class="new-user-info">
                    <form>
                      <div class="row">
                        <div class="form-group col-md-6">
                          <label for="fname">First Name:</label>
                          <input
                            type="text"
                            name='firstname'
                            class="form-control"
                            id="fname"
                            placeholder="First Name"
                            value={userItems.firstname}
                            onChange={handleChange}
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="mname">Middle Name:</label>
                          <input
                            type="text"
                            name='middlename'
                            class="form-control"
                            id="mname"
                            placeholder="Middle Name"
                            value={userItems.middlename}
                            onChange={handleChange}
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="lname">Last Name:</label>
                          <input
                            type="text"
                            name='lastname'
                            class="form-control"
                            id="lname"
                            placeholder="Last Name"
                            value={userItems.lastname}
                            onChange={handleChange}
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="add2">Address:</label>
                          <input
                            type="text"
                            name='address'
                            class="form-control"
                            id="add2"
                            placeholder=" Address "
                            value={userItems.address}
                            onChange={handleChange}
                          />
                        </div>

                        <div class="form-group col-sm-6">
                          <label>Country:</label>
                          <select
                            name="country"
                            class="form-control"
                            data-style="py-0"
                            value={userItems.country}
                            onChange={handleChange}
                          >
                            <option>Select Country</option>
                            <option>Caneda</option>
                            <option>Noida</option>
                            <option>USA</option>
                            <option>India</option>
                            <option>Africa</option>
                          </select>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="mobno">Mobile Number:</label>
                          <input
                            type="text"
                            name='mobile'
                            class="form-control"
                            id="mobno"
                            placeholder="Mobile Number"
                            value={userItems.mobile}
                            onChange={handleChange}
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="altconno">Alternate Contact:</label>
                          <input
                            type="text"
                            name='contact'
                            class="form-control"
                            id="altconno"
                            placeholder="Alternate Contact"
                            value={userItems.contact}
                            onChange={handleChange}
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="email">Email:</label>
                          <input
                            type="email"
                            name='email'
                            class="form-control"
                            id="email"
                            placeholder="Email"
                            value={userItems.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="pno">Pin Code:</label>
                          <input
                            type="text"
                            name='pincode'
                            class="form-control"
                            id="pno"
                            placeholder="Pin Code"
                            value={userItems.pincode}
                            onChange={handleChange}
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="city">Town/City:</label>
                          <input
                            type="text"
                            name='town'
                            class="form-control"
                            id="city"
                            placeholder="Town/City"
                            value={userItems.town}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <hr />
                      <h5 class="mb-3">Security</h5>
                      <div class="row">
                        <div class="form-group col-md-12">
                          <label for="uname">User Name:</label>
                          <input
                            type="text"
                            name='username'
                            class="form-control"
                            id="uname"
                            placeholder="User Name"
                            value={userItems.username}
                            onChange={handleChange}
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="pass">Password:</label>
                          <input
                            type="password"
                            name='password'
                            class="form-control"
                            id="pass"
                            placeholder="Password"
                            value={userItems.password}
                            onChange={handleChange}
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="rpass">Repeat Password:</label>
                          <input
                            type="password"
                            name='repeatpassword'
                            class="form-control"
                            id="rpass"
                            placeholder="Repeat Password "
                            value={userItems.repeatpassword}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary">
                        Add New User
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddUsers
