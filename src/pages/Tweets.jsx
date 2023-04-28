import { Container } from '@mui/material';
import { BackLink } from 'components/BackLink/BackLink';
import { Btn } from 'components/Button/Button';
import { Error } from 'components/Error/Error';
import { Spinner } from 'components/Spinner/Spinner';
import { UsersList } from 'components/UsersList/UsersList';
import { userId, usersGet } from 'service/Api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const Tweets = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const [users, setUsers] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [perPage] = useState(3);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    const cardUser = async () => {
      try {
        const { data } = await usersGet();
        const total = data.length;
        const lastUsersIndex = page * perPage;
        const firstUsersIndex = lastUsersIndex - perPage;

        const currentUsers = data.slice(firstUsersIndex, lastUsersIndex);

        setUsers(prev => [...prev, ...currentUsers]);
        setIsVisible(page < Math.ceil(total / perPage));
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoader(false);
      }
    };
    cardUser();
  }, [page, perPage]);

  const loadMore = () =>setPage(() => page + 1);
  

  const updateUserFollowers = async (id, followers, isFollowing) => {
    let body;
    !isFollowing
      ? (body = { followers: followers + 1 })
      : (body = { followers: followers - 1 });

    try {
      await userId({ id, body });
    } catch (error) {
      setError(error.message);
    }

    const updateFollowers = users.map(user =>  user.id === id ? { ...user, ...body } : user);
    setUsers(updateFollowers);
  };
  return (
    <Container>
      <div>
        <BackLink to={backLinkHref}>Go back</BackLink>
      </div>
      {isLoader && <Spinner />}

      {users.length > 0 && (
        <UsersList users={users} updateUserFollowers={updateUserFollowers} />
      )}

      {isVisible && <Btn loadMore={loadMore} />}
      {error && (
        <Error children={`Something went wrong Try again later.😭`} />
      )}
    </Container>
  );
};

export default Tweets;
