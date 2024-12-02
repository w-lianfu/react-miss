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

const DPaper = styled(Paper)({
  width: '100%',
  position: 'relative',
  marginTop: '7rem',
  marginBottom: '2rem',
});
const DStack = styled(Stack)({
  display: 'flex',
  flexWrap: 'wrap',
});

const Home = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <AppBox>
      <DStack>
        <Button variant="contained" color="secondary">愿为一条鱼, 探索海洋之秘</Button>
        <Button variant="contained" color="warning">愿为一只鹰, 遨游苍穹之空</Button>
        <Button variant="contained" color="dark">愿为一道门, 穿越宇宙之边</Button>
        <Button variant="contained" color="error">愿为时光机, 开启时空之门...</Button>
      </DStack>
      <DStack>
        <Button variant="dashed" color="black">追求技术之颠, 探索宇宙之秘...</Button>
        <Button variant="contained" color="error">谁愿意抬一脚向前</Button>
        <Button variant="contained" color="secondary">谁愿意转一眼相见</Button>
        <Button variant="contained" color="info">谁愿意动一指传言...</Button>
      </DStack>
      <DStack>
        <Button variant="dashed" color="black">每天醒来为了什么</Button>
        <Button variant="dashed" color="black">伐木造船, 驶向有你的彼岸...</Button>
        <Button variant="contained" color="primary">挫其志</Button>
        <Button variant="contained" color="black">锻其心</Button>
        <Button variant="contained" color="secondary">阻其行</Button>
        <Button variant="contained" color="dark">厉其言</Button>
        <Button variant="contained" color="warning">而屹立不倒...</Button>
      </DStack>
      <DStack>
        <Button variant="dashed" color="black">拿起若有意, 放下又何须用心...</Button>
        <Button variant="contained" color="primary">心, 是一个人强大的基础</Button>
        <Button variant="contained" color="secondary">思想, 是人们超越平凡的阶梯</Button>
        <Button variant="contained" color="error">灵魂, 是人类探索宇宙的载体...</Button>
      </DStack>
      <DStack>
        <Button variant="dashed" color="black">我愿化为一道光</Button>
        <Button variant="dashed" color="black">穿越银河去旅行...</Button>
        <Button variant="contained" color="primary">当暴雨不再影响我的心情</Button>
        <Button variant="contained" color="black">当离别不再令我感到伤感</Button>
        <Button variant="contained" color="info">当金钱不足以撼动我的梦想</Button>
        <Button variant="contained" color="error">这才是我喜欢的自己...</Button>
      </DStack>
      <Typography variant="h6">~~~ New York City ~~~</Typography>
      <Typography variant="h6">~~~ New York City ~~~</Typography>
      <Typography variant="h6">~~~ New York City ~~~</Typography>
      <Typography variant="h6">~~~ New York City ~~~</Typography>
      <Typography variant="h6">~~~ New York City ~~~</Typography>
      <Typography variant="h5">~~~ New York City ~~~</Typography>
      <Typography variant="h5">~~~ New York City ~~~</Typography>
      <Typography variant="h5">~~~ New York City ~~~</Typography>
      <Typography variant="h5">~~~ New York City ~~~</Typography>
      <Typography variant="h5">~~~ New York City ~~~</Typography>
      <Typography variant="h5">~~~ New York City ~~~</Typography>
      <Typography variant="h5">~~~ New York City ~~~</Typography>
      <Typography variant="h5">~~~ New York City ~~~</Typography>
      <Typography variant="h5">~~~ New York City ~~~</Typography>
      <Typography variant="h5">~~~ New York City ~~~</Typography>
      <Typography variant="h5">~~~ New York City ~~~</Typography>
      <Typography variant="h5">~~~ New York City ~~~</Typography>
      <Typography variant="h5">~~~ New York City ~~~</Typography>
      <Typography variant="h5">~~~ Mezcal ~~~</Typography>
    </AppBox>
  );
};

export default observer(Home);
