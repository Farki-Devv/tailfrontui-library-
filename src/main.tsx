import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import '../config/themes/base/lib';
import { router } from './App.tsx';
import './index.css';
import Footer from './shared/footer.tsx';
import { Toaster } from './components/toaster.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="max-w-[90rem] mx-auto px-2 lg:px-[7.5rem]">
      <RouterProvider router={router} />
    </div>
    <Toaster />
    <Footer />
  </StrictMode>,
);
