import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Register from "../components/Login/Register";
import Login from "../components/Login/Login";
import Bookings from "../components/Bookings/Bookings";
import Book from "../components/Book/Book";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        element: <Book/>,
        loader:({params}) =>fetch(`http://localhost:3000/toys/${params.id}`)
      },
     
    ],
  },
]);

export default router;