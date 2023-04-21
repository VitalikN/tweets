import { Button, LinkStyled } from 'components/Styled.styled';

export const BackLink = ({ to, children }) => {
  return (
    <Button>
      <LinkStyled to={to}>{children}</LinkStyled>
    </Button>
  );
};
