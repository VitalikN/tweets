import { BackLink } from 'components/LinkStyled/LinkStyled';
import { useLocation } from 'react-router';

export const NotFound = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <br />
      NotFound
    </>
  );
};
