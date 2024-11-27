import { createTheme } from '@mui/material/styles';
import {
  red, purple, pink, blue, green, orange,
  deepPurple, deepOrange,
} from '@mui/material/colors';

import Color from '@tool/color';

const Theme = createTheme({
  shape: {
    borderRadius: 0,
  },
  palette: {
    common: {
      black: '#010101FF',
      white: '#FAFAFAFF',
    },
    primary: {
      main: pink.A400, // #F50057FF
      dark: red.A400, // #FF1744FF
    },
    secondary: {
      main: blue.A700, // #2962FFFF
      dark: deepPurple.A400, // #651FFFFF
    },
    success: {
      main: green[800], // #2E7D32FF
      dark: green[900], // #1B5E20FF
    },
    info: {
      main: purple.A400, // D500F9FF
      dark: purple.A700, // AA00FFFF
      contrastText: Color.white(1),
    },
    warning: {
      main: orange[800], // #EF6C00FF
      dark: orange[900], // #E65100FF
      contrastText: '#FFF',
    },
    error: {
      main: deepOrange.A400, // FF3D00FF
      dark: deepOrange.A700, // DD2C00FF
      contrastText: Color.white(1),
    },
    oliver: {
      main: '#B3EE3AFF',
    },
    green: {
      main: '#4EEE94FF',
    },
    black: {
      main: '#010101FF',
      contrastText: Color.white(1),
    },
    dark: {
      main: '#333F',
      contrastText: Color.white(1),
    },
    gray: {
      main: '#616161FF',
      contrastText: Color.white(1),
    },
    white: {
      main: '#FAFAFAFF',
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: '"Noto Sans", "Droid Sans Mono", "PingFang SC"',
    button: {
      fontSize: '1.4rem',
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: '0.04rem',
      textTransform: 'none',
    },
    body1: {
      fontSize: '1.4rem',
      lineHeight: 1.5,
      letterSpacing: '0.02rem',
    },
    body2: {
      fontSize: '1.4rem',
      lineHeight: 1.5,
      letterSpacing: '0.02rem',
    },
    caption: {
      fontSize: '1.4rem',
      lineHeight: 1.5,
      letterSpacing: '0.02rem',
    },
    overline: {
      fontSize: '1.4rem',
      lineHeight: 1.5,
      letterSpacing: '0.02rem',
    },
    subtitle1: {
      fontSize: '1.4rem',
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0.02rem',
    },
    subtitle2: {
      fontSize: '1.4rem',
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: '0.02rem',
    },
    h1: {
      fontSize: '5rem',
      fontWeight: 400,
      lineHeight: 1.3,
      letterSpacing: 0,
    },
    h2: {
      fontSize: '4.6rem',
      fontWeight: 400,
      lineHeight: 1.3,
      letterSpacing: 0,
    },
    h3: {
      fontSize: '4rem',
      fontWeight: 500,
      lineHeight: 1.3,
      letterSpacing: 0,
    },
    h4: {
      fontSize: '3.6rem',
      fontWeight: 500,
      lineHeight: 1.3,
      letterSpacing: 0,
    },
    h5: {
      fontSize: '3rem',
      fontWeight: 500,
      lineHeight: 1.3,
      letterSpacing: 0,
    },
    h6: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.3,
      letterSpacing: 0,
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        square: true,
        elevation: 0,
        component: 'section',
      },
      styleOverrides: {
        root: {
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundColor: Color.white(1),
        },
      },
    },
  },
});

export default Theme;
