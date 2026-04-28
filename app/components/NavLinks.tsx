'use client';

import { Icon } from '../svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
const links = [
  { name: 'Overview', href: '/dashboard', iconName: 'home' },
  {
    name: 'Transactions',
    href: '/dashboard/transactions',
    iconName: 'nav-transactions',
  },
  { name: 'Budgets', href: '/dashboard/budgets', iconName: 'nav-budgets' },
  { name: 'Pots', href: '/dashboard/pots', iconName: 'nav-pots' },
  {
    name: 'Recurring bills',
    href: '/dashboard/recurring-bills',
    iconName: 'nav-recurring',
  },
];

const NavLinks = () => {
  // const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href} className='sidenav-link'>
            {/* <Icon name={link.iconName} /> */}
            {link.name}
          </Link>
        );
      })}
    </>
  );
};
export default NavLinks;
