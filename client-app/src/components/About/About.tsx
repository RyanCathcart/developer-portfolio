import '../../styles/App.css';
import { Box, Container, Grid, Typography } from '@mui/material';
import Bio from './Bio';
import Skills from './Skills';
import { customTheme } from '../../styles/customTheme';

export default function About() {
  return (
    <Box className='About' sx={{ backgroundColor: customTheme.palette.background.default, minHeight: '100vh', py: 8 }}>
      <Container maxWidth='lg'>
        <Typography variant='h2' color='white' gutterBottom sx={{ fontWeight: 'bold' }}>
          ABOUT
        </Typography>

        <Grid container spacing={2} alignItems='stretch'>
          <Grid item xs={12} sm={4}>
            <Bio />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Skills />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
