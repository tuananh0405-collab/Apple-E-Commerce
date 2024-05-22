import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PrivateRoute from "../src/components/routes/PrivateRoute";
import AdminRoute from "../src/components/routes/AdminRoute";
import Home from "../src/app/Client/Public/Home";
import Login from "../src/app/Client/Public/Login";
import Register from "../src/app/Client/Public/Register";
import Shop from "../src/app/Client/Public/Shop";
import Profile from "../src/app/Client/Private/Profile";
import Cart from "../src/app/Client/Private/Cart";
import Favorites from "../src/app/Client/Private/Favorites";
import Orders from "../src/app/Client/Private/Orders";
import UserList from "../src/app/Admin/User/UserList";
import CategoryList from "../src/app/Admin/Category/CategoryList";
import ProductList from "../src/app/Admin/Product/ProductList";
import OrderList from "../src/app/Admin/Order/OrderList";
import Dashboard from "../src/app/Admin/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* GUEST  */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/shop" element={<Shop />} />

      {/* USER  */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/orders" element={<Orders />} />
      </Route>

      {/* ADMIN */}
      <Route path="" element={<AdminRoute />}>
        <Route path="/userList" element={<UserList />} />
        <Route path="/categoryList" element={<CategoryList />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/orderList" element={<OrderList />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

reportWebVitals();
