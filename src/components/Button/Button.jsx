import { Box } from '@mui/material';
import { Button } from 'components/Styled.styled';

export const Btn = ({ loadMore }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Button onClick={loadMore}>loadMore</Button>
  </Box>
);
