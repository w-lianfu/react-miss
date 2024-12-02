import React, { useEffect } from 'react';
import {
  Routes, Route, useLocation,
} from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Paper, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';
import AppMenu from '@comp/app-menu/index';
import AppRight from '@comp/app-right/index';
import Dashboard from '@page/dashboard/index';
import Home from '@page/home/index';
import Love from '@page/love/index';
import Security from '@page/security/index';
import Setting from '@page/setting/index';
import lock from './store/app-lock';

interface IProps {}
interface IState {}

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

const AppPage = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <EPaper>
        <AppMenu />
        <FPaper>
          <Routes>
            <Route index={true} element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/love" element={<Love />} />
            <Route path="/security" element={<Security />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </FPaper>
        <AppRight />
      </EPaper>
    </>
  );
};

export default observer(AppPage);
