import {
  createTheme,
  type PaletteColor,
  type PaletteColorOptions,
} from '@mui/material';

// Configuration for the custom theme being used for Material UI for React
// The default theme object's properties that can be overidden are described at this link:
// https://mui.com/material-ui/customization/default-theme/
// This video explains how to do this in more detail: https://www.youtube.com/watch?v=ZyQlpX7lCRE
const breakpoints = createTheme().breakpoints; // Takes the breakpoints from the default theme

export const customTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'hsl(221, 27%, 14.5%)',
    },
    secondary: {
      main: 'hsl(190, 100%, 42%)',
    },
    background: {
      paper: 'hsl(214, 30%, 9%)',
      default: '#0f121a',
    },
    deepBackground: {
      main: 'hsl(214, 30%, 9%)',
    },
  },
  shape: {
    borderRadius: 7,
  },
  typography: {
    h1: {
      fontWeight: 600,
      fontSize: '3.75rem',
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
      [breakpoints.down('md')]: {
        fontSize: '2rem',
      },
      [breakpoints.down('sm')]: {
        fontSize: '1.4rem',
      },
    },
    h3: {
      fontSize: '2rem',
      [breakpoints.down('md')]: {
        fontSize: '1.8rem',
      },
      [breakpoints.down('sm')]: {
        fontSize: '1.5rem',
      },
    },
    body1: {
      fontSize: '1.3rem',
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    deepBackground?: PaletteColor;
  }

  interface PaletteOptions {
    deepBackground?: PaletteColorOptions;
  }
}
