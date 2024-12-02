import React, { useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

// import '@scss/index.scss';
import Color from '@tool/color';
import Size from '@tool/size';
import lock, { toggleLock } from './store/app-lock';
import AppTheme from './app-theme';
import AppDial from './app-dial';
import AppLock from './app-lock';
import AppTop from '@comp/app-top/index';
import AppStatus from '@comp/app-status/index';
import AppMenu from '@comp/app-menu/index';
import AppRight from '@comp/app-right/index';

interface IProps {
  children: ReactNode,
}
interface IState {}

const DPaper = styled(Paper)({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  // margin: `${Size.topHeight} ${Size.rightWidth} ${Size.statusHeight} ${Size.menuWidth}`,
  padding: '1rem',
  overflowY: 'auto',
});

const AppRoot = (props: IProps, state: IState) => {
  const { children } = props;
  const navi = useNavigate();
  const { isLock } = lock;

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <AppTheme>
      <AppTop />
      <AppMenu />
      <DPaper>{children}</DPaper>
      <AppRight />
      <AppStatus />
      {isLock ? <AppLock /> : null}
      <AppDial />
    </AppTheme>
  );
};

export default observer(AppRoot);
