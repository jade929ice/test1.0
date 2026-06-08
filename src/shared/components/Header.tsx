import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: '公司分析模块' },
  { path: '/subdomains', label: '子域名收集模块' },
  { path: '/analysis', label: '网站分析模块' },
  { path: '/ai', label: '智能对话' },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-surface-container-low border-b border-outline-variant z-50">
      <div className="flex justify-between items-center w-full px-lg max-w-container-max mx-auto h-full">
        <div className="flex items-center gap-8">
          <h1 className="text-headline-md font-headline-md font-bold tracking-tighter text-primary">
            CYBERCORE
          </h1>
          <nav className="hidden lg:flex gap-6 items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `pb-1 transition-colors ${
                    isActive
                      ? 'text-primary font-bold border-b-2 border-primary'
                      : 'text-on-surface-variant font-medium hover:text-primary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search Assets..."
              className="bg-surface-dim border border-outline-variant rounded-full py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary w-64"
            />
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-lg">
              search
            </span>
          </div>
          <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
         
        </div>
      </div>
    </header>
  );
}