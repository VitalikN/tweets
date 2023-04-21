import { Box, CircularProgress } from '@mui/material';

export const Spinner = () => {
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <CircularProgress disableShrink />
  </Box>;
};
