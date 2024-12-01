import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Paper, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';
import AppPage from '@con/app-page';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({});

const DStack = styled(Paper)({});

const Dashboard = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <DStack>
        <Button variant="dashed" color="black">诗为她而作, 泪为你而流...</Button>
        <Button variant="contained" color="primary">记忆的碎片经常侵入我的生活</Button>
        <Button variant="contained" color="black">闯入我的梦中</Button>
        <Button variant="contained" color="secondary">带走我的泪水...</Button>
      </DStack>
    </DPaper>
  );
};

export default observer(Dashboard);
