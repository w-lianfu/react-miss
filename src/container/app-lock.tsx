import React, { useEffect } from 'react';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';

interface IProps {}
interface IState {}

const AppLock = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Paper>
      <Button variant="contained" color="primary">Hello</Button>
    </Paper>
  );
};

export default AppLock;
