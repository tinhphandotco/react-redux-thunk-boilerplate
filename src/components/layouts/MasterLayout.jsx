import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

export default function MasterLayout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

MasterLayout.propTypes = {
  children: PropTypes.node,
};

MasterLayout.defaultProps = {
  children: '',
};
