/**
 * @file saidbar.tsx
 * @overview Displays the saidbar.
 */

import { useLocation, useNavigate } from 'react-router-dom';
import { ScrollArea } from '../elements/scroll-area';
import {
  saidbarElementsLinks,
  saidbarOverviewLinks,
  saidbarThemesLinks,
} from '../utils';
import React from 'react';
function Saidbar() {
  const router = useNavigate();
	const location = useLocation()
  const active = String(location.pathname)
  return (
    <div>
      <ScrollArea className="">
        <div className="flex flex-col gap-6 pr-1 h-screen w-[15.375rem] space-y-2 max-md:hidden">
          {/* Saibar Overview */}
          <div className="flex flex-col gap-2">
            <span className="text-type-950 text-base font-inter font-medium">
              Overview
            </span>
            <div>
              {saidbarOverviewLinks.map((element) => (
                <>
                  <div
                    key={element.name}
                    onClick={() => router(element.path)}
                    className={`${active ===element.path ? 'bg-container-100' : ''} text-sm cursor-pointer hover:bg-container-100 px-3 py-2 rounded-lg squircle`}
                  >
                    {element.name}
                  </div>
                </>
              ))}
            </div>
          </div>

          {/* Saidbar Themes */}
          <div className="flex flex-col gap-2">
            <span className="text-type-950 text-base font-inter font-medium">
              Themes
            </span>
            <div>
              {saidbarThemesLinks.map((element) => (
                <>
                  <div
                    key={element.name}
                    onClick={() => router(element.path)}
                    className={`${active && active.includes(element.path) ? 'bg-container-100' : ''} text-sm cursor-pointer hover:bg-container-100 px-3 py-2 rounded-lg squircle`}
                  >
                    {element.name}
                  </div>
                </>
              ))}
            </div>
          </div>

          {/* Saidbar Components */}
          <div className="flex flex-col gap-2">
            <span className="text-type-950 text-base font-inter font-medium">
              Components
            </span>
            <div>
              {saidbarElementsLinks.map((element) => (
                <>
                  <div
                    key={element.name}
                    onClick={() => router(element.path)}
                    className={`${active && active.includes(element.path) ? 'bg-container-100' : ''} text-sm cursor-pointer hover:bg-container-100 px-3 py-2 rounded-lg squircle`}
                  >
                    {element.name}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}

export default Saidbar;
