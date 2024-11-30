import React, { useEffect } from 'react';
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
  overflowY: 'auto',
});

const Home = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <Typography variant="h6">可琪, I miss you...</Typography>
      <Box>
        <Button variant="contained" color="primary">可琪, I miss you</Button>
        <Button variant="contained" color="secondary">可琪, I miss you</Button>
        <Button variant="contained" color="success">可琪, I miss you</Button>
        <Button variant="contained" color="info">可琪, I miss you</Button>
        <Button variant="contained" color="warning">可琪, I miss you</Button>
        <Button variant="contained" color="error">可琪, I miss you</Button>
      </Box>
      <Box>
        <Button variant="contained" color="black">可琪, I miss you</Button>
        <Button variant="contained" color="dark">可琪, I miss you</Button>
        <Button variant="contained" color="gray">可琪, I miss you</Button>
        <Button variant="contained" color="white">可琪, I miss you</Button>
        <Button variant="contained" color="oliver">可琪, I miss you</Button>
        <Button variant="contained" color="green">可琪, I miss you</Button>
      </Box>
      <Box>
        <Button color="primary">可琪, I miss you...</Button>
        <Button color="secondary">可琪, I miss you...</Button>
        <Button color="success">可琪, I miss you...</Button>
        <Button color="info">可琪, I miss you...</Button>
        <Button color="warning">可琪, I miss you...</Button>
        <Button color="error">可琪, I miss you...</Button>
      </Box>
      <Box>
        <Button variant="outlined" color="primary">可琪, I miss you</Button>
        <Button variant="outlined" color="secondary">可琪, I miss you</Button>
        <Button variant="outlined" color="success">可琪, I miss you</Button>
        <Button variant="outlined" color="info">可琪, I miss you</Button>
        <Button variant="outlined" color="warning">可琪, I miss you</Button>
        <Button variant="outlined" color="error">可琪, I miss you</Button>
      </Box>
      <Box>
        <Button variant="outlined" color="black">可琪, I miss you...</Button>
        <Button variant="outlined" color="dark">可琪, I miss you...</Button>
        <Button variant="outlined" color="gray">可琪, I miss you...</Button>
      </Box>
      <Box>
        <Button variant="dashed" color="primary">可琪, I miss you</Button>
        <Button variant="dashed" color="secondary">可琪, I miss you</Button>
        <Button variant="dashed" color="success">可琪, I miss you</Button>
        <Button variant="dashed" color="info">可琪, I miss you</Button>
        <Button variant="dashed" color="warning">可琪, I miss you</Button>
        <Button variant="dashed" color="error">可琪, I miss you</Button>
      </Box>
      <Box>
        <Button variant="dashed" color="black">可琪, I miss you...</Button>
        <Button variant="dashed" color="dark">可琪, I miss you...</Button>
        <Button variant="dashed" color="gray">可琪, I miss you...</Button>
      </Box>
      <Stack>
        <Typography variant="h1">可琪, I miss you...</Typography>
        <Typography variant="h2">可琪, I miss you...</Typography>
        <Typography variant="h3">可琪, I miss you...</Typography>
        <Typography variant="h4">可琪, I miss you...</Typography>
        <Typography variant="h5">可琪, I miss you...</Typography>
        <Typography variant="h6">可琪, I miss you...</Typography>
        <Typography variant="subtitle1">可琪, I miss you...</Typography>
        <Typography variant="subtitle2">可琪, I miss you...</Typography>
        <Typography variant="body1">可琪, I miss you...</Typography>
        <Typography variant="body2">可琪, I miss you...</Typography>
        <Typography variant="caption">可琪, I miss you...</Typography>
        <Typography variant="overline">可琪, I miss you...</Typography>
        <Typography variant="subtitle1">可琪, I miss you...</Typography>
        <Typography variant="subtitle2">可琪, I miss you...</Typography>
      </Stack>
      <Button>End End</Button>
    </DPaper>
  );
};

export default Home;
