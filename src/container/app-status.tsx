import React, { useEffect } from 'react';

interface IProps {}
interface IState {}

const AppStatus = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section>
      <h1>~~~ AppStatus ~~~</h1>
    </section>
  );
};

export default AppStatus;
