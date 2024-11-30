import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import '@scss/index.scss';
import lock, { toggleLock } from './store/app-lock';
import AppTheme from './app-theme';
import AppDial from './app-dial';
import AppLock from './app-lock';
import AppTop from '@comp/app-top/index';
import AppStatus from '@comp/app-status/index';
import AppMenu from '@comp/app-menu/index';
import AppRight from '@comp/app-right/index';
import Home from '@page/home/index';

interface IProps {}
interface IState {}

const AppRoot = (props: IProps, state: IState) => {
  const { isLock } = lock;

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
      {isLock ? <AppLock /> : null}
      <AppDial />
    </AppTheme>
  );
};

export default observer(AppRoot);
