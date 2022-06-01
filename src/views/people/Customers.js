import axios from "axios";
import React, { useState, useEffect } from "react";
import BoostrapTable from "react-bootstrap-table-next";

const Customers = () => {
  const [data, setDate] = useState([]);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = () => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      setDate(res.data)
    );
  };

  const columns = [
    {dataField: "id",text: "ID"},
    { dataField: "username", text: "UserName", sort:true },
    { dataField: "email", text: "Email", sort:true },
   
  ];

  return (
    <div>
      <div class="content-page">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="d-flex flex-wrap align-items-center justify-content-between mb-4">
                <div>
                  <h4 class="mb-3">Customer List</h4>
                  <p class="mb-0">
                    A customer dashboard lets you easily gather and visualize
                    customer data from optimizing <br />
                    the customer experience, ensuring customer retention.
                  </p>
                </div>
                <a
                  href="page-add-customers.html"
                  class="btn btn-primary add-list"
                >
                  <i class="las la-plus mr-3"></i>Add Customer
                </a>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="table-responsive rounded mb-3">
                <BoostrapTable data={data} keyField="id" columns={columns}vstriped hover condensed />
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="edit-note"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <div class="popup text-left">
                  <div class="media align-items-top justify-content-between">
                    <h3 class="mb-3">Product</h3>
                    <div class="btn-cancel p-0" data-dismiss="modal">
                      <i class="las la-times"></i>
                    </div>
                  </div>
                  <div class="content edit-notes">
                    <div class="card card-transparent card-block card-stretch event-note mb-0">
                      <div class="card-body px-0 bukmark">
                        <div class="d-flex align-items-center justify-content-between pb-2 mb-3 border-bottom">
                          <div class="quill-tool"></div>
                        </div>
                        <div id="quill-toolbar1">
                          <p>
                            Virtual Digital Marketing Course every week on
                            Monday, Wednesday and Saturday.Virtual Digital
                            Marketing Course every week on Monday
                          </p>
                        </div>
                      </div>
                      <div class="card-footer border-0">
                        <div class="d-flex flex-wrap align-items-ceter justify-content-end">
                          <div
                            class="btn btn-primary mr-3"
                            data-dismiss="modal"
                          >
                            Cancel
                          </div>
                          <div
                            class="btn btn-outline-primary"
                            data-dismiss="modal"
                          >
                            Save
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
