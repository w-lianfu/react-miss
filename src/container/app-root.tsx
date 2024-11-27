import React, { useEffect, KeyboardEvent } from 'react';

import '@scss/index.scss';
import AppTheme from './app-theme';
import AppPage from './app-page';

interface IProps {}
interface IState {}

const AppRoot = (props: IProps, state: IState) => {
  useEffect(() => {
    console.log('app root page...');
    document.body.addEventListener('keydown', (ev: any) => {
      ev.stopPropagation();
      // Press `r` reload current page.
      // if (ev.keyCode === 82) location.reload();
    }, true);

    return () => {};
  }, []);

  return (
    <AppTheme>
      <AppPage />
    </AppTheme>
  );
};

export default AppRoot;
