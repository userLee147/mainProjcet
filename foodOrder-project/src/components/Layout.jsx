import React from 'react';
import Header from './Header';
import { Wrap } from '../styled/common/common';

const Layout = ({ children }) => {
  return (
    <>
      <Wrap>
        <Header></Header>
        {children}
      </Wrap>
    </>
  );
};

export default Layout;
