import React from 'react';
import Link from 'next/link';

import navbarLinks from '../../constants/navbarLinks';
import { DefaultLogo } from '../logo';
import NavItems from './NavItems';

const index = () => {
  return (
    <div className="container">
      <DefaultLogo />
      <NavItems />
    </div>
  );
};

export default index;
