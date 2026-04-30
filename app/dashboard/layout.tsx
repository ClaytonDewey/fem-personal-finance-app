import { SideNav } from '../components';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='dashboard'>
      <SideNav />
      <div>{children}</div>
    </div>
  );
}
