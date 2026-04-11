import { Box, Button, Typography, keyframes } from '@mui/material';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';
import { customTheme } from '../../styles/customTheme';
import { Link } from 'react-scroll';
import P5Canvas from '../Hero/P5Canvas';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
  `;

  useEffect(() => {
    function handleResize() {
      setViewportHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box
      className='Hero Home'
      height={viewportHeight}
      sx={{
        position: 'relative',
        width: 'auto',
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        boxShadow: `0 -10vh 5vh -5vh ${customTheme.palette.deepBackground?.main} inset `,
      }}
    >
      <P5Canvas />
      <Box flexDirection='column' sx={{ animation: `${fadeIn} 5s` }}>
        <Box>
          <Box>
            <Typography color='white' variant='h1' display='inline-block'>
              Hi, I'm&nbsp;
            </Typography>
            <Typography color='secondary' variant='h1' display='inline-block'>
              Ryan Cathcart
            </Typography>
            <Typography color='white' variant='h1' display='inline-block'>
              ,
            </Typography>
          </Box>
          <Box
            display='flex'
            color='white'
            fontWeight='bold'
            textAlign='center'
            height='5rem'
          >
            <Box overflow='hidden' position='relative'>
              <Typography variant='h1' className='role'>
                a full-stack web developer.
              </Typography>
              <Typography variant='h1' className='role'>
                a software engineer.
              </Typography>
              <Typography variant='h1' className='role'>
                a native app developer.
              </Typography>
              <Typography variant='h1' className='role'>
                an open source contributor.
              </Typography>
              <Typography variant='h1' className='role'>
                a problem solver.
              </Typography>
              <Typography variant='h1' className='role'>
                a full-stack web developer.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Link to='About' smooth={true}>
          <Button
            variant='outlined'
            size='large'
            color='secondary'
            endIcon={<ArrowDownwardRoundedIcon />}
            sx={{ mt: 4, py: 1.5 }}
          >
            View my work&nbsp;
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
