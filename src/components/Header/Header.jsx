import { Box, Typography } from '@mui/material';
import { LinkStyled } from '../Styled.styled';
import { AppBar } from './Header.styled';

export const Header = () => {
  return (
    <AppBar position="static">
      <Box
        component="nav"
        sx={{
          display: { xs: 'flex' },
          height: '60px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
        }}
      >
        <LinkStyled to="/">
          <Typography variant="h5">Home</Typography>
        </LinkStyled>
        <LinkStyled to="tweets">
          <Typography variant="h5">Tweets</Typography>
        </LinkStyled>
      </Box>
    </AppBar>
  );
};
