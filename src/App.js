import React from "react";
import { RouterProvider } from "react-router-dom";

import { routes } from "./router/routes";

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}
