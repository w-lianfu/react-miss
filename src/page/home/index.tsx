/* eslint-disable indent */
import React, { useEffect, useState, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { Paper, Box, Button, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Viewer from 'viewerjs';

import 'viewerjs/dist/viewer.css';
import Color from '@tool/color';
import Tool from '@tool/index';
import Size from '@tool/size';
import AppPage from '@con/app-page';
import AppBox from '@con/app-box';
import ImgSlick from './img-slick';

interface IProps {}
interface IState {}

const CStack = styled(Stack)({
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: '1rem',
  marginRight: '1rem',
});

const DStack = styled(CStack)({
  marginTop: '1rem',
});

const LoveButton = styled(Button)({
  minWidth: '20rem',
});

const Home = (props: IProps, state: IState) => {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const img4Ref = useRef(null);
  const img5Ref = useRef(null);

  useEffect(() => {
    return () => {};
  }, []);

  const viewImg = (imgName: string) => {
    let currentRef = null;
    switch (imgName) {
      case 'keqi01':
        currentRef = img1Ref.current;
        break;
      case 'keqi02':
        currentRef = img2Ref.current;
        break;
      case 'keqi03':
        currentRef = img3Ref.current;
        break;
      case 'keqi04':
        currentRef = img4Ref.current;
        break;
      case 'keqi06':
        currentRef = img5Ref.current;
        break;
      default:
        currentRef = null;
    }
    if (currentRef) {
      new Viewer(currentRef, {
        navbar: false,
        title: false,
        toolbar: false,
        movable: false,
        rotatable: false,
        scalable: true,
        zoomable: true,
        zoomOnTouch: true,
        zoomOnWheel: false,
        slideOnTouch: false,
        tooltip: false,
      });
    }
  };

  return (
    <AppBox>
      <ImgSlick />
      <CStack>
        <Button variant="contained" color="black">每天醒来为了什么?</Button>
        <Button variant="contained" color="secondary">伐木造船, 驶向梦想的彼岸...</Button>
      </CStack>
      <DStack>
        <Button variant="contained" color="primary">行行走走忙忙匆匆挤挤</Button>
        <Button variant="contained" color="black">进进出出影影形形觅觅</Button>
      </DStack>
      <DStack>
        <LoveButton variant="contained" color="black">我很倔强</LoveButton>
        <LoveButton variant="contained" color="warning">有话，不说</LoveButton>
        <LoveButton variant="contained" color="secondary">有错，不解释</LoveButton>
        <LoveButton variant="contained" color="primary">有烦恼，写成诗...</LoveButton>
      </DStack>
      <DStack>
        <Button variant="contained" color="primary">行行走走忙忙匆匆挤挤</Button>
        <Button variant="contained" color="black">进进出出影影形形觅觅</Button>
      </DStack>
      <DStack>
        <Button variant="contained" color="primary">做一棵树, 任狂风吹, 不屈不挠</Button>
        <Button variant="contained" color="secondary">做一棵树, 任雷电鸣, 不卑不亢...</Button>
      </DStack>
      <DStack>
        <LoveButton variant="contained" color="black">我很倔强</LoveButton>
        <LoveButton variant="contained" color="warning">有话，不说</LoveButton>
        <LoveButton variant="contained" color="secondary">有错，不解释</LoveButton>
        <LoveButton variant="contained" color="error">有烦恼，写成诗...</LoveButton>
      </DStack>
      <DStack>
        <Button variant="dashed" color="black">百味难调千人口, 杯酒醉倒万人心...</Button>
        <LoveButton variant="contained" color="black">我很倔强</LoveButton>
        <LoveButton variant="contained" color="error">有话，不说</LoveButton>
        <LoveButton variant="contained" color="secondary">有错，不解释</LoveButton>
        <LoveButton variant="contained" color="error">有烦恼，写成诗...</LoveButton>
      </DStack>
      <DStack>
        <Button variant="dashed" color="black">昨天走了, 把最低温度留给了今天...</Button>
        <LoveButton variant="contained" color="black">我很倔强</LoveButton>
        <LoveButton variant="contained" color="warning">有话，不说</LoveButton>
        <LoveButton variant="contained" color="secondary">有错，不解释</LoveButton>
        <LoveButton variant="contained" color="error">有烦恼，写成诗...</LoveButton>
      </DStack>
      <DStack>
        <LoveButton variant="dashed" color="black">行行走走忙忙匆匆挤挤</LoveButton>
        <LoveButton variant="dashed" color="black">进进出出影影形形觅觅...</LoveButton>
        <Button variant="contained" color="error">谁愿意抬一脚向前</Button>
        <Button variant="contained" color="black">谁愿意转一眼相见</Button>
        <Button variant="contained" color="secondary">谁愿意动一指传言...</Button>
      </DStack>
      <DStack>
        <Button variant="contained" color="primary">做一棵树, 任狂风吹, 不屈不挠</Button>
        <Button variant="contained" color="secondary">做一棵树, 任雷电鸣, 不卑不亢...</Button>
      </DStack>
      <DStack>
        <LoveButton variant="contained" color="black">我很倔强</LoveButton>
        <LoveButton variant="contained" color="warning">有话, 不说</LoveButton>
        <LoveButton variant="contained" color="secondary">有错, 不解释</LoveButton>
        <LoveButton variant="contained" color="error">有烦恼, 写成诗...</LoveButton>
      </DStack>
    </AppBox>
  );
};

export default observer(Home);
