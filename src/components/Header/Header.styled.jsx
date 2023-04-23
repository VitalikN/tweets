import styled from '@emotion/styled';
import { AppBar as Header } from '@mui/material';

export const AppBar = styled(Header)`
  background-color: #3b2f63;
  background-image: radial-gradient(
      circle at 50% top,
      rgba(84, 90, 182, 0.6) 0%,
      rgba(84, 90, 182, 0) 75%
    ),
    radial-gradient(circle at right top, #794aa2 0%, rgba(121, 74, 162, 0) 57%);
  
`;
