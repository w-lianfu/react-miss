import React, { useEffect } from 'react';
import { Paper } from '@mui/material';

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
