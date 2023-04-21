import { Container } from '@mui/material';
import { BackLink } from 'components/BackLink/BackLink';
import { Btn } from 'components/Button/Button';
import { NotFound } from 'components/NotFound/NotFound';
import { Spinner } from 'components/Spinner/Spinner';
import { UsersList } from 'components/UsersList/UsersList';
import { usersGet } from 'components/service/ApiGet';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const Tweets = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const [users, setUsers] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoader(true);
    const cardUser = async () => {
      try {
        const { data } = await usersGet();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoader(false);
      }
    };
    cardUser();
  }, []);

  return (
    <Container>
      <div>
        <BackLink to={backLinkHref}>Go back</BackLink>
      </div>
      {isLoader && <Spinner />}

      {users.length > 0 && <UsersList users={users} />}

      {/* {isVisible && */}
      <Btn
      //   loadMore={loadMore}
      />

      {error && (
        <NotFound children={`Something went wrong Try again later.😭`} />
      )}
    </Container>
  );
};

export default Tweets;