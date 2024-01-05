import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: (
      <h1 className="h-screen text-2xl font-bold flex justify-center items-center text-white">
        Not Found
      </h1>
    ),
  },
]);
