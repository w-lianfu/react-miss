import React, { useEffect, SyntheticEvent } from 'react';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import Home from '@page/home/index';

interface IProps {}
interface IState {}

const AppPage = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Home />
  );
};

export default AppPage;

