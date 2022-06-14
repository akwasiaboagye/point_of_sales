import React from 'react'

const SideBar = () => {
  return (
    <div>
      <div class="iq-sidebar sidebar-default sideflow" style={{overflowY:"scroll",backgroundColor:"lightblue"}}>
        <div
          class="iq-sidebar-logo d-flex align-items-center justify-content-between"
        >
          <a href="index.html" class="header-logo">
            <img
              src="../assets/images/logo.png"
              class="img-fluid rounded-normal light-logo"
              alt="logo"
            />
            <h5 class="logo-title light-logo ml-3">POSDash</h5>
          </a>
          <div class="iq-menu-bt-sidebar ml-0">
            <i class="las la-bars wrapper-menu"></i>
          </div>
        </div>
        <div class="data-scrollbar" data-scroll="1">
          <nav class="iq-sidebar-menu">
            <ul id="iq-sidebar-toggle" class="iq-menu">
              <li class="active">
                <a href="/dashboard" class="svg-icon">
                  <svg
                    class="svg-icon"
                    id="p-dash1"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                    ></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                  <span class="ml-4 sidebar">Dashboard</span>
                </a>
              </li>
              <li class="">
                <a
                  href="#product"
                  class="collapsed"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <svg
                    class="svg-icon"
                    id="p-dash2"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path
                      d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                    ></path>
                  </svg>
                  <span class="ml-4 sidebar" >Products</span>
                  <svg
                    class="svg-icon iq-arrow-right arrow-active"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="10 15 15 20 20 15"></polyline>
                    <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                  </svg>
                </a>
                <ul
                  id="product"
                  class="iq-submenu collapse "
                  data-parent="#iq-sidebar-toggle"
                >
                  <li class="">
                    <a href="/listproducts">
                      <i class="las la-minus"></i><span style={{color:"black"}}>List Product</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="/addproducts">
                      <i class="las la-minus"></i><span style={{color:"black"}}>Add Product</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="/expiring">
                      <i class="las la-minus"></i><span style={{color:"black"}}>Expiring Product</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class=" ">
                <a
                  href="#category"
                  class="collapsed"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <svg
                    class="svg-icon"
                    id="p-dash3"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path
                      d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                    ></path>
                  </svg>
                  <span class="ml-4 sidebar" >Categories</span>
                  <svg
                    class="svg-icon iq-arrow-right arrow-active"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="10 15 15 20 20 15"></polyline>
                    <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                  </svg>
                </a>
                <ul
                  id="category"
                  class="iq-submenu collapse"
                  data-parent="#iq-sidebar-toggle"
                >
                  <li class="">
                    <a href="/listcategory">
                      <i class="las la-minus"></i><span style={{color:"black"}}>List Category</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="/addcategories">
                      <i class="las la-minus"></i><span style={{color:"black"}}>Add Category</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class=" ">
                <a
                  href="#sale"
                  class="collapsed"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <svg
                    class="svg-icon"
                    id="p-dash4"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                  </svg>
                  <span class="ml-4 sidebar" >Sale</span>
                  <svg
                    class="svg-icon iq-arrow-right arrow-active"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="10 15 15 20 20 15"></polyline>
                    <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                  </svg>
                </a>
                <ul
                  id="sale"
                  class="iq-submenu collapse"
                  data-parent="#iq-sidebar-toggle"
                >
                  <li class="">
                    <a href="listsales">
                      <i class="las la-minus"></i><span style={{color:"black"}}>List Sale</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="addsales">
                      <i class="las la-minus"></i><span style={{color:"black"}}>POS</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class=" ">
                <a
                  href="#purchase"
                  class="collapsed"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <svg
                    class="svg-icon"
                    id="p-dash5"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <rect
                      x="1"
                      y="4"
                      width="22"
                      height="16"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                  </svg>
                  <span class="ml-4 sidebar" >Purchases</span>
                  <svg
                    class="svg-icon iq-arrow-right arrow-active"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="10 15 15 20 20 15"></polyline>
                    <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                  </svg>
                </a>
                <ul
                  id="purchase"
                  class="iq-submenu collapse"
                  data-parent="#iq-sidebar-toggle"
                >
                  <li class="">
                    <a href="purchaselist">
                      <i class="las la-minus"></i><span style={{color:"black"}}>List Purchases</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="addpurchase">
                      <i class="las la-minus"></i><span style={{color:"black"}}>Add purchase</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="">
                      <i class="las la-minus"></i><span style={{color:"black"}}>OrderList</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="">
                      <i class="las la-minus"></i><span style={{color:"black"}}>Add Order</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class=" ">
                <a
                  href="#return"
                  class="collapsed"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <svg
                    class="svg-icon"
                    id="p-dash6"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="4 14 10 14 10 20"></polyline>
                    <polyline points="20 10 14 10 14 4"></polyline>
                    <line x1="14" y1="10" x2="21" y2="3"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                  </svg>
                  <span class="ml-4 sidebar" >Returns</span>
                  <svg
                    class="svg-icon iq-arrow-right arrow-active"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="10 15 15 20 20 15"></polyline>
                    <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                  </svg>
                </a>
                <ul
                  id="return"
                  class="iq-submenu collapse"
                  data-parent="#iq-sidebar-toggle"
                >
                  <li class="">
                    <a href="/returnlist">
                      <i class="las la-minus"></i><span style={{color:"black"}}>List Returns</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="/addreturn">
                      <i class="las la-minus"></i><span style={{color:"black"}}>Add Return</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class=" ">
                <a
                  href="#people"
                  class="collapsed"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <svg
                    class="svg-icon"
                    id="p-dash8"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <span class="ml-4 sidebar" >People</span>
                  <svg
                    class="svg-icon iq-arrow-right arrow-active"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="10 15 15 20 20 15"></polyline>
                    <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
                  </svg>
                </a>
                <ul
                  id="people"
                  class="iq-submenu collapse"
                  data-parent="#iq-sidebar-toggle"
                >
                  <li class="">
                    <a href="/customers">
                      <i class="las la-minus"></i><span style={{color:"black"}}>Customers</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="/addcustormers">
                      <i class="las la-minus"></i><span style={{color:"black"}}>Add Customers</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="/users">
                      <i class="las la-minus"></i><span style={{color:"black"}}>Users</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="/addusers">
                      <i class="las la-minus"></i><span style={{color:"black"}}>Add Users</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="/suppliers">
                      <i class="las la-minus"></i><span style={{color:"black"}}>Suppliers</span>
                    </a>
                  </li>
                  <li class="">
                    <a href="/addsuppliers">
                      <i class="las la-minus"></i><span style={{color:"black"}}>Add Suppliers</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="">
                <a href="/report" class="">
                  <svg
                    class="svg-icon"
                    id="p-dash7"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    ></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  <span class="ml-4 sidebar" >Reports</span>
                </a>
                <ul
                  id="invoice"
                  class="iq-submenu collapse"
                  data-parent="#iq-sidebar-toggle"
                ></ul>
                <li class="">
                <a href="/invoice" class="">
                  <svg
                    class="svg-icon"
                    id="p-dash7"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    ></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  <span class="ml-4 sidebar">Invoice</span>
                </a>
                <ul
                  id="invoice"
                  class="iq-submenu collapse"
                  data-parent="#iq-sidebar-toggle"
                ></ul>
              </li>
              </li>
            </ul>
          </nav>
          <div class="p-3"></div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
