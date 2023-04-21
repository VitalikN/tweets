import { BackLink } from 'components/LinkStyled/LinkStyled';
import { useLocation } from 'react-router';

const Tweets = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <div>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <br />
      tweets Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Repellendus perferendis porro laboriosam odit architecto repellat. Qui
      iusto ratione
    </div>
  );
};

export default Tweets;
