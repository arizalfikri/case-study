import React from "react";
import { RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import { router } from "./routes";

export default function App() {
  return (
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  );
}
