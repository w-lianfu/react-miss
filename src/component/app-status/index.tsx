import React, { useEffect } from 'react';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({
  display: 'flex',
  width: '100%',
  height: '100%',
  backgroundColor: deepOrange.A400,
});

const AppStatus = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper />
  );
};

export default AppStatus;

