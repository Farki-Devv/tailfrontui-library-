import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../config/themes/base/lib';
import './index.css';
import Footer from './shared/footer.tsx';
import Navbar from './shared/navbar.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react';
import Documentation from './pages/documentation.tsx'
import Home from './pages/home.tsx'

// To display navbar and footer on every page
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
};

//react-router-dom for each pages
const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/docs",
        element: <Documentation />
      }
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
