import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '@scss/index.scss';
import AppRoot from './app-root';
import Dashboard from '@page/dashboard/index';
import Home from '@page/home/index';
import Security from '@page/security/index';
import Setting from '@page/setting/index';

interface IProps {}
interface IState {}

const AppRoute = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index={true} element={<AppRoot><Dashboard /></AppRoot>} />
        <Route path="/dashboard" element={<AppRoot><Dashboard /></AppRoot>} />
        <Route path="/home" element={<AppRoot><Home /></AppRoot>} />
        <Route path="/security" element={<AppRoot><Security /></AppRoot>} />
        <Route path="/setting" element={<AppRoot><Setting /></AppRoot>} />
        <Route path="*" element={<AppRoot><Dashboard /></AppRoot>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
