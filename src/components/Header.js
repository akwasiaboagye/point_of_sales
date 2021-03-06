import React from 'react'

const Header = () => {
  return (
    <div>
      <div class="iq-top-navbar" style={{backgroundColor:"rgba(5, 6, 60, 0.762)"}}>
        <div class="iq-navbar-custom">
          <nav class="navbar navbar-expand-lg navbar-light p-0">
            {/*<div
              class="iq-navbar-logo d-flex align-items-center justify-content-between"
            >
              <i class="ri-menu-line wrapper-menu"></i>
              <a href="index.html" class="header-logo">
                <img
                  src="../assets/images/logo.png"
                  class="img-fluid rounded-normal"
                  alt="logo"
                />
                <h5 class="logo-title ml-3">Company Name</h5>
              </a>
  </div>*/}
            <div class="iq-search-bar device-search">
              <form action="/dashboard" class="searchbox">
                <a class="search-link" href="index.html#"
                  ><i class="ri-search-line"></i
                ></a>
                <input
                  type="text"
                  class="text search-input"
                  placeholder="Search here..."
                />
              </form>
            </div>
            <div class="d-flex align-items-center">
              {/*<div class="change-mode">
                          <div class="custom-control custom-switch custom-switch-icon custom-control-inline">
                              <div class="custom-switch-inner">
                                  <p class="mb-0"> </p>
                                  <input type="checkbox" class="custom-control-input" id="dark-mode" data-active="true">
                                  <label class="custom-control-label" for="dark-mode" data-mode="toggle">
                                      <span class="switch-icon-left"><i class="a-left ri-moon-clear-line"></i></span>
                                      <span class="switch-icon-right"><i class="a-right ri-sun-line"></i></span>
                                  </label>
                              </div>
                          </div>
                      </div>*/}
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-label="Toggle navigation"
              >
                <i class="ri-menu-3-line"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto navbar-list align-items-center">
                  <li class="nav-item nav-icon dropdown">
                    <a
                      href="index.html#"
                      class="search-toggle dropdown-toggle btn border add-btn"
                      id="dropdownMenuButton02"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        src="../assets/images/small/flag-01.png"
                        alt="img-flag"
                        class="img-fluid image-flag mr-2"
                      />En
                    </a>
                    <div
                      class="iq-sub-dropdown dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <div class="card shadow-none m-0">
                        <div class="card-body p-3">
                          <a class="iq-sub-card" href="index.html#"
                            ><img
                              src="../assets/images/small/flag-02.png"
                              alt="img-flag"
                              class="img-fluid mr-2"
                            />French</a
                          >
                          <a class="iq-sub-card" href="index.html#"
                            ><img
                              src="../assets/images/small/flag-03.png"
                              alt="img-flag"
                              class="img-fluid mr-2"
                            />Spanish</a
                          >
                          <a class="iq-sub-card" href="index.html#"
                            ><img
                              src="../assets/images/small/flag-04.png"
                              alt="img-flag"
                              class="img-fluid mr-2"
                            />Italian</a
                          >
                          <a class="iq-sub-card" href="index.html#"
                            ><img
                              src="../assets/images/small/flag-05.png"
                              alt="img-flag"
                              class="img-fluid mr-2"
                            />German</a
                          >
                          <a class="iq-sub-card" href="index.html#"
                            ><img
                              src="../assets/images/small/flag-06.png"
                              alt="img-flag"
                              class="img-fluid mr-2"
                            />Japanese</a
                          >
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item nav-icon search-content">
                    <a
                      href="index.html#"
                      class="search-toggle rounded"
                      id="dropdownSearch"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="ri-search-line"></i>
                    </a>
                    <div
                      class="iq-search-bar iq-sub-dropdown dropdown-menu"
                      aria-labelledby="dropdownSearch"
                    >
                      <form action="index.html#" class="searchbox p-2">
                        <div class="form-group mb-0 position-relative">
                          <input
                            type="text"
                            class="text search-input font-size-12"
                            placeholder="type here to search..."
                          />
                          <a href="index.html#" class="search-link"
                            ><i class="las la-search"></i
                          ></a>
                        </div>
                      </form>
                    </div>
                  </li>
                  <li class="nav-item nav-icon dropdown">
                    <a
                      href="index.html#"
                      class="search-toggle dropdown-toggle"
                      id="dropdownMenuButton2"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-mail"
                      >
                        <path
                          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                        ></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <span class="bg-primary"></span>
                    </a>
                    <div
                      class="iq-sub-dropdown dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                    >
                    </div>
                  </li>
                  <li class="nav-item nav-icon dropdown caption-content">
                    <a
                      href="/dashboard"
                      class="search-toggle dropdown-toggle"
                      id="dropdownMenuButton4"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        src="../assets/images/user/1.png"
                        class="img-fluid rounded"
                        alt="user"
                      />
                    </a>
                    <div
                      class="iq-sub-dropdown dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <div class="card shadow-none m-0">
                        <div class="card-body p-0 text-center">
                          <div class="media-body profile-detail text-center">
                            <img
                              src="../assets/images/page-img/profile-bg.jpg"
                              alt="profile-bg"
                              class="rounded-top img-fluid mb-4"
                            />
                            <img
                              src="../assets/images/user/1.png"
                              alt="profile-img"
                              class="rounded profile-img img-fluid avatar-70"
                            />
                          </div>
                          <div class="p-3">
                            <h5 class="mb-1">JoanDuo@property.com</h5>
                            <p class="mb-0">Since 10 march, 2020</p>
                            <div
                              class="d-flex align-items-center justify-content-center mt-3"
                            >
                              <a
                                href="../app/user-profile.html"
                                class="btn border mr-2"
                                >Profile</a
                              >
                              <a href="auth-sign-in.html" class="btn border"
                                >Sign Out</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
