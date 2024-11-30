import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

import Color from '@tool/color';
import Size from '@tool/size';

interface IProps {}
interface IState {}

const DBox = styled(Box)({
  display: 'flex',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: Size.topHeight,
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
  fontSize: '1.2rem',
  zIndex: 50,
  color: Color.white(1),
  backgroundColor: Color.black(1),
});

const AppTop = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DBox>一滴泪，滴入河流，汇入大海，凝入云朵，化为雨滴，落在你的脸颊...</DBox>
  );
};

export default observer(AppTop);
