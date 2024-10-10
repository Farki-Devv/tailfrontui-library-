import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import '../config/themes/base/lib';
import { router } from './App.tsx';
import './index.css';
import React from 'react';
import Footer from './shared/footer.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="max-w-[90rem] mx-auto px-[7.5rem]">
      <RouterProvider router={router} />
    </div>
    <Footer/>
  </StrictMode>,
);
