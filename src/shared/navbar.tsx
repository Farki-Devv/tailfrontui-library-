/**
 * @file navbar.tsx
 * @overview Displays a navbar.
 */
import { useEffect } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/button';
import GlobalSearch from '../utils/lib';
import Logo from './logo';
import MobileSaidbar from './mobile-saidbar';
// Navbar elements
const navLinks = [
  {
    name: 'Docs',
    path: '/docs',
  },
  {
    name: 'Components',
    path: '/components',
  },
  {
    name: 'Themes',
    path: '/themes',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
];
function Navbar() {
  const router = useNavigate();
  const location = useLocation();
  const active = String(location.pathname);
  useEffect(() => {
    if (active === '/components') {
      router('/components/accordion');
    }
  }, [active, router]);

  useEffect(() => {
    if (active === '/themes') {
      router('/themes/colors');
    }
  }, [active, router]);
  return (
    <>
      <div className="flex justify-between items-center h-[84px]">
        <div className="flex gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="max-md:hidden">
              <Logo />
            </div>
            <div className="max-md:flex hidden">
              <MobileSaidbar />
            </div>
          </div>

          {/* Nav links map */}
          <div className="flex gap-2 max-md:hidden">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant={
                  active && active.includes(link.path) ? 'secondary' : 'ghost'
                }
                onClick={() => router(link.path)}
              >
                {link.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Search bar and buttons */}
        <div className="flex gap-2 items-center max-md:w-full">
          <GlobalSearch />
          <div className="grid grid-cols-2 w-full gap-2 items-center max-lg:hidden">
            <Button variant={'outline'} className="tracking-wide">
              <NavLink
                to={'https://github.com/tailfront'}
                target={'_blank'}
                className={'flex items-center gap-1'}
              >
                <FiGithub className="text-type-500" />
                GitHub
              </NavLink>
            </Button>

            <Button onClick={() => router('/docs')}>
              <span className="max-xl:flex">Get</span> Started
            </Button>
          </div>
          <div className="hidden max-md:flex items-center">
            <FaGithub className="text-type-500 size-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
