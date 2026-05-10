import { useAuth } from '../../auth/useAuth';
import { useNavigate } from 'react-router-dom';

export default function TopBar() {
  const { logout, userId } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="h-16 flex items-center justify-between px-8 sticky top-0 bg-surface/80 backdrop-blur-md z-30 border-b border-outline-variant/10">
      <div className="flex-1 max-w-2xl">
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" data-icon="search">search</span>
          <input className="w-full bg-surface-container-highest border-none rounded-full pl-12 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary/50 text-on-surface placeholder-on-surface-variant" placeholder="Search across all repositories..." type="text"/>
        </div>
      </div>
      <div className="flex items-center gap-6 ml-8">
        <div className="group relative">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-primary/20 bg-surface-container-highest flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-xl">person</span>
            </div>
            <div className="hidden md:block">
              <div className="text-xs font-bold text-on-surface">User</div>
              <div className="text-[10px] text-on-surface-variant uppercase tracking-tighter">
                {userId ? `ID: ${userId.substring(0, 8)}` : 'Standard Account'}
              </div>
            </div>
          </div>
          
          <div className="absolute right-0 top-full mt-2 w-48 bg-surface-container-high rounded-xl shadow-2xl border border-outline-variant/20 py-2 hidden group-hover:block z-50">
            <button 
              onClick={() => navigate('/settings')}
              className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-surface-container-highest transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">settings</span>
              Settings
            </button>
            <div className="h-px bg-outline-variant/10 my-1"></div>
            <button 
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-error hover:bg-surface-container-highest transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm" data-icon="logout">logout</span>
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
