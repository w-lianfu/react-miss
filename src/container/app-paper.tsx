import React, { useEffect } from 'react';
import {
  HashRouter, Routes, Route, useLocation,
} from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Paper, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';
import Dashboard from '@page/dashboard/index';
import Home from '@page/home/index';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({});

const AppPaper = (props: IProps, state: IState) => {
  const location = useLocation();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route index={true} element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </HashRouter>
  );
};

export default observer(AppPaper);
