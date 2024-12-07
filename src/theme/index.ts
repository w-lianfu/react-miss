import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

import Color from '@tool/color';
import MissPalette from './miss-palette';
import MissTypography from './miss-typography';

const Theme = createTheme({
  shape: { borderRadius: 0 },
  palette: MissPalette,
  typography: MissTypography,
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

          '&:hover': { backgroundColor: grey[400] },
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
