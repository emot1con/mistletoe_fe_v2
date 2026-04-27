import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper to handle conditional classes
function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export default function SideNav() {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
    { name: 'Repositories', path: '/repos', icon: 'folder_open' },
    { name: 'Saved', path: '/saved', icon: 'bookmark' },
    { name: 'History', path: '/history', icon: 'history' },
    { name: 'Settings', path: '/settings', icon: 'settings' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="bg-[#161c25] h-full w-64 fixed left-0 top-0 flex flex-col py-8 px-4 shadow-[1px_0_0_0_rgba(60,73,74,0.15)] z-40">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary" data-icon="terminal">terminal</span>
        </div>
        <div>
          <h1 className="font-headline font-bold text-[#dde3ef] text-xl leading-none">Wistletoe</h1>
          <p className="text-[10px] text-on-surface-variant font-medium tracking-widest uppercase mt-1">Analysis Engine</p>
        </div>
      </div>
      <nav className="space-y-1 flex-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "rounded-md flex items-center gap-3 px-3 py-2.5 font-medium text-sm transition-all ease-in-out duration-300",
              isActive(item.path) 
                ? "bg-[#242a33] text-[#55d8e1]" 
                : "text-[#bbc9ca] hover:bg-[#242a33] hover:text-[#dde3ef]"
            )}
          >
            <span className="material-symbols-outlined" data-icon={item.icon}>{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-auto pt-6 border-t border-outline-variant/15">
        <Link 
          to="/feature" 
          className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg shadow-primary/10 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-lg" data-icon="add">add</span>
          New Analysis
        </Link>
        <div className="mt-6 space-y-1">
          <a className="text-[#bbc9ca] hover:text-[#dde3ef] flex items-center gap-3 px-3 py-2 text-xs font-medium" href="#">
            <span className="material-symbols-outlined text-sm" data-icon="description">description</span>
            Docs
          </a>
          <a className="text-[#bbc9ca] hover:text-[#dde3ef] flex items-center gap-3 px-3 py-2 text-xs font-medium" href="#">
            <span className="material-symbols-outlined text-sm" data-icon="help_outline">help_outline</span>
            Support
          </a>
        </div>
      </div>
    </aside>
  );
}
