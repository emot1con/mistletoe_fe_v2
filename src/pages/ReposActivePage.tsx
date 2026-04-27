export default function ReposActivePage() {
  return (
    <>
      
{/* SideNavBar Component */}
<aside className="hidden md:flex h-full w-64 fixed left-0 top-0 bg-[#161c25] shadow-[1px_0_0_0_rgba(60,73,74,0.15)] flex-col py-8 px-4 z-50">
<div className="mb-10 px-2">
<div className="flex items-center gap-3 cursor-pointer">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary" >cloud_sync</span>
</div>
<div>
<h1 className="font-headline font-bold text-[#dde3ef] text-xl tracking-tighter">Wistletoe</h1>
<p className="text-[10px] text-on-surface-variant font-medium tracking-widest uppercase">Analysis Engine</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-[#bbc9ca] hover:bg-[#242a33] hover:text-[#dde3ef] transition-all rounded-md font-['Inter'] text-sm font-medium ease-in-out duration-300 cursor-pointer" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 bg-[#242a33] text-[#55d8e1] rounded-md font-['Inter'] text-sm font-medium transition-all ease-in-out duration-300 cursor-pointer" href="#">
<span className="material-symbols-outlined" >folder_open</span>
<span>Repositories</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-[#bbc9ca] hover:bg-[#242a33] hover:text-[#dde3ef] transition-all rounded-md font-['Inter'] text-sm font-medium ease-in-out duration-300 cursor-pointer" href="#">
<span className="material-symbols-outlined">history</span>
<span>History</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-[#bbc9ca] hover:bg-[#242a33] hover:text-[#dde3ef] transition-all rounded-md font-['Inter'] text-sm font-medium ease-in-out duration-300 cursor-pointer" href="#">
<span className="material-symbols-outlined">settings</span>
<span>Settings</span>
</a>
</nav>
<div className="mt-auto pt-6 border-t border-outline-variant/10 space-y-1">
<button className="w-full flex items-center justify-center gap-2 py-3 mb-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-md active:scale-95 transition-transform text-sm">
<span className="material-symbols-outlined text-sm">add_circle</span>
            New Analysis
        </button>
<a className="flex items-center gap-3 px-3 py-2 text-[#bbc9ca] hover:text-[#dde3ef] transition-all text-xs font-medium cursor-pointer" href="#">
<span className="material-symbols-outlined text-sm">description</span>
<span>Docs</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-[#bbc9ca] hover:text-[#dde3ef] transition-all text-xs font-medium cursor-pointer" href="#">
<span className="material-symbols-outlined text-sm">help_outline</span>
<span>Support</span>
</a>
</div>
</aside>
{/* TopNavBar Component */}
<header className="fixed top-0 w-full z-40 h-16 bg-[#0e141c] flex justify-between items-center px-6 md:pl-72 md:pr-10">
<div className="flex items-center flex-1 max-w-xl">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">search</span>
<input className="w-full bg-surface-container-high border-none rounded-lg pl-10 pr-4 py-2 text-sm text-on-surface focus:ring-1 focus:ring-primary placeholder-on-surface-variant/50" placeholder="Search repositories..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4 ml-6">
<button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-4 py-1.5 rounded-lg text-sm font-bold active:scale-95 transition-transform">Add Repository</button>
<div className="flex items-center gap-2">
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">filter_list</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-tertiary rounded-full"></span>
</button>
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">settings</span>
</button>
</div>
<div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30 ml-2 cursor-pointer">
<img alt="User profile" className="w-full h-full object-cover" data-alt="Close up professional headshot of a developer in high contrast studio lighting with dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxq3ruzKdlPWwyb44xr5EThR59XVvdYEGPvcfKhlzDCtNwXaSkc6L_3cEgL6y6kbSvzdBuny6v4L4ZMJyCVR9ojqYoD81Xm6IEZ0FKknOWtGWCUfdIZZMTbiFczDrPsTnPiB_NVtKARJfxnoA3BT2vgKVPPhfV-RujcK_HYMV6_tCs4Iy8vRoJYBOth1FAXUAw2WiCUWifsE1kmG-sPiAklsl2R3-muvufHf-yC4tOgNA0owDM8D_dt0vZdJcVonqVel3j1UjYJVAC"/>
</div>
</div>
</header>
{/* Main Content Canvas */}
<main className="pt-24 pb-12 md:pl-72 md:pr-10 px-6 min-h-screen">
{/* Header Section */}
<section className="mb-10">
<h2 className="font-headline text-4xl font-bold tracking-tighter text-on-surface mb-2">Repositories</h2>
<p className="text-on-surface-variant max-w-2xl font-body">Manage your architectural analysis pipeline. Monitor code quality, security vectors, and structural health across your connected services.</p>
</section>
{/* Bento Grid Layout for Repo View */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
{/* Repository List (Main Column) */}
<div className="lg:col-span-8 space-y-4">
{/* Repo Card 1 */}
<div className="group bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 rounded-xl p-6 ghost-border relative overflow-hidden">
<div className="flex items-start justify-between relative z-10">
<div className="flex gap-4">
<div className="w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined text-primary text-3xl">terminal</span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<h3 className="font-headline font-semibold text-xl text-on-surface cursor-pointer">quantum-engine-v2</h3>
<span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-widest bg-secondary-container/20 text-secondary border border-secondary/20">Active</span>
</div>
<div className="flex items-center gap-4 text-sm text-on-surface-variant">
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-[#f1e05a]"></span> JavaScript
                                </span>
<span>Last analysis: Oct 24, 2023</span>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-2xl font-headline font-bold text-primary tracking-tighter">98.4</span>
<span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Health Score</span>
</div>
</div>
{/* Stats Preview */}
<div className="mt-6 flex gap-8 border-t border-outline-variant/10 pt-4">
<div className="flex flex-col">
<span className="text-xs text-on-surface-variant">Critical Vulns</span>
<span className="text-sm font-mono text-error font-bold">0</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-on-surface-variant">Cognitive Load</span>
<span className="text-sm font-mono text-on-surface font-bold">Low</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-on-surface-variant">Lines Analyzed</span>
<span className="text-sm font-mono text-on-surface font-bold">42.8k</span>
</div>
<button className="ml-auto text-primary text-sm font-bold flex items-center gap-1 hover:underline">Analysis <span className="material-symbols-outlined text-xs">arrow_forward</span></button>
</div>
</div>
{/* Repo Card 2 */}
<div className="group bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 rounded-xl p-6 ghost-border relative overflow-hidden">
<div className="flex items-start justify-between relative z-10">
<div className="flex gap-4">
<div className="w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined text-tertiary text-3xl">deployed_code</span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<h3 className="font-headline font-semibold text-xl text-on-surface cursor-pointer">atlas-api-gateway</h3>
<span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-widest bg-surface-container-highest text-on-surface-variant border border-outline-variant/30">Idle</span>
</div>
<div className="flex items-center gap-4 text-sm text-on-surface-variant">
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-[#3178c6]"></span> TypeScript
                                </span>
<span>Last analysis: Sep 12, 2023</span>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-2xl font-headline font-bold text-on-surface-variant tracking-tighter">72.1</span>
<span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Health Score</span>
</div>
</div>
<div className="mt-6 flex gap-8 border-t border-outline-variant/10 pt-4 opacity-70 group-hover:opacity-100 transition-opacity">
<div className="flex flex-col">
<span className="text-xs text-on-surface-variant">Critical Vulns</span>
<span className="text-sm font-mono text-tertiary font-bold">3</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-on-surface-variant">Cognitive Load</span>
<span className="text-sm font-mono text-on-surface font-bold">Medium</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-on-surface-variant">Lines Analyzed</span>
<span className="text-sm font-mono text-on-surface font-bold">128.4k</span>
</div>
<button className="ml-auto text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                        Run Analysis <span className="material-symbols-outlined text-xs">play_arrow</span>
</button>
</div>
</div>
{/* Connect Component */}
</div>
{/* Side Widgets (Secondary Column) */}
<div className="lg:col-span-4 space-y-6">
{/* Global Insights Component */}
<div className="bg-surface-container-low rounded-xl p-6 ghost-border">
<h5 className="text-xs uppercase tracking-[0.2em] font-bold text-tertiary mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-sm" >insights</span>
                    Global Insights
                </h5>
<div className="space-y-6">
<div className="flex items-center justify-between">
<span className="text-sm text-on-surface-variant">Total Repos</span>
<span className="text-lg font-mono font-bold text-on-surface">12</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-on-surface-variant">Critical Alerts</span>
<span className="text-lg font-mono font-bold text-error">03</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-on-surface-variant">Monthly Credits</span>
<div className="text-right">
<span className="text-lg font-mono font-bold text-primary">85%</span>
<div className="w-32 h-1.5 bg-surface-container-highest rounded-full mt-1 overflow-hidden">
<div className="h-full bg-primary" ></div>
</div>
</div>
</div>
</div>
</div>
{/* Language Vector Component */}
<div className="bg-surface-container-low rounded-xl p-6 ghost-border">
<h5 className="text-xs uppercase tracking-[0.2em] font-bold text-on-surface-variant mb-6">Language Vector</h5>
<div className="space-y-4">
<div className="relative">
<div className="flex justify-between text-xs mb-1">
<span className="font-medium">TypeScript</span>
<span className="text-on-surface-variant">42%</span>
</div>
<div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary" ></div>
</div>
</div>
<div className="relative">
<div className="flex justify-between text-xs mb-1">
<span className="font-medium">JavaScript</span>
<span className="text-on-surface-variant">31%</span>
</div>
<div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-[#f1e05a]" ></div>
</div>
</div>
<div className="relative">
<div className="flex justify-between text-xs mb-1">
<span className="font-medium">Python</span>
<span className="text-on-surface-variant">18%</span>
</div>
<div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-[#3572A5]" ></div>
</div>
</div>
<div className="relative">
<div className="flex justify-between text-xs mb-1">
<span className="font-medium">Go</span>
<span className="text-on-surface-variant">9%</span>
</div>
<div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-[#00ADD8]" ></div>
</div>
</div>
</div>
</div>
{/* Promotion Card Component */}
<div className="relative rounded-xl overflow-hidden h-48 group">
<img alt="Cybersecurity Visualization" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Close up high-tech glowing computer circuit board with neon cyan light lines running through pathways" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQsTYqNFwnr17DHrfeiAgiaGk0k4GxzCqnF5lM7qgb9enT1eLKgKUQ2Ph3ipGWf7TSuAFcrnWRfoV_rceWDHssrx0OzCCdnmxLC5q2DehiW2DrbmMKSYlsMsmK7QlbasAd_sansYWYgQHZbyu_C5h9FOq71kqziXI-5mJUHVjp8-XlKuWukwcHUTraah4cC-FN3DiD6tYrRcC3tUC2TE73dYd04EHO_7UB9FflId31g4VJ9O2RKHv9FLdQ5hACeYOfL0YJF7YwQqIo"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<span className="text-tertiary text-[10px] font-bold uppercase tracking-widest mb-1">Advanced Security</span>
<h6 className="font-headline text-lg font-bold text-on-surface leading-tight">Enable Real-Time Scanning</h6>
<button className="mt-2 text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                        Upgrade Plan <span className="material-symbols-outlined text-xs">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</main>
{/* Floating Action Button */}
<button className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full shadow-2xl flex items-center justify-center active:scale-95 transition-transform z-50 md:hidden">
<span className="material-symbols-outlined" >add</span>
</button>

    </>
  );
}
