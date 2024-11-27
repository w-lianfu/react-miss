import React, { useEffect, SyntheticEvent } from 'react';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import Home from '@page/home/index';
import AppTop from '@comp/app-top/index';
import AppStatus from '@comp/app-status/index';
import AppMenu from '@comp/app-menu/index';
import AppRight from '@comp/app-right/index';

interface IProps {}
interface IState {}

const CPaper = styled(Paper)({
  display: 'grid',
  gridTemplateRows: '1rem 1fr 1rem',
  overflow: 'hidden',
});

const DPaper = styled(Paper)({
  display: 'grid',
  gridTemplateColumns: '1rem 1fr 1rem',
  height: '100%',
  overflow: 'hidden',
});

const AppPage = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <CPaper>
      <AppTop />
      <DPaper>
        <AppMenu />
        <Home />
        <AppRight />
      </DPaper>
      <AppStatus />
    </CPaper>
  );
};

export default AppPage;

