import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import EmailForm from './components/EmailForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/get-started",
    element: <EmailForm/>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
