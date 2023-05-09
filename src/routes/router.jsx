
import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      loader: () => fetch(`http://localhost:5000/coffee`)
    },
    {
      path: "addcoffee",
      element: <AddCoffee></AddCoffee>
    },
    {
      path: "updatecoffee",
      element: <UpdateCoffee></UpdateCoffee>
    }
  ]);


export default router;