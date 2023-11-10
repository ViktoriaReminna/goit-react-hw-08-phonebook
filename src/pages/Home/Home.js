import { Box } from 'components/Box';

import React from 'react';

import style from './Home.module.css';

export default function Home() {
  return (
    <Box className={style.homeHelp}>
      <p className={style.text}>
        Welcome to one of the safest contact storage sites.
      </p>

      <p className={style.text}>
        Connect with us . Don't have an account yet? Register now for a
        personalized experience{' '}
      </p>
    </Box>
  );
}
