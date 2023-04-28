import { List} from './UsersList.styled';
import { useEffect, useState } from 'react';
import { usersGet } from 'service/Api';
import { UsersListItem } from 'components/UsersListItem/UsersListItem';
import { BackLink } from 'components/BackLink/BackLink';
import { useLocation } from 'react-router';

export const UsersList = ({ users, updateUserFollowers }) => {
  const [allListUsers, setAllListUsers] = useState([]);
  const [follow, setFollow] = useState([]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    (async () => {
      const { data } = await usersGet();
      setAllListUsers(data);
    })();
  }, []);

  useEffect(() => {
    const storedFollow = localStorage.getItem('follow');
 storedFollow ? setFollow(JSON.parse(storedFollow)): setFollow( new Array(allListUsers.length).fill(false));
    
  }, [allListUsers.length]);
  const handleChangeFollowers = (id, followers, isFollowing, i) => {
    const updateFollower = follow.map((el, idx) => (idx === i) ? !el  : el)
   
    setFollow(updateFollower);
    localStorage.setItem('follow', JSON.stringify(updateFollower));
    updateUserFollowers(id, followers, isFollowing);
  };

  return (
    <> 
        <BackLink to={backLinkHref}>Go back</BackLink>
    
      <List>
      <UsersListItem users={users}  handleChangeFollowers={handleChangeFollowers} follow={follow}/>
    </List>
    </>  
  );
};
