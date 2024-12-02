import React, { useEffect } from 'react';
import {
  Routes, Route, useLocation,
} from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Paper, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';
import AppLeft from '@comp/app-left/index';
import AppRight from '@comp/app-right/index';
import AppStatus from '@comp/app-status/index';
import Dashboard from '@page/dashboard/index';
import Home from '@page/home/index';
import Love from '@page/love/index';
import Security from '@page/security/index';
import Setting from '@page/setting/index';
import lock from './store/app-lock';

interface IProps {}
interface IState {}

const EPaper = styled(Paper)({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: '0.2rem 1fr 0.2rem',
  overflow: 'hidden',
});

const FPaper = styled(Paper)({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflowY: 'auto',
});

const AppPage = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <EPaper>
      <AppLeft />
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
    </EPaper>
  );
};

export default observer(AppPage);
