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
const DStack = styled(Stack)({});

const Security = (props: IProps, state: IState) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <AppBox>
      <DStack>
        <Button variant="dashed" color="dark">行行走走忙忙匆匆挤挤</Button>
        <Button variant="dashed" color="dark">进进出出影影形形觅觅...</Button>
        <Button variant="contained" color="secondary">很喜欢很喜欢一个人, 却不能在一起</Button>
        <Button variant="contained" color="warning">是怎样的心情?</Button>
        <Button variant="contained" color="black">没有后悔, 没有遗憾</Button>
        <Button variant="contained" color="warning">只有对她止不住的思念...</Button>
      </DStack>
      <DStack>
        <Button variant="dashed" color="dark">香烟遇到了火柴, 点亮了自己...</Button>
        <Button variant="contained" color="primary">思, 非一时之所梦</Button>
        <Button variant="contained" color="secondary">梦, 非一时之所思</Button>
        <Button variant="contained" color="error">长梦而烧脑, 至思而灼心</Button>
        <Button variant="contained" color="black">虽长梦而不语</Button>
        <Button variant="contained" color="warning">虽至思而不见...</Button>
      </DStack>
    </AppBox>
  );

};
export default observer(Security);
