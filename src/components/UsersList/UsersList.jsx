import { nanoid } from 'nanoid';

import { Avatar, Box } from '@mui/material';
import {
  List,
  Item,
  Icon,
  Chip,
  Сircle,
  Text,
  Button,
  Logo,
} from './UsersList.styled';
import { useState } from 'react';

export const UsersList = ({ users }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = evt => {
    // evt.preventdefault();
    setChecked(!checked);
  };
  console.log(users);
  return (
    <List>
      {users.map(({ id, user, tweets, followers, avatar }) => (
        <Item key={nanoid()} id={id}>
          <Logo src={require('./Logo.png')} alt="logo" />
          <Icon src={require('./picture.png')} alt="picture" />
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
              {(!checked ? followers : followers + 1).toLocaleString('en-US')}
              followers
            </Text>
          </Box>

          <Button type="button" onClick={handleChange}>
            {!checked ? 'Follow' : 'Following'}
          </Button>
        </Item>
      ))}
    </List>
  );
};
