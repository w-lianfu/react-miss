import Color from '@tool/color';

declare module '@mui/material/styles' {
  interface Palette {
    oliver: Palette['primary'];
    green: Palette['primary'];
    black: Palette['primary'];
    dark: Palette['primary'];
    gray: Palette['primary'];
    white: Palette['primary'];
  }

  interface PaletteOptions {
    oliver: PaletteOptions['primary'];
    green: PaletteOptions['primary'];
    black: PaletteOptions['primary'];
    dark: PaletteOptions['primary'];
    gray: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    oliver: true;
    green: true;
    black: true;
    dark: true;
    gray: true;
    white: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}
