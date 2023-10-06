import { createBrowserRouter } from "react-router-dom";
import Maincontiner from "../Maincontiner/Maincontiner";
import Home from "../Page/Home";
import Products from "../Page/Products";
import Registration from "../Page/Registration";
import SingIn from "../Page/SingIn";
import Detals from "../Page/Detals";
import Privateroute from "../Page/Privateroute";

 export const mycreaRouter = createBrowserRouter([{
    path:"/",
    element:<Maincontiner></Maincontiner>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/product",
            element:<Products></Products>
        },
        {
            path:"/detals/:id",
            element:<Privateroute><Detals></Detals></Privateroute>,
            loader:()=>fetch("/news.json")
        },
        {
            path:"/reg",
            element:<Registration></Registration>
        },
        {
            path:"/singin",
            element:<SingIn></SingIn>
        }
    ]
}])