
  import React from 'react';
  import { RouterProvider, createBrowserRouter, } from "react-router-dom";
  import About from './components/about';
  import Education from './components/education';
  import Layout from './components/layout';
  import Work from './components/work';
  import Project from './components/projects';
  import Contact from './components/contact';
  
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          // Change this path back to the Admin page
          path: "/",
          element: <About />
        },
        {
            path: "/education",
            element: <Education/>
        },
        {
            path: "/work",
            element: <Work/>
        },
        {
            path: "/projects",
            element: <Project/>
        },
        {
            path: "/contact",
            element: <Contact/>
        }
      ]
    }  
  ]);
  
  function App() {
    return (
        <RouterProvider router={router} />
    );
  }
  
  export default App;
  