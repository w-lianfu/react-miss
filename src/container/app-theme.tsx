import React, { useEffect, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import '@scss/index.scss';
import Theme from '@theme/index';

interface IProps {
  children: ReactNode,
}
interface IState {}

const AppTheme = (props: IProps, state: IState) => {
  const { children } = props;

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <ThemeProvider theme={Theme}>{children}</ThemeProvider>
  );
};

export default AppTheme;
