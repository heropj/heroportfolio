import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import './index.css'
import './home.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutPageBento from './components/Aboutme';

const routs= createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement: <h2>ERROR</h2>
  },
  {
    path:'hero', 
    element: <h1>Hello hero</h1>
  },
  {
    path: '/Portfolio',
    element: <AboutPageBento/>
  },
  
  // {
  //   path: '/portfolio',
  //   element: <Navbar/>,
  //   children: [{
  //     path: '/portfolio/about',
  //     element: <About/>
  //   }
  // ]
  // }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routs}/>
  </React.StrictMode>
);


// ReactDOM.render(<App />, document.body);
