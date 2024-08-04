import React, { useState } from "react";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Dashboard from "./Component/Dashboard";
import Home from "./Component/Home";
import "./Component/App.css"
import { router } from "./routes";
import {RouterProvider} from "react-router-dom"
const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
