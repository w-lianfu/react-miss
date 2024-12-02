import React, { useEffect } from 'react';
import {
  HashRouter, Routes, Route, useLocation,
} from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Paper, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';
import AppTheme from './app-theme';
import AppTop from '@comp/app-top/index';
import AppMenu from '@comp/app-menu/index';
import AppRight from '@comp/app-right/index';
import AppStatus from '@comp/app-status/index';
import Dashboard from '@page/dashboard/index';
import Home from '@page/home/index';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({
  width: '100%',
  height: '100%',
  position: 'relative',
  display: 'grid',
  gridTemplateRows: '2rem 1fr 2rem',
  overflow: 'hidden',
});

const EPaper = styled(Paper)({
  width: '100%',
  height: '100%',
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '5rem 1fr 1rem',
  overflow: 'hidden',
});

const FPaper = styled(Paper)({
  width: '100%',
  height: '100%',
  padding: '0 1rem',
  position: 'relative',
  overflowY: 'auto',
});

const AppPaper = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <HashRouter>
      <AppTheme>
        <DPaper>
          <AppTop />
          <EPaper>
            <AppMenu />
            <FPaper>
              <Routes>
                <Route index={true} element={<Dashboard />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Dashboard />} />
              </Routes>
            </FPaper>
            <AppRight />
          </EPaper>
          <AppStatus />
        </DPaper>
      </AppTheme>
    </HashRouter>
  );
};

export default observer(AppPaper);
