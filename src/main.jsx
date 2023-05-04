import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Blog from './components/Blog.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import ChefDetails from './components/ChefDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://chefsteps-server-sowmik265.vercel.app/chefsdetails')
      },
      {
        path:'chef-details/:chefId',
        element:<ChefDetails></ChefDetails>,
        loader: () => fetch('https://chefsteps-server-sowmik265.vercel.app/chefsdetails')
      },
      {
        path: 'blog',
        element: <Blog></Blog>,
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
