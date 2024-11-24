import React, { useEffect } from 'react';

interface IProps {}
interface IState {}

const Footer = (props: IProps, state: IState) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section>
      <h1>~~~ Footer ~~~</h1>
    </section>
  );
};

export default Footer;
