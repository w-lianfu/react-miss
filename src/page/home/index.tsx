import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Paper, Box, Button, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import Color from '@tool/color';
import Size from '@tool/size';
import AppPage from '@con/app-page';
import AppBox from '@con/app-box';

interface IProps {}
interface IState {}

const DStack = styled(Stack)({
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: '1rem',
  marginRight: '1rem',
});

const Home = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <AppBox>
      <DStack>
        <Button variant="dashed" color="black">一滴眼泪的溢出, 蕴含的是百分的思念</Button>
        <Button variant="dashed" color="black">两个眼角的悲伤, 望穿的是一世的秋凉...</Button>
        <Button variant="contained" color="primary">一滴泪</Button>
        <Button variant="contained" color="black">滴入河流</Button>
        <Button variant="contained" color="secondary">汇入大海</Button>
        <Button variant="contained" color="warning">凝入云朵</Button>
        <Button variant="contained" color="black">化为雨滴</Button>
        <Button variant="contained" color="error">落在你的脸颊...</Button>
      </DStack>
      <DStack>
        <Button variant="dashed" color="black">
          每天醒来为了什么? 伐木造船, 驶向有你的彼岸...
        </Button>
        <Button variant="contained" color="primary">一天有24小时</Button>
        <Button variant="contained" color="black">一小时有60分钟</Button>
        <Button variant="contained" color="secondary">一分钟有60秒</Button>
        <Button variant="contained" color="error">我每时每分每秒都在想你...</Button>
      </DStack>
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
      <DStack>
        <Button variant="dashed" color="black">我愿化为一道光, 穿越银河去旅行...</Button>
        <Button variant="contained" color="primary">愿此缘分至于今生</Button>
        <Button variant="contained" color="black">不要刻入骨髓</Button>
        <Button variant="contained" color="secondary">不要写入灵魂</Button>
        <Button variant="contained" color="error">不要纠缠来世...</Button>
      </DStack>
      <DStack>
        <Button variant="dashed" color="black">你来过, 一缕烟, 过心间, 具思念, 忆千年...</Button>
        <Button variant="contained" color="primary">你是病</Button>
        <Button variant="contained" color="black">渗入血液</Button>
        <Button variant="contained" color="secondary">侵入骨髓</Button>
        <Button variant="contained" color="dark">扎进心底</Button>
        <Button variant="contained" color="warning">百年缠身...</Button>
      </DStack>
      <DStack>
        <Button variant="dashed" color="black">昨天走了, 把最低温度留给了今天...</Button>
        <Button variant="contained" color="error">谁愿意抬一脚向前</Button>
        <Button variant="contained" color="black">谁愿意转一眼相见</Button>
        <Button variant="contained" color="secondary">谁愿意动一指传言...</Button>
      </DStack>
    </AppBox>
  );
};

export default observer(Home);
