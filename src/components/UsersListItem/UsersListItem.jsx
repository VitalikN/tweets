import { nanoid } from 'nanoid';
import { Avatar, Box } from '@mui/material';
import {
 
    Container,
    Icon,
    Chip,
    Сircle,
    Text,
    Logo,
    Button,
  } from './UsersListItem.styled';

export const UsersListItem = ({users,follow, handleChangeFollowers})=> {
  
  return ( users.map(({ id, user, tweets, followers, avatar }, idx) => (
            <li key={nanoid()}>
            <Container>
              <Logo src={require('../../images/Logo.png')} alt="logo" />
              <Icon src={require('../../images/picture.png')} alt="picture" />
              <Chip></Chip>
              <Сircle></Сircle>
              <Avatar
                alt={user}
                src={avatar}
                sx={{ width: 62, height: 62, position: 'absolute',  left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)' }}
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
                <Text>{(followers + 1).toLocaleString('en-US')}
                 <span> followers</span> </Text>
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
              </Container>
            </li>
          ))

    )
}