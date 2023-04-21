import { LinkStyled } from 'components/Styled.styled';
import { Button } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <Button>
      <LinkStyled to={to}>{children}</LinkStyled>
    </Button>
  );
};
