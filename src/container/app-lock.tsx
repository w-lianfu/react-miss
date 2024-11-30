import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Paper, Box, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MdLockOpen } from 'react-icons/md';

import Color from '@tool/color';
import lock, { toggleLock } from './store/app-lock';

interface IProps {}
interface IState {}

const DBox = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 55,
  backdropFilter: 'blur(0.4rem)',
  backgroundColor: Color.black(0.9),
});

const AppLock = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DBox>
      <IconButton color="primary" onClick={() => toggleLock(false)}>
        <MdLockOpen />
      </IconButton>
    </DBox>
  );
};

export default observer(AppLock);
