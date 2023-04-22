import { BackLink } from 'components/BackLink/BackLink';
import { useLocation } from 'react-router';

export const NotFound = ({ children }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      {children}
    </>
  );
};
