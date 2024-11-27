import React, { useEffect, useState, SyntheticEvent } from 'react';
import { styled } from '@mui/material/styles';
import {
  Stack, Button, SpeedDial, SpeedDialIcon, SpeedDialAction,
  OpenReason,
} from '@mui/material';
import {
  MdHome, MdLock, MdLockOpen, MdRefresh, MdStar,
  MdDashboard, MdArrowUpward, MdArrowDownward,
} from 'react-icons/md';

interface IProps {}
interface IState {}

const DStack = styled(Stack)({
  position: 'fixed',
  bottom: '1rem',
  right: '1rem',
  display: 'flex',
});

const actions = [
  { icon: <MdDashboard />, name: 'Dashboard' },
  { icon: <MdHome />, name: 'Home' },
  { icon: <MdLock />, name: 'Lock' },
  { icon: <MdArrowDownward />, name: 'Bottom' },
  { icon: <MdRefresh />, name: 'Refresh' },
  { icon: <MdStar />, name: 'Star' },
  { icon: <MdArrowUpward />, name: 'Top' },
];

const AppDial = (props: IProps, state: IState) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    return () => {};
  }, []);

  const onDial = (ev: SyntheticEvent, name: string) => {
    if (name === 'Refresh') location.reload();
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

export default AppDial;