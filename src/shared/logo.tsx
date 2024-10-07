/**
 * @file logo.tsx
 * @overview Displays the logo.
 */
import TailfrontLogo from '../assets/tflogo.svg';
import React from 'react';
function Logo() {
  return (
    <>
      <img src={TailfrontLogo} alt="" className='size-9'/>
    </>
  );
}

export default Logo;
