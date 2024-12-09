import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Paper, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';
import Size from '@tool/size';
import AppLeft from '@comp/app-left/index';
import AppRight from '@comp/app-right/index';
import AppNav from '@comp/app-nav/index';
import Home from '@page/home/index';
import MV from '@page/mv/index';
import MP3 from '@page/mp3/index';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({
  position: 'relative',
  display: 'grid',
  gridTemplateRows: `${Size.appTop}rem 1fr`,
});

const AppPage = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Routes>
      <Route index={true} element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/mv" element={<MV />} />
      <Route path="/mp3" element={<MP3 />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default observer(AppPage);
