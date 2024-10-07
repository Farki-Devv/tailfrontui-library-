/**
 * @file navbar.tsx
 * @overview Displays a navbar.
 */
import { FiGithub } from 'react-icons/fi';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../elements/button';
import { Input } from '../elements/input';
import Logo from './logo';
import React from 'react';
// Navbar elements
const navLinks = [
  {
    name: 'Docs',
    path: '/docs',
  },
  {
    name: 'Elements',
    path: '/elements',
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
  const navigate = useNavigate();
	const active = useLocation().pathname
  return (
    <>
      <div className="flex justify-between items-center h-[84px]">
        <div className="flex gap-8">
          {/* Logo */}
          <Logo />

          {/* Nav links map */}
          <div className="flex gap-2">
            {navLinks.map((link) => (
              <Button
                key={link.name}
                variant={active === link.path ? 'secondary' : 'ghost'}
                onClick={() => navigate(link.path)}
              >
                {link.name}
              </Button>
							
            ))}
          </div>
        </div>

        {/* Search bar and buttons */}
        <div className="flex gap-2 items-center">
          <div className="relative">
            <Input placeholder="Type keywords..." className="w-[17.5rem]" />
            <div className="border absolute rounded-lg text-xs px-1 py-0.5 text-type-500 right-3 top-2 border-stroke-200">
              ⌘ K
            </div>
          </div>
          <Button variant={'outline'} className="tracking-wide">
            <FiGithub className="text-type-500" />
            GitHub
          </Button>
          <Button>Get Started</Button>
        </div>
      </div>
			{/* body other elements for example: pages (home , docs, elements, blog) */}
      <div className="mt-10">
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;
