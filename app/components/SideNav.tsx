'use client';

import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { Icon } from '../svg';
import { NavItems } from '../config';

const SideNav = () => {
  const navItems = NavItems();

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('sidebarExpanded');
      if (saved === null) {
        return true;
      }
      return JSON.parse(saved);
    }
    return true; // default state if window is not defined
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(
        'sidebarExpanded',
        JSON.stringify(isSidebarExpanded),
      );
    }
  }, [isSidebarExpanded]);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div>
      <div className={`sidenav ${isSidebarExpanded ? 'open' : ''}`}>
        <aside className='sidenav__wrapper'>
          <div>
            <div>
              <Link href='/'>
                <Icon name='logo' />
              </Link>
              <div>
                {navItems.map((item, idx) => (
                  <Fragment key={idx}>
                    <div>
                      <SideNavItem
                        label={item.name}
                        icon={item.icon}
                        path={item.href}
                        active={item.active}
                        isSidebarExpanded={isSidebarExpanded}
                      />
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </aside>
        <div className='button-container'>
          <button type='button' onClick={toggleSidebar}>
            {isSidebarExpanded ? (
              <>
                <Icon name='minimize' /> Minimize Menu
              </>
            ) : (
              <Icon name='minimize' />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default SideNav;

export const SideNavItem: React.FC<{
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  path: string;
  active: boolean;
  isSidebarExpanded: boolean;
}> = ({ label, icon, path, active, isSidebarExpanded }) => {
  return (
    <>
      {isSidebarExpanded ? (
        <Link href={path} className={`sidenav-link ${active ? 'active' : ''}`}>
          {icon}
          <span>{label}</span>
        </Link>
      ) : (
        <Link href={path} className={`sidenav-link ${active ? 'active' : ''}`}>
          {icon}
        </Link>
      )}
    </>
  );
};
