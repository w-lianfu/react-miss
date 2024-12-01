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

const Security = (props: IProps, state: IState) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <DStack>
        <Button variant="dashed" color="dark">昨天走了, 把最低温度留给了今天...</Button>
        <Button variant="contained" color="secondary">很喜欢很喜欢一个人, 却不能在一起</Button>
        <Button variant="contained" color="warning">是怎样的心情?</Button>
        <Button variant="contained" color="black">没有后悔, 没有遗憾</Button>
        <Button variant="contained" color="warning">只有对她止不住的思念...</Button>
      </DStack>
      <DStack>
        <Button variant="dashed" color="black">我不想再前往宫殿了</Button>
        <Button variant="dashed" color="black">我只愿停留在有你的客栈...</Button>
        <Button variant="contained" color="primary">一滴泪</Button>
        <Button variant="contained" color="secondary">滴入河流</Button>
        <Button variant="contained" color="dark">汇入大海</Button>
        <Button variant="contained" color="warning">凝入云朵</Button>
        <Button variant="contained" color="black">化为雨滴</Button>
        <Button variant="contained" color="error">落在你的脸颊...</Button>
      </DStack>
      <DStack>
        <Button variant="dashed" color="black">你来过, 一缕烟, 过心间, 具思念, 忆千年...</Button>
        <Button variant="contained" color="primary">思, 非一时之所梦</Button>
        <Button variant="contained" color="secondary">梦, 非一时之所思</Button>
        <Button variant="contained" color="success">长梦而烧脑, 至思而灼心</Button>
        <Button variant="contained" color="info">虽长梦而不语</Button>
        <Button variant="contained" color="warning">虽至思而不见...</Button>
      </DStack>
      <DStack>
        <Button variant="dashed" color="dark">香烟遇到了火柴, 点亮了自己...</Button>
        <Button variant="contained" color="primary">一人饮酒醉</Button>
        <Button variant="contained" color="secondary">十年相思难追忆</Button>
        <Button variant="contained" color="info">昨日梦中与会</Button>
        <Button variant="contained" color="warning">仿佛今生, 恍若隔世...</Button>
      </DStack>
    </>
  );

};
export default observer(Security);
