import '../../styles/App.css';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { frontendSkills, backendSkills, otherSkills } from './skillData';
import SkillList from './SkillList';

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-20% 0px',
  });

  return (
    <Box
      className='Skills'
      sx={{
        pt: 8,
        pb: { xs: 20, md: 32 },
        background:
          'linear-gradient(5deg, hsl(194, 70%, 12%) -80%, rgba(15, 18, 26, 1) 80%)',
      }}
    >
      <Container
        maxWidth='lg'
        ref={ref}
        sx={{
          opacity: inView ? 1 : 0,
          translate: inView ? '0px' : '100px',
          filter: inView ? 'none' : 'blur(3px)',
          transition: '1s ease-in-out',
        }}
      >
        <Typography
          variant='h2'
          color='secondary'
          align='center'
          sx={{ pb: 1, fontWeight: 'bold' }}
        >
          SKILLS
        </Typography>
        <Typography
          variant='subtitle1'
          color='secondary'
          align='center'
          sx={{ pb: { xs: 6, md: 10 } }}
        >
          <Box>
            These are the skills I have developed while dedicating myself to
            becoming a full-stack developer:
          </Box>
        </Typography>

        <Grid container spacing={8}>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <SkillList title='Front End' content={frontendSkills} />
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <SkillList title='Back End' content={backendSkills} />
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <SkillList title='Other' content={otherSkills} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
