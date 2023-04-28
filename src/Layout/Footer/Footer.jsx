import { Container, Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { AppBar } from './Footer.styled';

export const Footer = () => {
  return (
    <AppBar component="footer">
      <Container
        sx={{
          display: { xs: 'flex' },
          height: '60px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="body1">Disigned by Vitalii Nozhenko</Typography>
        <CopyrightIcon sx={{ display: { md: 'flex' }, ml: 1, mr: 1 }} />
        <Typography variant="body1">GoIT 2023</Typography>
      </Container>
    </AppBar>
  );
};
