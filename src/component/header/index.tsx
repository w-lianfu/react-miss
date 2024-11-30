import React, { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';

interface IProps {}
interface IState {}

const Header = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section>
      <h1>~~~ Header ~~~</h1>
    </section>
  );
};

export default Header;
