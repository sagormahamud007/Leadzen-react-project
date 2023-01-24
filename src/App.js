import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import Details from './Pages/Details/Details';
import Home from './Pages/Home/Home';

function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout></Layout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
          },
          {
            path:'/details/:id',
            element:<Details></Details>,
            loader:async({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
          }
      ]
    },
    ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
