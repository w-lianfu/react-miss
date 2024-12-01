import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Paper, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({});
const DStack = styled(Stack)({});

const Setting = (props: IProps, state: IState) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <DStack>
        <Button variant="dashed" color="dark">曲一首, 解烦忧, 犹如一醉解千愁...</Button>
        <Button variant="contained" color="primary">独自走在一起走过的长廊</Button>
        <Button variant="contained" color="secondary">仿佛你就在我的身边</Button>
        <Button variant="contained" color="success">转身想要牵你的手</Button>
        <Button variant="contained" color="info">才发现</Button>
        <Button variant="contained" color="warning">那只是曾经</Button>
        <Button variant="contained" color="error">那只是曾经的曾经...</Button>
      </DStack>
      <DStack>
        <Button variant="dashed" color="black">愿沉迷于工作而无法自拔</Button>
        <Button variant="dashed" color="black">愿追求于技术而永不止步...</Button>
        <Button variant="contained" color="error">一滴眼泪的溢出, 蕴含的是百分的思念</Button>
        <Button variant="contained" color="info">两个眼角的悲伤, 望穿的是一世的秋凉...</Button>
      </DStack>
      <DStack>
        <Button variant="dashed" color="dark">昨天走了, 把最低温度留给了今天...</Button>
        <Button variant="contained" color="secondary">很喜欢很喜欢一个人, 却不能在一起</Button>
        <Button variant="contained" color="warning">是怎样的心情?</Button>
        <Button variant="contained" color="black">没有后悔, 没有遗憾</Button>
        <Button variant="contained" color="warning">只有对她止不住的思念...</Button>
      </DStack>
      <DStack>
        <Button variant="dashed" color="black">行行走走忙忙匆匆挤挤</Button>
        <Button variant="dashed" color="black">进进出出影影形形觅觅...</Button>
        <Button variant="contained" color="error">言语可以动人心</Button>
        <Button variant="contained" color="secondary">专注可以勾人魂</Button>
        <Button variant="contained" color="warning">执着可以摄人魄...</Button>
      </DStack>
    </>
  );

};
export default observer(Setting);
