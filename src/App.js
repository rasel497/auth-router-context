import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './componants/Home';
import Login from './componants/Login';
import Register from './componants/Register';
import Main from './layout/Main';
import PrivateRoute from './Routes/PrivateRoute';
import Orders from './componants/Orders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <PrivateRoute><Home></Home></PrivateRoute>
        },
        {
          path: '/orders',
          element: <PrivateRoute><Orders></Orders></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
