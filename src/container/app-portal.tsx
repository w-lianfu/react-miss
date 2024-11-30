import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';

interface IProps {}
interface IState {}

const AppPortal = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Paper>
      <h1>~~~ Portal ~~~</h1>
    </Paper>
  );
};

export default AppPortal;
