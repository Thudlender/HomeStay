// import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useHomestayRecordProvider } from "../contexts/homestay.context";
import Home from "../pages/Home";
import Dashboard from "../pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path:"",
            element: <Home />,
        },
        { path: "dashboard", element:
          <HomestayRecordProvider> <Dashboard /></HomestayRecordProvider> },
    ],
  },
]);
export default router
