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
  position: 'relative',
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
    <DBox>你是病, 渗入血液, 侵入骨髓, 扎进心底, 百年缠身...</DBox>
  );
};

export default observer(AppTop);
