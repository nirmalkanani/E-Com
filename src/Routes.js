import React from "react";
const Admin = React.lazy(() => import('./Admin/Admin'))
const Dashboard = React.lazy(() => import('./AdminView/Dashboard/Dashboard'))
const Product = React.lazy(() => import('./AdminView/Products/Products'))
const Cateloge = React.lazy(() => import('./AdminView/Cateloge/Cateloge'))
const Order = React.lazy(() => import('./AdminView/OrderDetails/OrderDetails'))
const Invoice = React.lazy(() => import('./AdminView/Invoice/Invoice'))
const UserList = React.lazy(() => import('./AdminView/UserList/UserList'))

export const Admin_Final = [
    {
        name:"Home",
        path:"/admin",
        component: Dashboard,
        exact: true
    },
    {
        name:"Dashbord",
        path:"/admin/dashboard",
        component: Dashboard,
        exact: true
    },
    {
        name:"Product",
        path:"/admin/product",
        component: Product,
        exact: true
    },
    {
        name:"Cateloge Upload",
        path:"/admin/product/new-product",
        component: Cateloge,
        exact: true
    },
    {
        name:"Order Details",
        path:"/admin/order-details",
        component: Order,
        exact: true
    },
    {
        name:"Invoice",
        path:"/admin/get-invoice",
        component: Invoice,
        exact: true
    },
    {
        name:"User",
        path:"/admin/user-list",
        component: UserList,
        exact: true
    },
]