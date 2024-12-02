import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';
import Size from '@tool/size';

interface IProps {}
interface IState {}

const DBox = styled(Box)({
  position: 'relative',
  width: `${Size.appLeft}rem`,
  height: '100%',
  backgroundColor: Color.black(1),
});

const AppLeft = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DBox />
  );
};

export default observer(AppLeft);
