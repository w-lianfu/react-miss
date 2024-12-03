import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Paper, Box, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  MdHome, MdFavorite, MdSecurity, MdSettings,
} from 'react-icons/md';

import Color from '@tool/color';
import Size from '@tool/size';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'grid',
  alignItems: 'end',
});

const DBox = styled(Box)({
  position: 'relative',
  display: 'flex',
  width: '100%',
  height: `${Size.appNav}rem`,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: Color.black(1),
});

const DIconButton = styled(IconButton)({
  margin: '0 0.6rem',
});

const AppNav = (props: IProps, state: IState) => {
  const navi = useLocation();
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    console.log('pathname -- ', navi.pathname);
    if (navi.pathname === '/love') {
      setPathname('love');
    } else if (navi.pathname === '/security') {
      setPathname('security');
    } else if (navi.pathname === '/setting') {
      setPathname('setting');
    } else {
      setPathname('home');
    }

    return () => {};
  }, [navi.pathname]);

  return (
    <DPaper>
      <DBox>
        <Link to="/home">
          <DIconButton>
            <MdHome color={
              pathname === 'home' ? Color.black(1) : Color.primary(1)
            } />
          </DIconButton>
        </Link>
        <Link to="/love">
          <DIconButton>
            <MdFavorite color={
              pathname === 'love' ? Color.black(1) : Color.primary(1)
            } />
          </DIconButton>
        </Link>
        <Link to="/security">
          <DIconButton>
            <MdSecurity color={
              pathname === 'security' ? Color.black(1) : Color.primary(1)
            } />
          </DIconButton>
        </Link>
        <Link to="/setting">
          <DIconButton>
            <MdSettings color={
              pathname === 'setting' ? Color.black(1) : Color.primary(1)
            } />
          </DIconButton>
        </Link>
      </DBox>
    </DPaper>
  );
};

export default observer(AppNav);
