import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Layout from './Layout/Layout';
import Details from './Pages/Details/Details';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './Pages/Home/Home';
import SignIn from './Pages/SignIn/Login';
import SignUp from './Pages/SignUp/SignUp';
import 'react-toastify/dist/ReactToastify.css';

import PrivateRoute from './Shere/PrivateRouter/PrivateRouter';
import About from './Pages/About/About';

function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      errorElement: <ErrorPage></ErrorPage>,
      element:<Layout></Layout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
          },
          {
            path:'/signUp',
            element:<SignUp></SignUp>
        },
        {
            path:'/signIn',
            element:<SignIn></SignIn>
        },
        {
            path:'/about',
            element:<About></About>
        },
          {
            path:'/details/:id',
            element:<PrivateRoute><Details></Details></PrivateRoute> ,
            loader:async({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
          }
      ]
    },
    ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer/>
    </div>
  );
}

export default App;
