import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-white overflow-x-hidden min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0ea5e910] via-transparent to-transparent" />
    </div>
  );
}