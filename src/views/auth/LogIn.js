import React, { useState } from "react";

const LogIn = () => {
  const [loginItems, setLogInItems] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setLogInItems((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault()

    //postoptions code here//
  }

  return (
    <div>
      <div class="wrapper login">
        <section class="login-content">
          <div class="container">
            <div class="row align-items-center justify-content-center height-self-center">
              <div class="col-lg-8">
                <div class="card auth-card">
                  <div class="card-body p-0">
                    <div class="d-flex align-items-center auth-content">
                      <div class="col-lg-7 align-self-center">
                        <div class="p-3">
                          <h2 class="mb-2">Sign In</h2>
                          <p>Login to stay connected.</p>
                          <form onSubmit={submitHandler}>
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="floating-label form-group">
                                  <input
                                    class="floating-input form-control"
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={loginItems.email}
                                    onChange={handleChange}
                                  />
                                  <label>Email</label>
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="floating-label form-group">
                                  <input
                                    class="floating-input form-control"
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={loginItems.password}
                                    onChange={handleChange}
                                  />
                                  <label>Password</label>
                                </div>
                              </div>
                            </div>
                            <button type="submit" class="btn btn-primary">
                              Sign In
                            </button>
                          </form>
                        </div>
                      </div>
                      <div class="col-lg-5 content-right">
                        <img
                          src="../assets/images/login/01.png"
                          class="img-fluid image-right"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LogIn;
