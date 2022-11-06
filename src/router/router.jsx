import {createBrowserRouter,} from "react-router-dom";
import Home from '../Pages/Home/Home'
import CurrentPrice from "../Pages/Current price/CurrentPrice";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "Current-Price",
                element: <CurrentPrice/>,
            },
        ],
    },
]);
export default router