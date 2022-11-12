import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import Landing from "../pages/home/Landing";
import Login from "../pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
