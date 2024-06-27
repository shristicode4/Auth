import { React, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

/** import all components */
import Username from "./components/Username";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Recovery from "./components/Recovery";
import Password from "./components/Password";
import Profile from "./components/Profile";
import PageNotFound from "./components/PageNotFound";

//root routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Username></Username>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/password",
    element: <Password></Password>,
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
  },
  {
    path: "/recovery",
    element: <Recovery></Recovery>,
  },
  {
    path: "/reset",
    element: <Reset></Reset>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
