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
import Img01 from '@static/image/keqi01.jpg';
import Img02 from '@static/image/keqi02.jpg';
import Img03 from '@static/image/keqi03.jpg';
import Img04 from '@static/image/keqi04.jpg';
import Img05 from '@static/image/keqi05.jpg';

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
      <CStack>
        <Button variant="contained" color="black">每天醒来为了什么?</Button>
        <Button variant="contained" color="secondary">伐木造船, 驶向有你的彼岸...</Button>
      </CStack>
      <DStack>
        <Typography variant="body1">
          可琪，爱上你是心的选择，它不受自由意志的控制，
        </Typography>
        <Typography variant="body1">
          相反，它让自由意志有了牵挂，所以白天会思念你，晚上会梦到你...
        </Typography>
        <img src={Img01} ref={img1Ref} onClick={() => viewImg('keqi01')}
          style={{ width: `${Size.imgWidth}rem` }}/>
      </DStack>
      <DStack>
        <Button variant="contained" color="error">
          一滴眼泪的溢出, 蕴含的是百分的思念
        </Button>
        <Button variant="contained" color="secondary">
          两个眼角的悲伤, 望穿的是一世的秋凉...
        </Button>
      </DStack>
      <DStack>
      <Typography variant="body1">一天有24小时</Typography>
      <Typography variant="body1">一小时有60分钟</Typography>
      <Typography variant="body1">一分钟有60秒</Typography>
      <Typography variant="body1">我每时每分每秒都在想你...</Typography>
        <img src={Img02} ref={img2Ref} onClick={() => viewImg('keqi02')}
          style={{ width: `${Size.imgWidth}rem` }}/>
      </DStack>
      <DStack>
        <LoveButton variant="contained" color="black">一滴泪</LoveButton>
        <LoveButton variant="contained" color="warning">滴入河流</LoveButton>
        <LoveButton variant="contained" color="secondary">汇入大海</LoveButton>
        <LoveButton variant="contained" color="primary">凝入云朵</LoveButton>
        <LoveButton variant="contained" color="error">化为雨滴</LoveButton>
        <LoveButton variant="contained" color="secondary">落在你的脸颊...</LoveButton>
      </DStack>
      <DStack>
        <img src={Img03} ref={img3Ref} onClick={() => viewImg('keqi03')}
          style={{ width: `${Size.imgWidth}rem` }}/>
      </DStack>
      <DStack>
        <Button variant="contained" color="black">很喜欢很喜欢一个人, 却不能在一起</Button>
        <Button variant="contained" color="warning">是怎样的心情?</Button>
        <Button variant="contained" color="error">没有后悔, 没有遗憾</Button>
        <Button variant="contained" color="secondary">只有对她止不住的思念...</Button>
      </DStack>
      <DStack>
        <img src={Img04} ref={img4Ref} onClick={() => viewImg('keqi04')}
          style={{ width: `${Size.imgWidth}rem` }}/>
      </DStack>
      <DStack>
        <Button variant="contained" color="error">思, 非一时之所梦</Button>
        <Button variant="contained" color="secondary">梦, 非一时之所思</Button>
        <Button variant="contained" color="black">长梦而烧脑, 至思而灼心</Button>
        <Button variant="contained" color="secondary">虽长梦而不语</Button>
        <Button variant="contained" color="error">虽至思而不见...</Button>
      </DStack>
      <DStack>
        <img src={Img05} ref={img5Ref} onClick={() => viewImg('keqi06')}
          style={{ width: `${Size.imgWidth}rem` }}/>
      </DStack>
      <DStack>
        <LoveButton variant="contained" color="black">愿此缘分至于今生</LoveButton>
        <LoveButton variant="contained" color="warning">不要刻入骨髓</LoveButton>
        <LoveButton variant="contained" color="secondary">不要写入灵魂</LoveButton>
        <LoveButton variant="contained" color="error">不要纠缠来世...</LoveButton>
      </DStack>
      <DStack>
        <Button variant="dashed" color="black">
          百味难调千人口, 杯酒醉倒万人心...
        </Button>
        <LoveButton variant="contained" color="black">你是病</LoveButton>
        <LoveButton variant="contained" color="error">渗入血液</LoveButton>
        <LoveButton variant="contained" color="secondary">侵入骨髓</LoveButton>
        <LoveButton variant="contained" color="error">扎进心底</LoveButton>
        <LoveButton variant="contained" color="secondary">百年缠身...</LoveButton>
      </DStack>
      <DStack>
        <LoveButton variant="contained" color="black">你来过</LoveButton>
        <LoveButton variant="contained" color="error">一缕烟</LoveButton>
        <LoveButton variant="contained" color="secondary">过心间</LoveButton>
        <LoveButton variant="contained" color="error">具思念</LoveButton>
        <LoveButton variant="contained" color="secondary">忆千年...</LoveButton>
      </DStack>
      <DStack>
        <Button variant="dashed" color="black">昨天走了, 把最低温度留给了今天...</Button>
        <LoveButton variant="contained" color="black">记忆的碎片经常</LoveButton>
        <LoveButton variant="contained" color="warning">侵入我的生活</LoveButton>
        <LoveButton variant="contained" color="secondary">闯入我的梦中</LoveButton>
        <LoveButton variant="contained" color="error">带走我的泪水...</LoveButton>
      </DStack>
      <DStack>
        <LoveButton variant="dashed" color="black">行行走走忙忙匆匆挤挤</LoveButton>
        <LoveButton variant="dashed" color="black">进进出出影影形形觅觅...</LoveButton>
        <Button variant="contained" color="error">谁愿意抬一脚向前</Button>
        <Button variant="contained" color="black">谁愿意转一眼相见</Button>
        <Button variant="contained" color="secondary">谁愿意动一指传言...</Button>
      </DStack>
      <DStack>
        <Button variant="dashed" color="black">不因风雨摇, 不为雷电动...</Button>
        <Button variant="contained" color="primary">
          做一棵树, 任狂风吹, 不屈不挠
        </Button>
        <Button variant="contained" color="secondary">
          做一棵树, 任雷电鸣, 不卑不亢...
        </Button>
      </DStack>
      <DStack>
        <LoveButton variant="contained" color="black">我很倔强</LoveButton>
        <LoveButton variant="contained" color="warning">有话, 不说</LoveButton>
        <LoveButton variant="contained" color="secondary">有错, 不解释</LoveButton>
        <LoveButton variant="contained" color="error">有烦恼, 写成诗...</LoveButton>
      </DStack>
      <DStack>
        <Button variant="contained" color="secondary">
          追求技术之巅, 探索宇宙之秘...
        </Button>
        <Button variant="contained" color="black">
          我愿化为一道光, 穿越银河去旅行...
        </Button>
      </DStack>
    </AppBox>
  );
};

export default observer(Home);
