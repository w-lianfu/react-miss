import React, { useEffect } from 'react';

import '../scss/index.scss';

interface IProps {}
interface IState {}

const AppRoot = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section>
      <h1>~~~ app root ~~~</h1>
    </section>
  );
};

export default AppRoot;
