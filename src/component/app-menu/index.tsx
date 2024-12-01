import React, { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Paper, Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import {
  MdDashboard, MdHome, MdPark, MdLock, MdLockOpen,
  MdToken, MdSettings, MdSecurity,
} from 'react-icons/md';

import Color from '@tool/color';
import Size from '@tool/size';
import lock, { toggleLock } from '@con/store/app-lock';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({
  position: 'fixed',
  left: 0,
  top: Size.topHeight,
  bottom: Size.statusHeight,
  width: Size.menuWidth,
  display: 'flex',
  justifyContent: 'space-between',
  zIndex: 50,
  backgroundColor: Color.secondary(1),
});

const DBox = styled(Box)({
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const EBox = styled(DBox)({
  paddingBottom: '1rem',
});

const DIconButton = styled(IconButton)({
  fontSize: '2.4rem',
  marginTop: '1rem',
});

const EIconButton = styled(IconButton)({
  marginBottom: '1rem',
});

const AppMenu = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <DBox>
        <Link to="/">
          <DIconButton color="primary">
            <MdDashboard />
          </DIconButton>
        </Link>
        <Link to="/home">
          <DIconButton color="primary">
            <MdHome />
          </DIconButton>
        </Link>
        <DIconButton color="primary">
          <MdPark />
        </DIconButton>
      </DBox>
      <EBox>
        <DIconButton color="primary" onClick={() => toggleLock(true)}>
          <MdLock />
        </DIconButton>
        <DIconButton color="primary">
          <MdToken />
        </DIconButton>
        <DIconButton color="primary">
          <MdSecurity />
        </DIconButton>
        <DIconButton color="primary">
          <MdSettings />
        </DIconButton>
      </EBox>
    </DPaper>
  );
};

export default AppMenu;
