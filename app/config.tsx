import { usePathname } from 'next/navigation';

import { Icon } from './svg';

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: 'Overview',
      href: '/dashboard',
      icon: <Icon name='home' />,
      active: pathname === '/dashboard',
    },
    {
      name: 'Transaction',
      href: '/dashboard/transactions',
      icon: <Icon name='nav-transactions' />,
      active: isNavItemActive(pathname, '/dashboard/transactions'),
    },
    {
      name: 'Budgets',
      href: '/dashboard/budgets',
      icon: <Icon name='nav-budgets' />,
      active: isNavItemActive(pathname, '/dashboard/budgets'),
    },
    {
      name: 'Pots',
      href: '/dashboard/pots',
      icon: <Icon name='nav-pots' />,
      active: isNavItemActive(pathname, '/dashboard/pots'),
    },
    {
      name: 'Recurring Bills',
      href: '/dashboard/recurring-bills',
      icon: <Icon name='nav-recurring' />,
      active: isNavItemActive(pathname, '/dashboard/recurring-bills'),
    },
  ];
};
