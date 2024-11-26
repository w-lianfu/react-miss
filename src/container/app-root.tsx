import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import '@scss/index.scss';
import Theme from '@theme/index';
import Home from '@page/home/index';

interface IProps {}
interface IState {}

const AppRoot = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <Home />
    </ThemeProvider>
  );
};

export default AppRoot;
