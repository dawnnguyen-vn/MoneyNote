import App from "@/App";
import { Home } from "@/pages/Home";
import { Overview } from "@/pages/Overview";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
    ],
  },
]);

export default router;
