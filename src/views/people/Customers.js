import { faEdit, faFolderOpen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table } from "../../components/SolomonLib";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = () => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      setCustomers(res.data)
    );
  };
  const formatAction = (cell, row) => (
    <div className="btn-group btn-group-sm">
        <button className="btn btn-info" title="View details" ><i class="ri-eye-line mr-0"></i></button>
        <button className="btn btn-warning" title="Edit Customer" ><i class="ri-pencil-line mr-0"></i></button>
        <button className="btn btn-danger" title="Remove Customer" ><i class="ri-delete-bin-line mr-0"></i></button>
    </div>
);

  const columns = [
    { dataField: "id",text: "ID", sort:true, headerStyle: (col, idx) => ({ width:'180px', textAlign: 'center', fontWeight: 'bold'}) },
    { dataField: "name",text: "Customer Name", sort:true, headerStyle: (col, idx) => ({ width:'180px', textAlign: 'center', fontWeight: 'bold'}) },
    { dataField: "email", text: "Email", sort:true, headerStyle: (col, idx) => ({ width:'180px', textAlign: 'center', fontWeight: 'bold'}) },
    { dataField: "phone", text: "Phone No.", sort:true, headerStyle: (col, idx) => ({ width:'180px', textAlign: 'center', fontWeight: 'bold'}) },
    { dataField: "country", text: "Country", sort:true, headerStyle: (col, idx) => ({ width:'180px', textAlign: 'center', fontWeight: 'bold'}) },
    { dataField: "order", text: "Order", sort:true, headerStyle: (col, idx) => ({ width:'180px', textAlign: 'center', fontWeight: 'bold'}) },
    { dataField: "status", text: "Status", sort:true, headerStyle: (col, idx) => ({ width:'180px', textAlign: 'center', fontWeight: 'bold'}) },
    { dataField: "lastorder", text: "Last Order", sort:true, headerStyle: (col, idx) => ({ width:'180px', textAlign: 'center', fontWeight: 'bold'}) },
    { dataField: "action", text: "Action",formatter:(cell,row) => formatAction(cell,row), sort:true, headerStyle: (col, idx) => ({ width:'180px', textAlign: 'center', fontWeight: 'bold'}) },
   
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
                  href="/addcustormers"
                  class="btn btn-primary add-list"
                >
                  <i class="las la-plus mr-3"></i>Add Customer
                </a>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="table-responsive rounded mb-3 box">
                <Table data={customers} keys="id" columns={columns} striped hover condensed />
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
