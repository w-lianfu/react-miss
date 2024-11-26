import React, { useEffect } from 'react';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({
  display: 'flex',
  width: '100%',
  height: '100%',
  backgroundColor: blue.A400,
});

const AppMenu = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper />
  );
};

export default AppMenu;
