import React, { useEffect } from 'react';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

import Color from '@tool/color';
import Size from '@tool/size';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({
  display: 'flex',
  position: 'fixed',
  left: 0,
  top: Size.topHeight,
  bottom: Size.statusHeight,
  width: Size.menuWidth,
  zIndex: 50,
  backgroundColor: blue.A400,
});

const AppMenu = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper />
  );
};

export default AppMenu;
