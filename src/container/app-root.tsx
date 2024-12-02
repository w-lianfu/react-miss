import React, { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';
import Size from '@tool/size';
import AppTheme from './app-theme';
import AppPage from './app-page';
import AppLock from './app-lock';
import AppTop from '@comp/app-top/index';
import AppNav from '@comp/app-nav/index';
import AppStatus from '@comp/app-status/index';
import AppDial from './app-dial';
import lock from './store/app-lock';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({
  position: 'relative',
  display: 'grid',
  gridTemplateRows: `${Size.appTop + Size.appNav}rem 1fr`,
});

const AppPaper = (props: IProps, state: IState) => {
  const { isLock } = lock;

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <HashRouter>
      <AppTheme>
        <AppTop />
        <AppPage />
        <AppStatus />
        <AppDial />
        {isLock ? <AppLock /> : null}
      </AppTheme>
    </HashRouter>
  );
};

export default observer(AppPaper);
