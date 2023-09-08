import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './pages/Homepage';
import GetStarted from './pages/GetStarted';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/get-started",
    element: <GetStarted/>,
  },
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
