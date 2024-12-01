import React, { useEffect, useState } from 'react';
import { replace } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Paper, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({});
const DStack = styled(Stack)({});

const Dashboard = (props: IProps, state: IState) => {
  useEffect(() => {
    console.log('dashboard');
    replace('/');

    return () => {};
  }, []);

  return (
    <>
      <DStack>
        <Button variant="dashed" color="black">诗为她而作, 泪为你而流...</Button>
        <Button variant="contained" color="primary">记忆的碎片经常侵入我的生活</Button>
        <Button variant="contained" color="black">闯入我的梦中</Button>
        <Button variant="contained" color="secondary">带走我的泪水...</Button>
      </DStack>
      <DStack>
        <Button variant="dashed" color="black">你是夏天的棉袄, 沸血, 煮心, 烧脑...</Button>
        <Button variant="contained" color="warning">心中有你, 如影随形</Button>
        <Button variant="contained" color="error">梦中有你, 朝夕相伴</Button>
        <Button variant="contained" color="black">未来有你, 事倍功半</Button>
        <Button variant="contained" color="secondary">时间如你, 不能相见...</Button>
      </DStack>
      <DStack>
        <Button variant="dashed" color="black">我来过这个世界, 在梦中...</Button>
        <Button variant="contained" color="primary">我很倔强</Button>
        <Button variant="contained" color="black">有话, 不说</Button>
        <Button variant="contained" color="secondary">有错, 不解释</Button>
        <Button variant="contained" color="error">有烦恼, 写成诗...</Button>
      </DStack>
    </>
  );
};

export default observer(Dashboard);
