import React, { useEffect, useState } from 'react';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple, grey } from '@mui/material/colors';

import Color from '@tool/color';
import Size from '@tool/size';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({
  display: 'flex',
  position: 'fixed',
  right: 0,
  top: Size.topHeight,
  bottom: Size.statusHeight,
  width: Size.rightWidth,
  zIndex: 50,
  backgroundColor: Color.black(1),
});

const AppRight = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper />
  );
};

export default AppRight;
