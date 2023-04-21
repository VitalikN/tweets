import { AppBar, Box, Container, Typography } from '@mui/material';
import { LinkStyled } from '../LinkStyled.styled';
import { Outlet } from 'react-router';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <AppBar position="static">
        <Box
          component="nav"
          sx={{
            display: { xs: 'flex' },
            height: '60px',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <LinkStyled to="/">
            <Typography variant="h5" sx={{ mr: 1 }}>
              Home
            </Typography>
          </LinkStyled>
          <LinkStyled to="tweets">
            <Typography variant="h5" sx={{ mr: 1 }}>
              Tweets
            </Typography>
          </LinkStyled>
        </Box>
      </AppBar>

      <Box component="main">
        <Container
          maxWidth="sm"
          sx={{
            display: 'flex',
            justifyContent: 'center',

            pt: 3,
            pb: 13,
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </Box>
    </>
  );
};
