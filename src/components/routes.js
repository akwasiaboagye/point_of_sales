import React from "react";

const DashBord = React.lazy(() => import("../views/DashBord"));
const LogIn = React.lazy(() => import("../views/auth/LogIn"))


const ListProducts = React.lazy(() => import("../views/products/ListProducts"));
const AddProducts = React.lazy(() => import("../views/products/AddProducts"));
const ExpiringProducts = React.lazy(() =>import("../views/products/ExpiringProducts"));

const ListCategory = React.lazy(() => import("../views/categories/ListCategory"));
const AddCategories = React.lazy(() => import("../views/categories/AddCategories"));

const AddSales = React.lazy(() => import("../views/sales/AddSales"));
const ListSales = React.lazy(() => import("../views/sales/ListSales"));

const AddPurchase = React.lazy(() => import("../views/purchase/AddPurchase"));
const PurchaseList = React.lazy(() => import("../views/purchase/PurchaseList"));
const OrderList = React.lazy(() => import("../views/purchase/OrderList"));
const AddOrder = React.lazy(() => import("../views/purchase/AddOrder"));

const ReturnList = React.lazy(() => import("../views/returns/ReturnList"));
const AddReturns = React.lazy(() => import("../views/returns/AddReturns"));

const Users = React.lazy(() => import("../views/people/User"));
const Suppliers = React.lazy(() => import("../views/people/Suppliers"));
const AddUsers = React.lazy(() => import("../views/people/AddUsers"));
const AddSupplier = React.lazy(() => import("../views/people/AddSupplier"));
const Customers = React.lazy(() => import("../views/people/Customers"));
const AddCustomers = React.lazy(() => import("../views/people/AddCustomers")); 

const Invoice = React.lazy(() => import("../views/others/Invoice"));
const Report = React.lazy(() => import("../views/others/Report"));





const routes = [

    {path:"/dashboard", name:"DashBoard Page", component:DashBord},
    {path:"/login", name:"LogIn Page", component:LogIn},
   

    {path:"/listproducts", name:"ListProducts Page", component:ListProducts},
    {path:"/addproducts", name:"AddProducts Page", component:AddProducts},
    {path:"/expiring", name:"ExpiringProducts List", component:ExpiringProducts},

    {path:"/listcategory", name:"ListCategory Page", component:ListCategory},
    {path:"/addcategories", name:"AddCategories Page", component:AddCategories},

    {path:"/addsales", name:"AddSales Page", component:AddSales},
    {path:"/listsales", name:"ListSales Page", component:ListSales},

    {path:"/addpurchase", name:"AddPurchase Page", component:AddPurchase},
    {path:"/purchaselist", name:"PurchaseList Page", component:PurchaseList},
    {path:"/addorder", name:"AddOrder Page", component:AddOrder},
    {path:"/orderlist", name:"OrderList Page", component:OrderList},

    {path:"/addreturn", name:"AddReturn Page", component:AddReturns},
    {path:"/returnlist", name:"ReturnList", component:ReturnList},

    {path:"/users", name:"User Page", component:Users},
    {path:"/suppliers", name:"Suppliers Page", component:Suppliers},
    {path:"/addusers", name:"AddUsers Page", component:AddUsers},
    {path:"/customers", name:"Customers Page", component:Customers},
    {path:"/addcustormers", name:"AddCustomers Page", component:AddCustomers},
    {path:"/addsuppliers", name:"AddSuppliers Page", component:AddSupplier},

    {path:"/invoice", name:"Invoice Page", component:Invoice},
    {path:"/report", naem:"Report Page", component:Report},
    
]



export default routes;