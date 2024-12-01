import React, { useEffect, ReactNode } from 'react';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';
import AppRoot from './app-root';

interface IProps {
  children: ReactNode,
}
interface IState {}

const AppPage = (props: IProps, state: IState) => {
  const { children } = props;

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <AppRoot>{children}</AppRoot>
  );
};

export default AppPage;
