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

export const UsersList = ({ users }) => {
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
            <Text>{followers.toLocaleString('en-US')} followers</Text>
          </Box>
          <Button>Follow</Button>
        </Item>
      ))}
    </List>
  );
};
