import React, { useEffect, useState } from 'react';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

import Color from '@tool/color';
import Size from '@tool/size';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({
  display: 'flex',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: Size.topHeight,
  zIndex: 50,
  backgroundColor: pink.A400,
});

const AppTop = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper />
  );
};

export default AppTop;
