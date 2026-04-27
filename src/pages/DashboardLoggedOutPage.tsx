import { useAuth } from '../auth/useAuth';

export default function DashboardLoggedOutPage() {
  const { login } = useAuth();

  return (
    <>
      
{/* Layout Container */}
<div className="flex h-screen w-full overflow-hidden">
{/* SideNavBar */}
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
{/* Dashboard Active */}
<a className="bg-[#242a33] text-[#55d8e1] rounded-md flex items-center gap-3 px-3 py-2.5 font-medium text-sm transition-all ease-in-out duration-300" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
<a className="text-[#bbc9ca] hover:bg-[#242a33] hover:text-[#dde3ef] rounded-md flex items-center gap-3 px-3 py-2.5 font-medium text-sm transition-all ease-in-out duration-300" href="#">
<span className="material-symbols-outlined" data-icon="folder_open">folder_open</span>
<span>Repositories</span>
</a>
<a className="text-[#bbc9ca] hover:bg-[#242a33] hover:text-[#dde3ef] rounded-md flex items-center gap-3 px-3 py-2.5 font-medium text-sm transition-all ease-in-out duration-300" href="#">
<span className="material-symbols-outlined" data-icon="history">history</span>
<span>History</span>
</a>
<a className="text-[#bbc9ca] hover:bg-[#242a33] hover:text-[#dde3ef] rounded-md flex items-center gap-3 px-3 py-2.5 font-medium text-sm transition-all ease-in-out duration-300" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span>Settings</span>
</a>
</nav>
<div className="mt-auto pt-6 border-t border-outline-variant/15">
<button onClick={login} className="w-full bg-[#242a33] text-on-surface hover:bg-[#2f353e] font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg active:scale-95 transition-transform">
<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                    Connect GitHub
                </button>
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
{/* Main Content */}
<main className="flex-1 ml-64 overflow-y-auto no-scrollbar h-full bg-surface">
{/* Top Bar */}
<header className="h-16 flex items-center justify-between px-8 sticky top-0 bg-surface/80 backdrop-blur-md z-30">
<div className="flex-1 max-w-2xl">
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" data-icon="search">search</span>
<input className="w-full bg-surface-container-highest border-none rounded-full pl-12 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary/50 text-on-surface placeholder-on-surface-variant" placeholder="Search across all repositories..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6 ml-8">
<div className="flex items-center gap-2 bg-surface-container-high px-3 py-1.5 rounded-lg border border-outline-variant/10 cursor-not-allowed opacity-50">
<span className="text-xs font-medium text-on-surface-variant">Status:</span>
<span className="text-xs font-semibold text-primary">Inactive</span>
<span className="material-symbols-outlined text-sm" data-icon="expand_more">expand_more</span>
</div>
<div className="flex items-center gap-2 bg-surface-container-high px-3 py-1.5 rounded-lg border border-outline-variant/10 cursor-not-allowed opacity-50">
<span className="text-xs font-medium text-on-surface-variant">Period:</span>
<span className="text-xs font-semibold text-primary">Last 30 Days</span>
<span className="material-symbols-outlined text-sm" data-icon="expand_more">expand_more</span>
</div>
<div className="h-8 w-px bg-outline-variant/20 mx-2"></div>
<button className="material-symbols-outlined text-on-surface-variant hover:text-on-surface" data-icon="notifications">notifications</button>
<div onClick={login} className="flex items-center gap-3 ml-2 group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant/30">
<span className="material-symbols-outlined text-lg text-on-surface-variant" data-icon="person">person</span>
</div>
<span className="text-sm font-medium text-on-surface-variant group-hover:text-primary transition-colors">Sign In</span>
</div>
</div>
</header>
{/* Dashboard Grid */}
<div className="p-8 grid grid-cols-12 gap-6">
{/* Left Column: Summary Cards */}
<div className="col-span-12 lg:col-span-4 space-y-6">
<div className="bg-surface-container-high p-6 rounded-xl relative overflow-hidden group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="database">database</span>
</div>
<span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">0 this week</span>
</div>
<h3 className="text-on-surface-variant text-xs font-medium mb-1 uppercase tracking-wider">Total Repositories</h3>
<p className="text-4xl font-headline font-bold text-on-surface-variant/50">0</p>
<div className="mt-4 h-1 bg-surface-container-lowest rounded-full overflow-hidden">
<div className="h-full bg-surface-container-highest w-0"></div>
</div>
</div>
<div className="bg-surface-container-high p-6 rounded-xl relative overflow-hidden group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="analytics">analytics</span>
</div>
<span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">No Activity</span>
</div>
<h3 className="text-on-surface-variant text-xs font-medium mb-1 uppercase tracking-wider">Total Analysis</h3>
<p className="text-4xl font-headline font-bold text-on-surface-variant/50">0</p>
<div className="mt-4 flex items-center gap-2">
<span className="text-[10px] text-on-surface-variant">Connect a source to begin</span>
</div>
</div>
<div className="bg-surface-container-high p-6 rounded-xl relative overflow-hidden group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="check_circle">check_circle</span>
</div>
<span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">N/A</span>
</div>
<h3 className="text-on-surface-variant text-xs font-medium mb-1 uppercase tracking-wider">Success Rate</h3>
<p className="text-4xl font-headline font-bold text-on-surface-variant/50">0<span className="text-xl">%</span></p>
<div className="mt-4 h-1 bg-surface-container-lowest rounded-full overflow-hidden">
<div className="h-full bg-surface-container-highest w-0"></div>
</div>
</div>
<div className="bg-surface-container-high p-6 rounded-xl relative overflow-hidden group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="payments">payments</span>
</div>
</div>
<h3 className="text-on-surface-variant text-xs font-medium mb-1 uppercase tracking-wider">Estimated Cost</h3>
<p className="text-4xl font-headline font-bold text-on-surface-variant/50">$0</p>
<p className="text-[10px] text-on-surface-variant mt-2">Free plan • <span className="text-primary underline cursor-pointer">Upgrade</span></p>
</div>
</div>
{/* Right Column: Charts */}
<div className="col-span-12 lg:col-span-8 space-y-6">
{/* Activity Line Chart */}
<div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
<div className="flex justify-between items-center mb-8">
<div>
<h2 className="font-headline text-lg font-bold">Analysis Activity Over Time</h2>
<p className="text-xs text-on-surface-variant">Global performance metrics for the current period</p>
</div>
<div className="flex gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-low text-on-surface-variant opacity-30">
<span className="material-symbols-outlined text-sm" data-icon="show_chart">show_chart</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-low text-on-surface-variant opacity-30">
<span className="material-symbols-outlined text-sm" data-icon="bar_chart">bar_chart</span>
</button>
</div>
</div>
<div className="relative h-80 w-full flex flex-col items-center justify-center border-2 border-dashed border-outline-variant/20 rounded-xl bg-surface-container-lowest/30">
<span className="material-symbols-outlined text-4xl text-on-surface-variant/30 mb-2" data-icon="query_stats">query_stats</span>
<p className="text-sm text-on-surface-variant font-medium">No activity data available</p>
<p className="text-[10px] text-on-surface-variant/60 mt-1">Initialize your first scan to populate this chart</p>
</div>
</div>
{/* Distribution and Health Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
<h3 className="font-headline text-sm font-bold mb-6">Status Distribution</h3>
<div className="flex items-center gap-6">
<div className="relative w-32 h-32">
<svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
<circle cx="18" cy="18" fill="none" r="16" stroke="#242a33" strokeWidth="4"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-sm font-bold leading-none text-on-surface-variant">0</span>
<span className="text-[8px] text-on-surface-variant uppercase tracking-tighter font-bold">Empty</span>
</div>
</div>
<ul className="space-y-2.5 flex-1">
<li className="flex items-center justify-between text-xs opacity-30">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="text-on-surface-variant">Completed</span>
</div>
<span className="font-bold">0%</span>
</li>
<li className="flex items-center justify-between text-xs opacity-30">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="text-on-surface-variant">In-progress</span>
</div>
<span className="font-bold">0%</span>
</li>
<li className="flex items-center justify-between text-xs opacity-30">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-400"></span>
<span className="text-on-surface-variant">Failed</span>
</div>
<span className="font-bold">0%</span>
</li>
<li className="flex items-center justify-between text-xs opacity-30">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-surface-container-highest"></span>
<span className="text-on-surface-variant">Pending</span>
</div>
<span className="font-bold">0%</span>
</li>
</ul>
</div>
</div>
<div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10 flex flex-col justify-between">
<h3 className="font-headline text-sm font-bold mb-4">System Health</h3>
<div className="space-y-6">
<div className="flex justify-between items-end">
<div>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Avg Risk</p>
<p className="text-2xl font-headline font-bold text-on-surface-variant/40">Undefined</p>
</div>
<div className="text-right">
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Tech Debt</p>
<p className="text-2xl font-headline font-bold text-on-surface-variant/40">0%</p>
</div>
</div>
<div className="p-4 bg-surface-container-lowest rounded-lg border border-outline-variant/5">
<div className="flex items-center gap-2 text-[10px] text-on-surface-variant/50 mb-1.5 font-bold">
<span className="material-symbols-outlined text-xs" data-icon="auto_awesome">auto_awesome</span>
                                        INSIGHTS UNAVAILABLE
                                    </div>
<p className="text-xs leading-relaxed text-on-surface-variant/60">Connect repositories to see automated health improvements and technical debt tracking.</p>
</div>
</div>
</div>
</div>
{/* Source Code Preview */}
<div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10 flex items-center justify-between overflow-hidden relative group">
<div className="z-10 max-w-md">
<h3 className="font-headline text-sm font-bold mb-2">Latest Code Audit Snapshot</h3>
<p className="text-xs text-on-surface-variant mb-4">No recent scans detected. Connect your development environment to generate code health baselines.</p>
<button className="text-xs font-bold text-on-surface-variant/50 px-4 py-2 rounded-lg border border-outline-variant/30 cursor-not-allowed">NO DATA TO VIEW</button>
</div>
<div className="absolute right-0 top-0 h-full w-1/2 opacity-10">
<img className="w-full h-full object-cover grayscale blur-sm" data-alt="Placeholder image for empty code audit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXMeX9wTAv8prfOSJiPbRYQiT211gVD5J72FlzoF2yJXGwLHHt96c5d93Ovb5X8ZMCKSyzicvgLqpc7eUDcnHaHgBDgY8_GfF3ExHyxH54CVEjeeALBY0JkxNHoBCHByX7P9uYpfz3chfQq83m9ajEJGTqwKBEL9_uhnNFZ9jwYpuOc29Lj-Kji_kLMmbM2wX_F4j1tUzlttBWEnKiN7YOe4r44ckVxZ4wdJulTTd9zRwKEmYr77pp7sAmiqDLsEtWCH2jBP5xciXk"/>
</div>
</div>
</div>
</div>
</main>
</div>
{/* Floating Tooltip */}
<div className="fixed bottom-8 right-8 z-50">
<button onClick={login} className="w-14 h-14 rounded-full bg-primary text-on-primary shadow-[0_8px_32px_rgba(85,216,225,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
<span className="material-symbols-outlined text-3xl" data-icon="login">login</span>
</button>
</div>

    </>
  );
}
