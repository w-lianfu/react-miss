import React, { useEffect, KeyboardEvent } from 'react';

import '@scss/index.scss';
import AppTheme from './app-theme';
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
