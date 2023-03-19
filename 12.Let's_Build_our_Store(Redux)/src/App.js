import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
//import { createBrowserRouter, RouterProvider } from "react-router-dom";
const createBrowserRouter = require("react-router-dom").createBrowserRouter;
const RouterProvider = require("react-router-dom").RouterProvider;
const Outlet = require("react-router-dom").Outlet;
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import UserContext from "./utils/UserContext";
import { useState } from "react";
//import Instamart from "./components/Instamart";

//Code splitting
//Chunking
//Lazy Loading
//Dynamic import
//Dynamic Loading
//Lazy() and Suspense()

const Instamart = lazy(() => import("./components/Instamart"));
//Upon on demand loading -> upon render -> suspend loading

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Hemanth Raju",
    email: "rajuhemanth456@gmail.com",
  });
  return (
    <>
      <Provider store={store}>
        <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}
        >
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);
