import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Register from "../components/Login/Register";
import Login from "../components/Login/Login";
import Bookings from "../components/Bookings/Bookings";
import Book from "../components/Book/Book";
import PrivateRoute from "./PrivateRoute";
import Details from "../components/Details/Details";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:() => fetch('https://bd-toys-market-server.vercel.app/totalToys')
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/book/:id",
        element: <PrivateRoute><Book/></PrivateRoute>,
        loader:({params}) =>fetch(`https://bd-toys-market-server.vercel.app/toys/${params.id}`)
      },
      {
        path: "/toyBookings",
        element: <PrivateRoute><Bookings/></PrivateRoute>   
      },
      {
        path: "toys/:id",
        element: <Details></Details>,
        loader:({params})  =>fetch(`https://bd-toys-market-server.vercel.app/toys/${params.id}`) 
      },
     
    ],
  },
]);

export default router;