import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/Body';
import Error from './pages/Error';
import AboutMe from './pages/AboutMe';
import MoreWork from './pages/MoreWork';
import BlueMan from './pages/BlueMan';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: '/AboutMe',
        element: <AboutMe />
      },
      {
        path: '/MoreWork',
        element: <MoreWork />
      },
      {
        path: '/BlueMan',
        element: <BlueMan />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
);
