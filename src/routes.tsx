import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import { UserProvider } from "./common/context/User";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  }, {
    path: "/home",
    element: <Home />,
  }, {
    path: "/",
    element: <Navigate to="/login"></Navigate>
  }, {
    path: "/signup",
    element: <SignUp />
  }
]);

const Router = () => {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  )
}

export default Router;
