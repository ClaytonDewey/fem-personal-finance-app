import Link from 'next/link';
import { Icon } from '../svg';
import { NavLinks } from '.';

const SideNav = () => {
  return (
    <div>
      <Link href='/'>
        <Icon name='logo' />
      </Link>
      <div>
        <NavLinks />
      </div>
    </div>
  );
};
export default SideNav;
