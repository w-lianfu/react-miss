import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import '@scss/index.scss';
import AppTheme from './app-theme';
import Theme from '@theme/index';
import AppPage from './app-page';

interface IProps {}
interface IState {}

const AppRoot = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <AppTheme>
      <AppPage />
    </AppTheme>
  );
};

export default AppRoot;
