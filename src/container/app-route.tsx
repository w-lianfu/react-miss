import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import '@scss/index.scss';
import AppRoot from './app-root';
import Dashboard from '@page/dashboard/index';
import Home from '@page/home/index';
import Love from '@page/love/index';
import Security from '@page/security/index';
import Setting from '@page/setting/index';

interface IProps {}
interface IState {}

const AppRoute = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route index={true} element={<AppRoot><Dashboard /></AppRoot>} />
        <Route caseSensitive={true} path="/home" element={<AppRoot><Home /></AppRoot>} />
        <Route caseSensitive={true} path="/love" element={<AppRoot><Love /></AppRoot>} />
        <Route caseSensitive={true} path="/security" element={<AppRoot><Security /></AppRoot>} />
        <Route caseSensitive={true} path="/setting" element={<AppRoot><Setting /></AppRoot>} />
        <Route path="*" element={<AppRoot><Dashboard /></AppRoot>} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoute;
