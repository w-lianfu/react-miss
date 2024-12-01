import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Paper, Box, Button, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import Color from '@tool/color';
import Size from '@tool/size';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({
  display: 'flex',
  position: 'relative',
  margin: `${Size.topHeight} ${Size.rightWidth} ${Size.statusHeight} ${Size.menuWidth}`,
  padding: '1rem',
  overflowY: 'auto',
});

const DStack = styled(Stack)({
  display: 'flex',
});

const Home = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <DStack>
        <Button variant="contained" color="primary">独自走在一起走过的长廊</Button>
        <Button variant="contained" color="secondary">仿佛你就在我的身边</Button>
        <Button variant="contained" color="success">转身想要牵你的手</Button>
        <Button variant="contained" color="info">才发现</Button>
        <Button variant="contained" color="warning">那只是曾经</Button>
        <Button variant="contained" color="error">那只是曾经的曾经...</Button>
      </DStack>
      <Typography variant="body1">------ 诗为她而作, 泪为你而流 ------</Typography>
      <DStack>
        <Button variant="contained" color="black">记忆的碎片经常侵入我的生活</Button>
        <Button variant="contained" color="dark">闯入我的梦中</Button>
        <Button variant="contained" color="gray">带走我的泪水...</Button>
      </DStack>
      <Typography variant="body1">------ 拿起若有意, 放下又何须用心 ------</Typography>
      <DStack>
        <Button variant="contained" color="primary">心, 是一个人强大的基础</Button>
        <Button variant="contained" color="warning">思想, 是人们超越平凡的阶梯</Button>
        <Button variant="contained" color="error">灵魂, 是人类探索宇宙的载体...</Button>
      </DStack>
      <Typography variant="body1">
        ------ 你来过, 一缕烟, 过心间, 具思念, 忆千年 ------
      </Typography>
      <DStack>
        <Button variant="outlined" color="primary">思, 非一时之所梦</Button>
        <Button variant="outlined" color="secondary">梦, 非一时之所思</Button>
        <Button variant="outlined" color="success">长梦而烧脑, 至思而灼心</Button>
        <Button variant="outlined" color="info">虽长梦而不语</Button>
        <Button variant="outlined" color="warning">虽至思而不见...</Button>
      </DStack>
      <Typography variant="body1">
        ------ 行行走走忙忙匆匆挤挤, 进进出出影影形形觅觅 ------
      </Typography>
      <DStack>
        <Button variant="outlined" color="error">当暴雨不再影响我的心情</Button>
        <Button variant="outlined" color="black">当离别不再令我感到伤感</Button>
        <Button variant="outlined" color="dark">当金钱不足以撼动我的梦想</Button>
        <Button variant="outlined" color="gray">这才是我喜欢的自己...</Button>
      </DStack>
      <Typography variant="body1">
        ------ 挫其志, 锻其心, 阻其行, 厉其言, 而屹立不倒 ------
      </Typography>
      <DStack>
        <Button variant="dashed" color="error">很喜欢很喜欢一个人, 却不能在一起, 是怎样的心情?</Button>
        <Button variant="dashed" color="black">没有后悔, 没有遗憾, 只有对她止不住的思念...</Button>
        <Typography variant="body1">------ 香烟遇到了火柴, 点亮了自己 ------</Typography>
      </DStack>
      <DStack>
        <Button variant="dashed" color="primary">一人饮酒醉</Button>
        <Button variant="dashed" color="secondary">十年相思难追忆</Button>
        <Button variant="dashed" color="info">昨日梦中与会</Button>
        <Button variant="dashed" color="warning">仿佛今生, 恍若隔世...</Button>
      </DStack>
      <Typography variant="body1">------ 你是夏天的棉袄, 沸血, 煮心, 烧脑 ------</Typography>
      <DStack>
        <Button variant="outlined" color="warning">心中有你, 如影随形</Button>
        <Button variant="outlined" color="error">梦中有你, 朝夕相伴</Button>
        <Button variant="outlined" color="black">未来有你, 事倍功半</Button>
        <Button variant="outlined" color="dark">时间如你, 不能相见...</Button>
      </DStack>
      <Typography variant="body1">
        ------ 愿沉迷于工作而无法自拔, 愿追求于技术而永不止步 ------
      </Typography>
      <DStack>
        <Button variant="dashed" color="warning">一滴眼泪的溢出, 蕴含的是百分的思念</Button>
        <Button variant="dashed" color="error">两个眼角的悲伤, 望穿的是一世的秋凉...</Button>
      </DStack>
      <Typography variant="body1">
        ------ 我不想再前往宫殿了, 我只愿停留在有你的客栈 ------
      </Typography>
      <DStack>
        <Button variant="contained" color="primary">一滴泪</Button>
        <Button variant="contained" color="secondary">滴入河流</Button>
        <Button variant="contained" color="info">汇入大海</Button>
        <Button variant="contained" color="warning">凝入云朵</Button>
        <Button variant="contained" color="error">化为雨滴</Button>
        <Button variant="contained" color="black">落在你的脸颊...</Button>
      </DStack>
      <Typography variant="body1">------ 追求技术之颠, 探索宇宙之秘 ------</Typography>
      <DStack>
        <Button color="primary">谁愿意抬一脚向前</Button>
        <Button color="secondary">谁愿意转一眼相见</Button>
        <Button color="error">谁愿意动一指传言...</Button>
      </DStack>
    </DPaper>
  );
};

export default observer(Home);
