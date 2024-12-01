import React, { useEffect, useState, SyntheticEvent } from 'react';
import { observer } from 'mobx-react-lite';
import { styled } from '@mui/material/styles';
import {
  Stack, Button, SpeedDial, SpeedDialIcon, SpeedDialAction,
  OpenReason,
} from '@mui/material';
import {
  MdHome, MdLock, MdLockOpen, MdRefresh, MdStar,
  MdDashboard, MdArrowUpward, MdArrowDownward,
} from 'react-icons/md';

import lock, { toggleLock } from './store/app-lock';
import Color from '@tool/color';
import Size from '@tool/size';

interface IProps {}
interface IState {}

const DStack = styled(Stack)({
  position: 'fixed',
  bottom: Size.statusHeight,
  right: Size.rightWidth,
  display: 'flex',
});

const actions = [
  { icon: <MdLock />, name: 'Lock' },
  { icon: <MdRefresh />, name: 'Refresh' },
  { icon: <MdArrowDownward />, name: 'Bottom' },
  { icon: <MdArrowUpward />, name: 'Top' },
];

const AppDial = (props: IProps, state: IState) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    return () => {};
  }, []);

  const onDial = (ev: SyntheticEvent, name: string) => {
    if (name === 'Refresh') location.reload();
    else if (name === 'Lock') toggleLock(true);
    else if (name === 'Top') {
      // Scroll to page top
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } else if (name === 'Bottom') {
      // Scroll to page end
      document.documentElement.scrollTo({
        left: 0,
        top: document.body.clientHeight,
        behavior: 'smooth',
      });
    }
    setOpen(false);
  };

  const onOpen = (ev: SyntheticEvent) => {
    setOpen(true);
  };

  const onClose = (ev: SyntheticEvent) => {
    setOpen(true);
  };

  return (
    <DStack>
      <SpeedDial ariaLabel="Dial" icon={<SpeedDialIcon />} open={isOpen}
        onOpen={(ev: SyntheticEvent<any, Event>, reason: OpenReason) => onOpen(ev)}
        onClose={(ev: SyntheticEvent<any, Event>) => onClose(ev)}>
        {actions.map(action => (
          <SpeedDialAction key={action.name} icon={action.icon}
            tooltipTitle={action.name}
            onClick={(ev: SyntheticEvent) => onDial(ev, action.name)} />
        ))}
      </SpeedDial>
    </DStack>
  );
};

export default observer(AppDial);
