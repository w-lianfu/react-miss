import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  position: 'fixed',
  display: 'flex',
  height: `${Size.appNav}rem`,
  top: `${Size.appTop}rem`,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 50,
  borderTop: `0.1rem solid ${Color.white(1)}`,
  backgroundColor: Color.black(1),
});
const DBox = styled(Box)({});
const DIconButton = styled(IconButton)({
  margin: '0 0.6rem',
});

const AppNav = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <DBox>
        <Link to="/home">
          <DIconButton color="primary"><MdHome /></DIconButton>
        </Link>
        <Link to="/love">
          <DIconButton color="primary"><MdFavorite /></DIconButton>
        </Link>
        <Link to="/security">
          <DIconButton color="primary"><MdSecurity /></DIconButton>
        </Link>
        <Link to="/setting">
          <DIconButton color="primary"><MdSettings /></DIconButton>
        </Link>
      </DBox>
    </DPaper>
  );
};

export default observer(AppNav);
