export default function DashboardPage() {
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
<button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg shadow-primary/10 active:scale-95 transition-transform">
<span className="material-symbols-outlined text-lg" data-icon="add">add</span>
                    New Analysis
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
<div className="flex items-center gap-2 bg-surface-container-high px-3 py-1.5 rounded-lg border border-outline-variant/10 cursor-pointer">
<span className="text-xs font-medium text-on-surface-variant">Status:</span>
<span className="text-xs font-semibold text-primary">All Active</span>
<span className="material-symbols-outlined text-sm" data-icon="expand_more">expand_more</span>
</div>
<div className="flex items-center gap-2 bg-surface-container-high px-3 py-1.5 rounded-lg border border-outline-variant/10 cursor-pointer">
<span className="text-xs font-medium text-on-surface-variant">Period:</span>
<span className="text-xs font-semibold text-primary">Last 30 Days</span>
<span className="material-symbols-outlined text-sm" data-icon="expand_more">expand_more</span>
</div>
<div className="h-8 w-px bg-outline-variant/20 mx-2"></div>
<button className="material-symbols-outlined text-on-surface-variant hover:text-on-surface" data-icon="notifications">notifications</button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-primary/20">
<img className="w-full h-full object-cover" data-alt="Close-up portrait of a developer with glasses" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzfCSk_yky4fDlQOHxFdkJUtI1TSEOWawobBJ_6MaQucYMGNATkSTsbpUOcTJbUQkJ1eHeW6spoedXt4-gHHV1fQLyiUZtPidWLcSmp75abqv3U3th6Wf0oBdfY70Mi4yijZ57F5E7phI--UHGzIRoO4zNWWHe4yGBmLYNdFOQVfeaY0rI69PT4vPaphiEzucICKLgf_dVPFPLJVTMekc5s5VpyRVZeCmrs-iUrzoJgfy0ObT043kHREX0YaLIsNFmqs1uxgTiwWy4"/>
</div>
</div>
</header>
{/* Dashboard Grid */}
<div className="p-8 grid grid-cols-12 gap-6">
{/* Left Column: Summary Cards */}
<div className="col-span-12 lg:col-span-4 space-y-6">
<div className="bg-surface-container-high p-6 rounded-xl relative overflow-hidden group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary" data-icon="database">database</span>
</div>
<span className="text-[10px] font-bold text-secondary uppercase tracking-tighter">+2 this week</span>
</div>
<h3 className="text-on-surface-variant text-xs font-medium mb-1 uppercase tracking-wider">Total Repositories</h3>
<p className="text-4xl font-headline font-bold text-on-surface">12</p>
<div className="mt-4 h-1 bg-surface-container-lowest rounded-full overflow-hidden">
<div className="h-full bg-primary w-[75%]"></div>
</div>
</div>
<div className="bg-surface-container-high p-6 rounded-xl relative overflow-hidden group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary" data-icon="analytics">analytics</span>
</div>
<span className="text-[10px] font-bold text-tertiary uppercase tracking-tighter">Peak volume</span>
</div>
<h3 className="text-on-surface-variant text-xs font-medium mb-1 uppercase tracking-wider">Total Analysis</h3>
<p className="text-4xl font-headline font-bold text-on-surface">45</p>
<div className="mt-4 flex items-center gap-2">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-surface-container-lowest border border-surface-container-high flex items-center justify-center text-[8px]">JS</div>
<div className="w-6 h-6 rounded-full bg-surface-container-lowest border border-surface-container-high flex items-center justify-center text-[8px]">PY</div>
<div className="w-6 h-6 rounded-full bg-surface-container-lowest border border-surface-container-high flex items-center justify-center text-[8px]">TS</div>
</div>
<span className="text-[10px] text-on-surface-variant">+3 languages</span>
</div>
</div>
<div className="bg-surface-container-high p-6 rounded-xl relative overflow-hidden group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-secondary" data-icon="check_circle">check_circle</span>
</div>
<span className="text-[10px] font-bold text-secondary uppercase tracking-tighter">Healthy</span>
</div>
<h3 className="text-on-surface-variant text-xs font-medium mb-1 uppercase tracking-wider">Success Rate</h3>
<p className="text-4xl font-headline font-bold text-on-surface">94<span className="text-xl">%</span></p>
<div className="mt-4 h-1 bg-surface-container-lowest rounded-full overflow-hidden">
<div className="h-full bg-secondary w-[94%] shadow-[0_0_8px_rgba(125,213,213,0.5)]"></div>
</div>
</div>
<div className="bg-surface-container-high p-6 rounded-xl relative overflow-hidden group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-outline/10 flex items-center justify-center">
<span className="material-symbols-outlined text-outline" data-icon="payments">payments</span>
</div>
</div>
<h3 className="text-on-surface-variant text-xs font-medium mb-1 uppercase tracking-wider">Estimated Cost</h3>
<p className="text-4xl font-headline font-bold text-on-surface">$12k</p>
<p className="text-[10px] text-on-surface-variant mt-2">Billed monthly • <span className="text-primary underline cursor-pointer">Manage</span></p>
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
<button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-highest text-primary">
<span className="material-symbols-outlined text-sm" data-icon="show_chart">show_chart</span>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-low text-on-surface-variant">
<span className="material-symbols-outlined text-sm" data-icon="bar_chart">bar_chart</span>
</button>
</div>
</div>
<div className="relative h-80 w-full">
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 150">
<defs>
<linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#55d8e1" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#55d8e1" stop-opacity="0"></stop>
</linearGradient>
</defs>
<path d="M0,120 Q50,100 100,110 T200,60 T300,80 T400,30 L400,150 L0,150 Z" fill="url(#gradient)"></path>
<path d="M0,120 Q50,100 100,110 T200,60 T300,80 T400,30" fill="none" stroke="#55d8e1" strokeLinecap="round" strokeWidth="3"></path>
<circle cx="400" cy="30" fill="#55d8e1" r="4"></circle>
<circle cx="400" cy="30" fill="#55d8e1" fill-opacity="0.2" r="8"></circle>
</svg>
<div className="absolute bottom-0 left-0 w-full flex justify-between px-2 text-[10px] text-on-surface-variant font-medium">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
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
<circle cx="18" cy="18" fill="none" r="16" stroke="#7dd5d5" stroke-dasharray="65, 100" strokeWidth="4"></circle>
<circle cx="18" cy="18" fill="none" r="16" stroke="#ffb68d" stroke-dasharray="15, 100" stroke-dashoffset="-65" strokeWidth="4"></circle>
<circle cx="18" cy="18" fill="none" r="16" stroke="#f87171" stroke-dasharray="10, 100" stroke-dashoffset="-80" strokeWidth="4"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-sm font-bold leading-none">45</span>
<span className="text-[8px] text-on-surface-variant uppercase tracking-tighter">Total</span>
</div>
</div>
<ul className="space-y-2.5 flex-1">
<li className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="text-on-surface-variant">Completed</span>
</div>
<span className="font-bold">65%</span>
</li>
<li className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<span className="text-on-surface-variant">In-progress</span>
</div>
<span className="font-bold">15%</span>
</li>
<li className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-400"></span>
<span className="text-on-surface-variant">Failed</span>
</div>
<span className="font-bold">10%</span>
</li>
<li className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-surface-container-highest"></span>
<span className="text-on-surface-variant">Pending</span>
</div>
<span className="font-bold">10%</span>
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
<p className="text-2xl font-headline font-bold text-tertiary">Moderate</p>
</div>
<div className="text-right">
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Tech Debt</p>
<p className="text-2xl font-headline font-bold text-on-surface">14%</p>
</div>
</div>
<div className="p-4 bg-surface-container-lowest rounded-lg">
<div className="flex items-center gap-2 text-[10px] text-secondary mb-1.5 font-bold">
<span className="material-symbols-outlined text-xs" data-icon="auto_awesome">auto_awesome</span>
                                        OPTIMIZED THIS WEEK
                                    </div>
<p className="text-xs leading-relaxed text-on-surface-variant">Migration to v4 reduced tech debt by <span className="text-on-surface font-semibold">2.4%</span> across 5 repos.</p>
</div>
</div>
</div>
</div>
{/* Source Code Preview */}
<div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10 flex items-center justify-between overflow-hidden relative group">
<div className="z-10 max-w-md">
<h3 className="font-headline text-sm font-bold mb-2">Latest Code Audit Snapshot</h3>
<p className="text-xs text-on-surface-variant mb-4">A visual baseline of the most recently scanned repository module: <span className="text-primary">frontend-v4/core</span></p>
<button className="text-xs font-bold text-primary px-4 py-2 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors">VIEW FULL SCAN</button>
</div>
<div className="absolute right-0 top-0 h-full w-1/2 opacity-30 group-hover:opacity-60 transition-opacity">
<img className="w-full h-full object-cover grayscale" data-alt="Close-up of clean source code" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXMeX9wTAv8prfOSJiPbRYQiT211gVD5J72FlzoF2yJXGwLHHt96c5d93Ovb5X8ZMCKSyzicvgLqpc7eUDcnHaHgBDgY8_GfF3ExHyxH54CVEjeeALBY0JkxNHoBCHByX7P9uYpfz3chfQq83m9ajEJGTqwKBEL9_uhnNFZ9jwYpuOc29Lj-Kji_kLMmbM2wX_F4j1tUzlttBWEnKiN7YOe4r44ckVxZ4wdJulTTd9zRwKEmYr77pp7sAmiqDLsEtWCH2jBP5xciXk"/>
</div>
</div>
</div>
</div>
</main>
</div>
{/* Floating Tooltip */}
<div className="fixed bottom-8 right-8 z-50">
<button className="w-14 h-14 rounded-full bg-primary text-on-primary shadow-[0_8px_32px_rgba(85,216,225,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
<span className="material-symbols-outlined text-3xl" data-icon="rocket_launch">rocket_launch</span>
</button>
</div>

    </>
  );
}
