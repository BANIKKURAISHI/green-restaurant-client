import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import FoodItems from "../Components/Pages/Food/FoodItems"
import axios, { Axios } from "axios";
import FoodDetails from "../Components/Pages/Food/FoodDetails";
import AddCards from "../Components/Pages/AddCard/AddCards";
import ReviewUpdate from "../Components/Pages/Review/ReviewUpdate";
import Login from "../Components/Pages/Authentication/Login";
import Register from "../Components/Pages/Authentication/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:"/fooditems",
        Component:FoodItems,
        loader:async()=>{
            const res=await(axios.get("https://green-restaurant-server.vercel.app/foodList"))
            return res.data
            console.log(res.data)
     }
      },
       {
        path: "/foodList/:id",
        Component: FoodDetails,
      },
       {
        path: "/addCart",
        Component:AddCards,
           loader:async()=>{
            const res=await(axios.get("https://green-restaurant-server.vercel.app/postFood"))
            return res.data
     }
      },
       {
        path: "/update/:id",
        Component:ReviewUpdate,
       
      },
       {
        path: "login",
        Component:Login,
       
      },
       {
        path: "register",
        Component:Register,
       
      },
    ],
  },
]);

export default router;