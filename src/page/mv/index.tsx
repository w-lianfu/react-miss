import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Paper, Stack, Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ReactPlayer from 'react-player/youtube';

import Color from '@tool/color';
import Size from '@tool/size';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({
  marginTop: `${Size.appTop}rem`,
  marginBottom: `${Size.appStatus + 1}rem`,
  marginLeft: '1rem',
});

const DStack = styled(Stack)({
  marginTop: `${Size.appTop}rem`,
  marginLeft: '1rem',
});

const DBox = styled(Box)({
  flexDirection: 'column',
  marginTop: '1rem',
});

const DTypography = styled(Typography)({});

const Music = (props: IProps, state: IState) => {
  const mvWidth = '36rem';
  const mvHeight = '24rem';

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <DBox>
        <DTypography variant="body1">Soulja - koko ni iru yo feat</DTypography>
        <ReactPlayer url='https://youtu.be/NsbdraCe9yc?si=EYMTejrUWwyT9TLz'
          width={mvWidth} height={mvHeight} />
      </DBox>
      <DBox>
        <DTypography variant="body1">我们的纪念 - 放羊的星星</DTypography>
        <ReactPlayer url='https://www.youtube.com/watch?v=WgVNfTMKz8A'
          width={mvWidth} height={mvHeight} />
      </DBox>
      <DBox>
        <DTypography variant="body1">愿得一人心 - 最美的时光</DTypography>
        <ReactPlayer url='https://www.youtube.com/watch?v=IG9UXC0g7qc'
          width={mvWidth} height={mvHeight} />
      </DBox>
      <DBox>
        <DTypography variant="body1">雨的印记 - Piano</DTypography>
        <ReactPlayer url='https://www.youtube.com/watch?v=bQh_qjVNTTw'
          width={mvWidth} height={mvHeight} />
      </DBox>
      <DBox>
        <DTypography variant="body1">秋日私语 - Piano</DTypography>
        <ReactPlayer url='https://www.youtube.com/watch?v=imGaOIm5HOk'
          width={mvWidth} height={mvHeight} />
      </DBox>
      <DBox>
        <DTypography variant="body1">泪的告白</DTypography>
        <ReactPlayer url='https://www.youtube.com/watch?v=Mpz3O6JkkrI'
          width={mvWidth} height={mvHeight} />
      </DBox>
    </DPaper>
  );
};

export default observer(Music);
