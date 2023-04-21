import { Button } from '@mui/material';
import { LinkStyled } from 'components/LinkStyled.styled';

export const BackLink = ({ to, children }) => {
  return (
    <Button variant="contained">
      <LinkStyled to={to}>{children}</LinkStyled>
    </Button>
  );
};
