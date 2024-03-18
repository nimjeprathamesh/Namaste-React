import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./src/App.js";
import About from "./src/component/About.js";
import Cart from "./src/component/Cart.js";
import Contact from "./src/component/Contact.js";
import Home from "./src/component/Home.js";
import ErrorElement from "./src/component/UI/ErrorElement.js";
import RestaurantCardDetails from "./src/component/card/RestaurantCardDetails.js";

const Grocery = lazy(() => import("./src/component/Grocery.js"));
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorElement />,
        children: [
            {path: '/', element: <Home />},
            {path: '/about', element: <About />},
            {path: '/contact', element: <Contact />},
            {path: '/cart', element: <Cart />},
            {path: '/card-details/:id', element: <RestaurantCardDetails />},
            {path: '/grocery', element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>},
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);