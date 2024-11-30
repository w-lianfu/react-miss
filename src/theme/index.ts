import { createTheme } from '@mui/material/styles';
import {
  red, purple, pink, blue, green, orange,
  deepPurple, deepOrange, grey,
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
    fontFamily: '"-apple-system", "BlinkMacSystemFont", "Noto Sans",\
      "Droid Sans Mono", "PingFang SC", "system-ui"',
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
      fontWeight: 400,
    },
    body2: {
      fontSize: '1.4rem',
      lineHeight: 1.5,
      letterSpacing: '0.02rem',
      fontWeight: 400,
    },
    caption: {
      fontSize: '1.4rem',
      lineHeight: 1.5,
      letterSpacing: '0.02rem',
      fontWeight: 400,
    },
    overline: {
      fontSize: '1.4rem',
      lineHeight: 1.5,
      letterSpacing: '0.02rem',
      textTransform: 'none',
      fontWeight: 400,
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
      fontWeight: 400,
      lineHeight: 1.3,
      letterSpacing: 0,
    },
    h4: {
      fontSize: '3.6rem',
      fontWeight: 400,
      lineHeight: 1.3,
      letterSpacing: 0,
    },
    h5: {
      fontSize: '3rem',
      fontWeight: 400,
      lineHeight: 1.3,
      letterSpacing: 0,
    },
    h6: {
      fontSize: '2rem',
      fontWeight: 400,
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

          '& .MuiBox-root': {
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap',
          },
        },
      },
    },
    MuiStack: {
      defaultProps: { component: 'section' },
      styleOverrides: {
        root: { position: 'relative' },
      },
    },
    MuiSpeedDial: {
      styleOverrides: {
        root: {
          position: 'relative',
          width: '5.6rem',

          '& .MuiSpeedDial-actions': {
            marginBottom: 0,
            paddingBottom: '1.2rem',
          },
          '& .MuiSpeedDial-fab': {
            position: 'relative',
            width: '5.6rem',
            height: '5.6rem',
          },
          '& .MuiSpeedDialAction-fab': {
            position: 'relative',
            width: '4.6rem',
            height: '4.6rem',
            margin: '0.8rem',
            fontSize: '2rem',
            color: Color.primary(1),
            backgroundColor: Color.white(1),
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '0.8rem',
          backgroundColor: Color.white(1),

          '&:hover': { backgroundColor: grey[300] },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        textPrimary: {
          backgroundColor: Color.primary(0.2),
          '&:hover': { backgroundColor: Color.primary(0.3) },
        },
        textSecondary: {
          backgroundColor: Color.secondary(0.2),
          '&:hover': { backgroundColor: Color.secondary(0.3) },
        },
        textSuccess: {
          backgroundColor: Color.success(0.2),
          '&:hover': { backgroundColor: Color.success(0.3) },
        },
        textInfo: {
          backgroundColor: Color.info(0.2),
          '&:hover': { backgroundColor: Color.info(0.3) },
        },
        textWarning: {
          backgroundColor: Color.warning(0.2),
          '&:hover': { backgroundColor: Color.warning(0.3) },
        },
        textError: {
          backgroundColor: Color.error(0.2),
          '&:hover': { backgroundColor: Color.error(0.3) },
        },
      },
      variants: [
        {
          props: {
            variant: 'dashed',
            color: 'primary',
          },
          style: {
            color: Color.primary(1),
            border: `0.1rem dashed ${Color.primary(1)}`,
          },
        },
        {
          props: {
            variant: 'dashed',
            color: 'secondary',
          },
          style: {
            color: Color.secondary(1),
            border: `0.1rem dashed ${Color.secondary(1)}`,
          },
        },
        {
          props: {
            variant: 'dashed',
            color: 'success',
          },
          style: {
            color: Color.success(1),
            border: `0.1rem dashed ${Color.success(1)}`,
          },
        },
        {
          props: {
            variant: 'dashed',
            color: 'info',
          },
          style: {
            color: Color.info(1),
            border: `0.1rem dashed ${Color.info(1)}`,
          },
        },
        {
          props: {
            variant: 'dashed',
            color: 'warning',
          },
          style: {
            color: Color.warning(1),
            border: `0.1rem dashed ${Color.warning(1)}`,
          },
        },
        {
          props: {
            variant: 'dashed',
            color: 'error',
          },
          style: {
            color: Color.error(1),
            border: `0.1rem dashed ${Color.error(1)}`,
          },
        },
        {
          props: {
            variant: 'dashed',
            color: 'oliver',
          },
          style: {
            color: Color.oliver(1),
            border: `0.1rem dashed ${Color.oliver(1)}`,
          },
        },
        {
          props: {
            variant: 'dashed',
            color: 'green',
          },
          style: {
            color: Color.green(1),
            border: `0.1rem dashed ${Color.green(1)}`,
          },
        },
        {
          props: {
            variant: 'dashed',
            color: 'black',
          },
          style: {
            color: Color.black(1),
            border: `0.1rem dashed ${Color.black(1)}`,
          },
        },
        {
          props: {
            variant: 'dashed',
            color: 'dark',
          },
          style: {
            color: Color.dark(1),
            border: `0.1rem dashed ${Color.dark(1)}`,
          },
        },
        {
          props: {
            variant: 'dashed',
            color: 'gray',
          },
          style: {
            color: Color.gray(1),
            border: `0.1rem dashed ${Color.gray(1)}`,
          },
        },
        {
          props: {
            variant: 'dashed',
            color: 'white',
          },
          style: {
            color: Color.white(1),
            border: `0.1rem dashed ${Color.white(1)}`,
          },
        },
      ],
    },
  },
});

export default Theme;
