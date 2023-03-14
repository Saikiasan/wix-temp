import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import App from './App';

// ROUTER PATHS SETTING HERE BELOW
const router = createBrowserRouter([
  {
    path: '/wix-temp',
    element: <App/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);