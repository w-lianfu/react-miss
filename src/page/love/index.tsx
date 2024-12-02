import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';
import AppBox from '@con/app-box';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({});

const Love = (props: IProps, state: IState) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <AppBox>
      <Button variant="dashed" color="black">为你写诗</Button>
      <Button variant="contained" color="secondary">诗为她而作, 泪为你而流...</Button>
    </AppBox>
  );

};
export default observer(Love);