import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../Layout/AdminLayout";
import Main from "../Layout/Main";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AddUser from "../Pages/AddUser/AddUser";
import AdminPanel from "../Pages/AdminPanel/AdminPanel";
import Home from "../Pages/Home";
import MyCart from "../Pages/MyCart/MyCart";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signIn',
                element: <SignIn />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/myCart',
                element: <MyCart />
            },
        ]
    },
    {
        path: '/adminPanel',
        element: <PrivateRoutes><AdminLayout /></PrivateRoutes>,
        children: [
            {
                path: '/adminPanel/allUsers',
                element: <AdminPanel />
            },
            {
                path: '/adminPanel/addUser',
                element: <AddUser />
            },
            {
                path: '/adminPanel/addProduct',
                element: <AddProduct />
            }
        ]
    }
])
export default router;