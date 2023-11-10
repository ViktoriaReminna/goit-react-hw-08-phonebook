import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { Box } from './Box';
import { Header } from './Header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
        <Box />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
};
