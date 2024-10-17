/**
 * @file logo.tsx
 * @overview Displays the logo.
 */
import TailfrontLogo from '../assets/tflogo.svg';
function Logo() {
  return (
    <a href='/'>
      <img src={TailfrontLogo} alt="" className="size-9" />
    </a>
  );
}

export default Logo;
