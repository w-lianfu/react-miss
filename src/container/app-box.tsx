import React, { useEffect, ReactNode } from 'react';
import { observer } from 'mobx-react-lite';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

import Color from '@tool/color';
import Size from '@tool/size';

interface IProps {
  children: ReactNode,
}
interface IState {}

const DPaper = styled(Paper)({
  position: 'relative',
  display: 'flex',
  width: '100%',
  // marginTop: `${Size.appTop}rem`,
  marginBottom: `${Size.appStatus}rem`,
});

const AppBox = (props: IProps, state: IState) => {
  const { children } = props;

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>{children}</DPaper>
  );
};

export default observer(AppBox);
