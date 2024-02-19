import React from 'react';
import './index.css';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import Main from './Main';
import Buy from './buy/buy';
import Sell from './sell/sell';
import ContactUs from './contactus/contactUs';
import Invest from './invest/invest';
import AboutUs from './aboutus/aboutus';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/buy",
    element: <Buy />,
  },
  {
    path: "/sell",
    element: <Sell />,
  },
  {
    path: "/contactUs",
    element: <ContactUs />,
  },
  {
    path: "/invest",
    element: <Invest />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
