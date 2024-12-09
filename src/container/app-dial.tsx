import React, { useEffect, useState, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { styled } from '@mui/material/styles';
import {
  Stack, Button, SpeedDial, SpeedDialIcon, SpeedDialAction,
  OpenReason,
} from '@mui/material';
import {
  MdHome, MdLock, MdLockOpen, MdRefresh, MdStar,
  MdDashboard, MdArrowUpward, MdArrowDownward,
  MdOutlineMusicVideo, MdOutlineVideocam,
} from 'react-icons/md';

import lock, { toggleLock } from './store/app-lock';
import Color from '@tool/color';
import Size from '@tool/size';

interface IProps {}
interface IState {}

const DStack = styled(Stack)({
  position: 'fixed',
  bottom: `${Size.appStatus}rem`,
  right: 0,
  display: 'flex',
});

const actions = [
  { icon: <MdHome />, name: 'Home' },
  { icon: <MdOutlineMusicVideo />, name: 'Music' },
  { icon: <MdOutlineVideocam />, name: 'MV' },
  { icon: <MdLock />, name: 'Lock' },
  { icon: <MdRefresh />, name: 'Refresh' },
  { icon: <MdArrowDownward />, name: 'Bottom' },
  { icon: <MdArrowUpward />, name: 'Top' },
];

const AppDial = (props: IProps, state: IState) => {
  const navi = useNavigate();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    return () => {};
  }, []);

  const onDial = (ev: SyntheticEvent, name: string) => {
    if (name === 'Home') navi('/');
    else if (name === 'Music') navi('mp3');
    else if (name === 'MV') navi('mv');
    else if (name === 'Refresh') location.reload();
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
    setOpen(false);
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
