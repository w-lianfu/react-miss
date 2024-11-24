import React, { useEffect } from 'react';

interface IProps {}
interface IState {}

const Home = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section>
      <h1>~~~ Home ~~~</h1>
    </section>
  );
};

export default Home;
