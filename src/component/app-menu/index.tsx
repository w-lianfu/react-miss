import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Paper, Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import {
  MdDashboard, MdHome, MdPark, MdLock, MdLockOpen,
  MdToken, MdSettings, MdSecurity, MdFavorite,
} from 'react-icons/md';

import Color from '@tool/color';
import Size from '@tool/size';
import lock, { toggleLock } from '@con/store/app-lock';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({
  position: 'relative',
  // bottom: Size.statusHeight,
  // width: Size.menuWidth,
  height: '100%',
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
  const location = useLocation();
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    console.log('location.pathname -- ', location.pathname);
    setPathname(location.pathname);

    return () => {};
  }, [pathname]);

  return (
    <DPaper>
      <DBox>
        <Link to="/">
          <DIconButton color={pathname === '/' ? 'secondary' : 'primary'}>
            <MdDashboard />
          </DIconButton>
        </Link>
        <Link to="/home">
          <DIconButton color={pathname === '/home' ? 'secondary' : 'primary'}>
            <MdHome />
          </DIconButton>
        </Link>
        <Link to="/love">
          <DIconButton color={pathname === '/love' ? 'secondary' : 'primary'}>
            <MdFavorite />
          </DIconButton>
        </Link>
      </DBox>
      <EBox>
        <DIconButton color="primary" onClick={() => toggleLock(true)}>
          <MdLock />
        </DIconButton>
        <Link to="/security">
          <DIconButton color={pathname === '/security' ? 'secondary' : 'primary'}>
            <MdSecurity />
          </DIconButton>
        </Link>
        <Link to="/setting">
          <DIconButton color={pathname === '/setting' ? 'secondary' : 'primary'}>
            <MdSettings />
          </DIconButton>
        </Link>
      </EBox>
    </DPaper>
  );
};

export default AppMenu;
