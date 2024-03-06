import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';


import DownArrowIcon from '@/components/icons/arrowdown';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropmenu = useRef<HTMLDivElement>(null);

  const closeOpenMenus = (e: MouseEvent) => {
    if (isOpen && !dropmenu.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeOpenMenus);
  });

  return (
    <div ref={dropmenu} className="relative inline-block text-left">
      <button onClick={handleClick} className="flex items-center gap-1 hover:opacity-65 duration-200" type="button">
        Products
        <DownArrowIcon />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-52 rounded-md shadow-lg bg-apexpoint-nav-orange">
          <div className="py-1 pl-3" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <h2>ALL PRODUCTS</h2>
            <div className="flex flex-col pl-5">
              <Link className="font-semibold hover:opacity-65 duration-200" href="/chlorelief">
                Chlorelief
              </Link>
              <Link className="font-semibold hover:opacity-65 duration-200" href="/lubie">
                Lubie
              </Link>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
