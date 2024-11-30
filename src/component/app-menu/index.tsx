import React, { useEffect } from 'react';
import { Paper, Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import {
  MdDashboard, MdHome, MdPark, MdToken, MdSettings, MdSecurity,
} from 'react-icons/md';

import Color from '@tool/color';
import Size from '@tool/size';

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
  backgroundColor: blue.A400,
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
        <DIconButton color="primary">
          <MdDashboard />
        </DIconButton>
        <DIconButton color="primary">
          <MdHome />
        </DIconButton>
        <DIconButton color="primary">
          <MdPark />
        </DIconButton>
      </DBox>
      <EBox>
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
