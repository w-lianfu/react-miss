import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Paper, Stack, Button } from '@mui/material';
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
      <Stack>
        <Button variant="dashed" color="black">为你写诗</Button>
        <Button variant="contained" color="secondary">诗为她而作, 泪为你而流...</Button>
      </Stack>
      <Stack>
        <Button variant="dashed" color="black">昨天走了, 把最低温度留给了今天...</Button>
        <Button variant="contained" color="primary">一天有24小时</Button>
        <Button variant="contained" color="black">一小时有60分钟</Button>
        <Button variant="contained" color="secondary">一分钟有60秒</Button>
        <Button variant="contained" color="error">我每时每分每秒都在想你...</Button>
      </Stack>
    </AppBox>
  );

};
export default observer(Love);
