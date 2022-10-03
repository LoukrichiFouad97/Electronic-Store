import { createBrowserRouter } from "react-router-dom";

// pages
import App from "../App";
import Contact from "./Contact";
import Shop from "./Shop";
import Cart from "./Cart";
import ErrorPage from "./Error";
import Blog from "./Blog";
import About from "./About";
import Wishlist from "./Wishlist";
import OrderTracking from "./OrderTracking";
import Auth from "./Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "auth",
    element: <Auth />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "wishlist",
    element: <Wishlist />,
  },
  {
    path: "OrderTracking",
    element: <OrderTracking />,
  },
]);

export default router;
