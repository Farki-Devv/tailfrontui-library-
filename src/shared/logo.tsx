/**
 * @file logo.tsx
 * @overview Displays the logo.
 */
import TailfrontLogo from '../assets/tflogo.svg';
function Logo() {
  return (
    <>
      <img src={TailfrontLogo} alt="" className="size-9" />
    </>
  );
}

export default Logo;
