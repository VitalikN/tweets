import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 120px)',

          pt: 3,
          pb: 3,
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
    </>
  );
};
