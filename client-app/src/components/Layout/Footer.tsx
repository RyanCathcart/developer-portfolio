import { Box, IconButton, Typography } from '@mui/material';
import { customTheme } from '../../styles/customTheme';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { handleClick } from '../../util/util';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 4,
        paddingBottom: 4,
      }}
    >
      <Box sx={{ paddingBottom: 2 }}>
        <IconButton
          onClick={() => {
            handleClick('https://github.com/RyanCathcart');
          }}
        >
          <GitHubIcon htmlColor='hsl(0, 0%, 50%)' />
        </IconButton>
        <IconButton
          onClick={() => {
            handleClick('https://www.linkedin.com/in/ryan-cathcart-4b4503128/');
          }}
        >
          <LinkedInIcon htmlColor='hsl(0, 0%, 50%)' />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Typography variant='body2' color='hsl(0, 0%, 50%)' align='center'>
          RYAN CATHCART&nbsp;
        </Typography>
        <Typography
          variant='body2'
          color={customTheme.palette.secondary.main}
          align='center'
        >
          ©{new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
}
