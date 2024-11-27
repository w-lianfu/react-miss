import React, { useEffect, KeyboardEvent } from 'react';

import '@scss/index.scss';
import AppTheme from './app-theme';
import AppDial from './app-dial';
import AppTop from '@comp/app-top/index';
import AppStatus from '@comp/app-status/index';
import AppMenu from '@comp/app-menu/index';
import AppRight from '@comp/app-right/index';
import Home from '@page/home/index';

interface IProps {}
interface IState {}

const AppRoot = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <AppTheme>
      <AppTop />
      <AppMenu />
      <Home />
      <AppRight />
      <AppStatus />
      <AppDial />
    </AppTheme>
  );
};

export default AppRoot;
