import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home/Home";
import Singup from "../components/Singup/Singup";
import Error from "../components/Error";


const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/singup',
                element: <Singup></Singup>
            }
        ]
    }
])

export default myCreatedRouter;