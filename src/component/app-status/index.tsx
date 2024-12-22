import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';

import Color from '@tool/color';
import Size from '@tool/size';

interface IProps {}
interface IState {}

const DBox = styled(Box)({
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  height: `${Size.appStatus}rem`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 55,
  lineHeight: 1,
  fontSize: '1.2rem',
  color: Color.white(1),
  backgroundColor: Color.black(1),
});

const AppStatus = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DBox>我愿化为一道光, 穿越银河去旅行...</DBox>
  );
};

export default AppStatus;

