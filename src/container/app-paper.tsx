import React, { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Paper, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';
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
  width: '100%',
  height: '100%',
  position: 'relative',
  display: 'grid',
  gridTemplateRows: '2rem 5rem 1fr',
  overflow: 'hidden',
});

const AppPaper = (props: IProps, state: IState) => {
  const { isLock } = lock;

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <HashRouter>
      <AppTheme>
        <DPaper>
          <AppTop />
          <AppNav />
          <AppPage />
          <AppStatus />
        </DPaper>
        <AppDial />
        {isLock ? <AppLock /> : null}
      </AppTheme>
    </HashRouter>
  );
};

export default observer(AppPaper);
