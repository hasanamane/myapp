import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./Pages/Home";
import Css from "./Pages/Css";
import Javascript from './Pages/Javascript';
import Html from './Pages/Html';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Javascript",
    element: <Javascript />,
  },
  {
    path: "/Css",
    element: <Css />,
  },
  {
    path: "/Html",
    element: <Html />,
  },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
