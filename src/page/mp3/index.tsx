import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Paper, Stack, Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ReactPlayer from 'react-player';

import Color from '@tool/color';
import Size from '@tool/size';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({
  marginTop: `${Size.appTop}rem`,
  marginBottom: `${Size.appStatus}rem`,
});

const DStack = styled(Stack)({});

const DBox = styled(Box)({});

const MP3 = (props: IProps, state: IState) => {
  const navi = useNavigate();
  const musicW = '30rem';
  const musicH = '4rem';

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <Typography variant="body1">Piano - 秋日私语</Typography>
    </DPaper>
  );
};

export default observer(MP3);

