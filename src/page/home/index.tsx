import React, { useEffect } from 'react';
import { Paper, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

interface IProps {}
interface IState {}

const DPaper = styled(Paper)({
  display: 'flex',
  height: '100%',
  overflowY: 'auto',
});

const Home = (props: IProps, state: IState) => {
  const onKeyDown = (ev: any) => {
    ev.stopPropagation();
    console.log('home ev -- ', ev);
    // Press `j` make page scroll down.
    // if (ev.keyCode === 74) window.scrollBy({
    //   top: 10,
    //   left: 0,
    //   behavior: 'smooth',
    // });
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper onKeyDown={onKeyDown}>
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
        <Button color="oliver">可琪, I miss you...</Button>
        <Button color="green">可琪, I miss you...</Button>
        <Button color="black">可琪, I miss you...</Button>
        <Button color="dark">可琪, I miss you...</Button>
        <Button color="gray">可琪, I miss you...</Button>
      </Box>
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

      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ Home ~~~</h1>
      <h1>~~~ End End End ~~~</h1>
    </DPaper>
  );
};

export default Home;
