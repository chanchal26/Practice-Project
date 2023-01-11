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
import UserUpdate from "../Pages/UserUpdate/UserUpdate";
import AdminRoute from "./AdminRoute";
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
                element: <PrivateRoutes><MyCart /></PrivateRoutes>
            },
        ]
    },
    {
        path: '/adminPanel',
        element: <AdminRoute><AdminLayout /></AdminRoute>,
        children: [
            {
                path: '/adminPanel/allUsers',
                element: <AdminRoute><AdminPanel /></AdminRoute>
            },
            {
                path: '/adminPanel/addUser',
                element: <AdminRoute><AddUser /></AdminRoute>
            },
            {
                path: '/adminPanel/addProduct',
                element: <AdminRoute><AddProduct /></AdminRoute>
            },
            {
                path: '/adminPanel/userUpdate/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
                element: <UserUpdate />
            },
        ]
    }
])
export default router;