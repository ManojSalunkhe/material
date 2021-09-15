import React from "react";
import { Route } from "react-router-dom";
import Customerslist from "../pages/Customers/CustomersList";
import Login from "../pages/LogIn";
import User from "../pages/User";
import Home from "../pages/HomePage/HomePage";
const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
    exact: true,
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
    exact: true,
  },
  {
    path: "/customer-list",
    component: Customerslist,
    name: "Customerslist",
    exact: true,
    childComponents: [
      {
        path: "/customer-list/:id",
        component: User,
        name: "User",
        exact: true,
      },
    ],
  }
];

export default routes;
