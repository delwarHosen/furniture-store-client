import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import AuthPRovider from './Provider/AuthPRovider';
import AddProduct from './components/AddProduct/AddProduct';
import Shop from './Shared/Shop/Shop';
import ProductDetails from './components/ProductDetails/ProductDetails';
import UpdateProduct from './components/UpdatePRoduct/UpdateProduct';
import AllProduct from './components/AllProduct/AllProduct';
import DashBoard from './components/DashBoard/DashBoard';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: 'addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: 'shop',
        element: <Shop></Shop>
      },
      {
        path: "product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: 'login',
        element: <SignIn></SignIn>
      },
      {
        path:"signup",
        element:<SignUp></SignUp>
      }

    ]
  },
  {
    path: "dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "updateProduct/:id",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: "allProduct",
        element: <AllProduct></AllProduct>
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthPRovider>
      <RouterProvider router={router} />
    </AuthPRovider>
  </StrictMode>,
)
