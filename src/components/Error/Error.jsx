import { Container, Typography } from "@mui/material";

export const Error = ({ children }) => {
  return ( 
  <Container
  maxWidth='sm'
 sx={{
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   
    textAlign:'center',
    color:'#794aa2',
 }}
>
 <Typography variant="h5">{children}</Typography>

  </Container>
  
  )
  
};
