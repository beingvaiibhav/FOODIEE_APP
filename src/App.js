import React from "react";
import { ReactDOM } from "react-dom";
import './App.css';
import Header from './components/Header';
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Cart from "./components/Cart";
import ResturantMenu from "./components/ResturantMenu";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./cartStore/appStore";


function AppLayout() {
  return (
    <Provider store={appStore}>
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'about',
        element:<AboutUs/>
      },
      {
        path:'contact',
        element:<ContactUs/>
      },
      {
        path:'cart',
        element:<Cart/>
      },
      {
        path:'/resturant/:resId',
        element:<ResturantMenu/>
      }
    ],
    errorElement:<Error/>,
  },
  
])

export default AppLayout;
