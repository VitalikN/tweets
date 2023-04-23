import { nanoid } from 'nanoid';

import { Avatar, Box } from '@mui/material';
import {
  List,
  Item,
  Icon,
  Chip,
  Сircle,
  Text,
  Logo,
  Button,
} from './UsersList.styled';
import { useEffect, useState } from 'react';
import { usersGet } from 'components/service/Api';

export const UsersList = ({ users, updateUserFollowers }) => {
  const [allListUsers, setAllListUsers] = useState([]);
  const [follow, setFollow] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await usersGet();
      setAllListUsers(data);
    })();
  }, []);

  useEffect(() => {
    const storedFollow = localStorage.getItem('follow');
    if (storedFollow) {
      setFollow(JSON.parse(storedFollow));
    } else {
      const newState = new Array(allListUsers.length).fill(false);
      setFollow(newState);
    }
  }, [allListUsers.length]);
  const handleChangeFollowers = (id, followers, isFollowing, i) => {
    const updateFollower = follow.map((el, idx) => {
      if (idx === i) {
        return !el;
      }
      return el;
    });
    setFollow(updateFollower);
    localStorage.setItem('follow', JSON.stringify(updateFollower));
    updateUserFollowers(id, followers, isFollowing);
  };

  return (
    <List>
      {users.map(({ id, user, tweets, followers, avatar }, idx) => (
        <Item key={nanoid()}>
          <Logo src={require('../images/Logo.png')} alt="logo" />
          <Icon src={require('../images/picture.png')} alt="picture" />
          <Chip></Chip>
          <Сircle></Сircle>
          <Avatar
            alt={user}
            src={avatar}
            sx={{ width: 62, height: 62, position: 'absolute', top: 189 }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              mt: '26px',
              mb: '26px',
            }}
          >
            <Text>{tweets} tweets</Text>
            <Text>
              {(followers + 1).toLocaleString('en-US')}
              followers
            </Text>
          </Box>

          <Button
            type="button"
            onClick={() =>
              handleChangeFollowers(id, followers, follow[idx], idx)
            }
            followed={follow[idx]}
          >
            {follow[idx] ? 'Following' : 'Follow'}
          </Button>
        </Item>
      ))}
    </List>
  );
};
