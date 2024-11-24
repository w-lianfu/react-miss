import React, { useEffect } from 'react';

interface IProps {}
interface IState {}

const Header = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section>
      <h1>~~~ Header ~~~</h1>
    </section>
  );
};

export default Header;
