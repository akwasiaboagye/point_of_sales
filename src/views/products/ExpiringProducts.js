import { faEdit, faFolderOpen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, {useState, useEffect} from "react";
import { Table } from "../../components/SolomonLib";

const ExpiringProducts = () => {

    const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      setProducts(res.data)
    );
  };

  const formatAction = (cell, row) => (
    <div className="btn-group btn-group-sm">
        <button className="btn btn-info" title="View details" ><FontAwesomeIcon icon={faFolderOpen} /></button>
        <button className="btn btn-warning" title="Edit Customer" ><FontAwesomeIcon icon={faEdit} /></button>
        <button className="btn btn-danger" title="Remove Customer" ><FontAwesomeIcon icon={faTrash} /></button>
    </div>
);

  const columns = [
    { dataField: "id",text: "Code", sort:true, headerStyle: (col, idx) => ({ width:'180px', textAlign: 'center', fontWeight: 'bold'}) },
    { dataField: "product",text: "Product Name", sort:true, headerStyle: (col, idx) => ({ width:'180px', textAlign: 'center', fontWeight: 'bold'}) },
    { dataField: "category", text: "Category", sort:true, headerStyle: (col, idx) => ({ width:'180px', textAlign: 'center', fontWeight: 'bold'}) },
    { dataField: "brand", text: "Brand Name", sort:true, headerStyle: (col, idx) => ({ width:'180px', textAlign: 'center', fontWeight: 'bold'}) },
    { dataField: "cost", text: "Cost", sort:true, headerStyle: (col, idx) => ({ width:'180px', textAlign: 'center', fontWeight: 'bold'}) },
    { dataField: "quantity", text: "Quantity", sort:true, headerStyle: (col, idx) => ({ width:'180px', textAlign: 'center', fontWeight: 'bold'}) },
    { dataField: "manufacturing", text: "Manufacturing", sort:true, headerStyle: (col, idx) => ({ width:'180px', textAlign: 'center', fontWeight: 'bold'}) },
    { dataField: "expiring", text: "Expiring", sort:true, headerStyle: (col, idx) => ({ width:'180px', textAlign: 'center', fontWeight: 'bold'}) },
    { dataField: "action", text: "Action",formatter:(cell,row) => formatAction(cell,row), sort:true, headerStyle: (col, idx) => ({ width:'180px', textAlign: 'center', fontWeight: 'bold'}) },
   
  ];


  return (
    <div>
      <div className="content-page">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="d-flex flex-wrap flex-wrap align-items-center justify-content-between mb-4">
                <div>
                  <h4 class="mb-3">Expiring Products</h4>
                  <p class="mb-0">
                    The expiring  list effectively dictates product presentation
                    and provides information
                    <br /> to list your products about to expire
                  </p>
                </div>
                <a
                  href="page-add-product.html"
                  class="btn btn-primary add-list"
                >
                  <i class="las la-plus mr-3"></i>Expiring Product
                </a>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="table-responsive rounded mb-3 box">
              <Table data={products} keys="id" columns={columns} striped hover condensed />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpiringProducts;
