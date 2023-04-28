import { Box, Typography } from '@mui/material';
import { Outlet } from 'react-router';
import { Suspense } from 'react';
import { Footer } from 'Layout/Footer/Footer';
import { Header } from 'Layout/Header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 165px)',

          pt: 3,
          pb: 3,
        }}
      >
        <Suspense fallback={  <Typography variant="h6" sx={{  color:'#794aa2'}}>Loading...</Typography>
}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer />
    </>
  );
};
