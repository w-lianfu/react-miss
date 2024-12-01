import React, { useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

// import '@scss/index.scss';
import lock, { toggleLock } from './store/app-lock';
import AppTheme from './app-theme';
import AppDial from './app-dial';
import AppLock from './app-lock';
import AppTop from '@comp/app-top/index';
import AppStatus from '@comp/app-status/index';
import AppMenu from '@comp/app-menu/index';
import AppRight from '@comp/app-right/index';
import Dashboard from '@page/dashboard/index';
import Home from '@page/home/index';

interface IProps {
  children: ReactNode,
}
interface IState {}

const AppRoot = (props: IProps, state: IState) => {
  const { children } = props;
  const navi = useNavigate();
  const { isLock } = lock;

  useEffect(() => {
    console.log('navigate -- ', navi);
    return () => {};
  }, []);

  return (
    <AppTheme>
      <AppTop />
      <AppMenu />
      <>{children}</>
      <AppRight />
      <AppStatus />
      {isLock ? <AppLock /> : null}
      <AppDial />
    </AppTheme>
  );
};

export default observer(AppRoot);
