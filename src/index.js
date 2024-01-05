import ReactDOM from "react-dom/client";
import "./assets/css/globals.css";
import "./assets/css/tailwind.config.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
