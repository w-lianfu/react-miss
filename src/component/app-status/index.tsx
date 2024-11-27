import React, { useEffect } from 'react';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';

import Color from '@tool/color';
import Size from '@tool/size';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({
  display: 'flex',
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  height: Size.statusHeight,
  zIndex: 50,
  backgroundColor: deepOrange.A400,
});

const AppStatus = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper />
  );
};

export default AppStatus;

