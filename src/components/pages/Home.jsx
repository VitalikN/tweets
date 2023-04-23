import { GitHub, LinkedIn } from '@mui/icons-material';
import { Box, Container, Link, Typography } from '@mui/material';
const Home = () => {
  return (
    <Container
       maxWidth='sm'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt:4,
         textAlign:'center',
         color:'#794aa2',
      }}
    >
      <Typography variant="h4"> Always beside you!!</Typography>
   
      <Typography variant="h6"  >
        If you have any questions you can see the working code on my page
        GITHUB. You can also contact me directly via LINKEDIN - I'm happy to
        help you!
      </Typography>
    
      <Box sx={{ mt: 4 }}>
        <Link href="https://github.com/VitalikN/tweets" sx={{ p: 2, mr: 2 }}>
          <GitHub sx={{ fontSize: 30, color: '#794aa2' }} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/vitalii-nozhenko/"
          sx={{ p: 2, ml: 2 }}
        >
          <LinkedIn sx={{ fontSize: 30, color: '#794aa2' }} />
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
