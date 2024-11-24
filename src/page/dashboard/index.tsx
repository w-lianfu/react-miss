import React, { useEffect } from 'react';

interface IProps {}
interface IState {}

const Dashboard = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section>
      <h1>~~~ Dashboard ~~~</h1>
    </section>
  );
};

export default Dashboard;
