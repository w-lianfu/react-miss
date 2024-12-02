import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Paper, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';
import Size from '@tool/size';
import AppLeft from '@comp/app-left/index';
import AppRight from '@comp/app-right/index';
import Dashboard from '@page/dashboard/index';
import Home from '@page/home/index';
import Love from '@page/love/index';
import Security from '@page/security/index';
import Setting from '@page/setting/index';

interface IProps {}
interface IState {}

const EPaper = styled(Paper)({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: `${Size.appLeft}rem 1fr ${Size.appRight}rem`,
});

const FPaper = styled(Paper)({
  position: 'relative',
  width: '100%',
  height: '100%',
});

const AppPage = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <EPaper>
      <AppLeft />
      <Routes>
        <Route index={true} element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/love" element={<Love />} />
        <Route path="/security" element={<Security />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
      <AppRight />
    </EPaper>
  );
};

export default observer(AppPage);
