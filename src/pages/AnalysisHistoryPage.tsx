export default function AnalysisHistoryPage() {
  return (
    <>
      
{/* SideNavBar (Shared Component) */}
<aside className="h-screen w-64 fixed left-0 top-0 flex flex-col bg-[#161c25] dark:bg-[#161c25] shadow-[1px_0_0_0_rgba(60,73,74,0.15)] z-50">
<div className="flex flex-col h-full py-6 space-y-4">
{/* Header Identity */}
<div className="px-6 mb-8 flex items-center space-x-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-primary" data-icon="terminal">terminal</span>
</div>
<div>
<h2 className="font-['Space_Grotesk'] font-bold text-[#55d8e1] leading-none">Main Repository</h2>
<span className="text-[10px] text-on-surface-variant font-medium tracking-widest uppercase">v2.4.0-stable</span>
</div>
</div>
{/* Navigation Links */}
<nav className="flex-1 space-y-1">
<div className="px-3">
<a className="flex items-center px-3 py-2.5 text-[#bbc9ca] hover:bg-[#242a33]/30 hover:text-[#dde3ef] transition-all duration-150 ease-in-out font-['Inter'] text-[13px]" href="{{DATA:SCREEN:SCREEN_26}}">
<span className="material-symbols-outlined mr-3 text-lg" data-icon="dashboard">dashboard</span>
                        Dashboard
                    </a>
<a className="flex items-center px-3 py-2.5 text-[#bbc9ca] hover:bg-[#242a33]/30 hover:text-[#dde3ef] transition-all duration-150 ease-in-out font-['Inter'] text-[13px]" href="#">
<span className="material-symbols-outlined mr-3 text-lg" data-icon="source">source</span>
                        Repositories
                    </a>
{/* Active State for History */}
<a className="flex items-center px-3 py-2.5 bg-[#242a33] text-[#55d8e1] font-semibold border-r-2 border-[#55d8e1] transition-all duration-150 ease-in-out font-['Inter'] text-[13px]" href="#">
<span className="material-symbols-outlined mr-3 text-lg" data-icon="history">history</span>
                        History
                    </a>
<a className="flex items-center px-3 py-2.5 text-[#bbc9ca] hover:bg-[#242a33]/30 hover:text-[#dde3ef] transition-all duration-150 ease-in-out font-['Inter'] text-[13px]" href="#">
<span className="material-symbols-outlined mr-3 text-lg" data-icon="settings">settings</span>
                        Settings
                    </a>
</div>
</nav>
{/* CTA */}
<div className="px-6 py-4">
<button className="w-full py-3 px-4 bg-gradient-to-br from-primary to-primary-container text-on-primary text-xs font-bold rounded-lg flex items-center justify-center space-x-2 active:scale-95 transition-all" >
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
<span>New Analysis</span>
</button>
</div>
{/* Footer Tabs */}
<div className="px-3 pt-4 border-t border-outline-variant/10">
<a className="flex items-center px-3 py-2 text-[#bbc9ca] hover:text-[#dde3ef] text-[12px]" href="#">
<span className="material-symbols-outlined mr-3 text-sm" data-icon="description">description</span>
                    Documentation
                </a>
<a className="flex items-center px-3 py-2 text-[#bbc9ca] hover:text-[#dde3ef] text-[12px]" href="#">
<span className="material-symbols-outlined mr-3 text-sm" data-icon="help">help</span>
                    Support
                </a>
</div>
</div>
</aside>
{/* Main Content Wrapper */}
<main className="ml-64 flex flex-col h-screen">
{/* TopNavBar (Shared Component) */}
<header className="w-full h-16 sticky top-0 z-40 flex items-center justify-between px-8 bg-[#0e141c] dark:bg-[#0e141c] bg-gradient-to-b from-[#161c25] to-transparent">
<div className="flex items-center space-x-8">
<span className="font-['Space_Grotesk'] font-bold tracking-tighter text-[#55d8e1] text-xl">MONOLITH.IO</span>
<nav className="hidden md:flex items-center space-x-6 font-['Space_Grotesk'] tracking-tight text-sm">
<a className="text-[#bbc9ca] hover:text-[#dde3ef] transition-colors" href="#">Repositories</a>
<a className="text-[#55d8e1] border-b-2 border-[#55d8e1] pb-1" href="#">Insights</a>
<a className="text-[#bbc9ca] hover:text-[#dde3ef] transition-colors" href="#">Security</a>
</nav>
</div>
<div className="flex items-center space-x-4">
<div className="relative w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" data-icon="search">search</span>
<input className="w-full bg-surface-container-lowest border-none text-xs rounded-md pl-10 pr-4 py-2 focus:ring-1 focus:ring-primary text-on-surface" placeholder="Search analysis..." type="text"/>
</div>
<button className="w-10 h-10 flex items-center justify-center text-[#bbc9ca] hover:bg-[#242a33]/50 rounded-md transition-all active:scale-95 duration-200">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="w-10 h-10 flex items-center justify-center text-[#bbc9ca] hover:bg-[#242a33]/50 rounded-md transition-all active:scale-95 duration-200">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<a href="{{DATA:SCREEN:SCREEN_29}}"><img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant/20 cursor-pointer" data-alt="close-up portrait of a professional man in a tech environment with soft ambient neon lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeBWwBw4Ljih1JJaZhhxUcapUMKRteHyUUBDhN9Iiu4YE8xJAA5IjWEzKy88NQEi2CV48_MxnTaKQyoaZDsgcZ3B7gunea7k7NHw4n-pYAXgu8VBMBF8_uniBDtproPyShA6Z28p5cA_54hPTRc9gHQGM8Y0PVtHn96a24ERND2k3lE7qmCg58TR_Rj8MWj1Cz_b1jsVgjTlJRqCPlxWHgqAv7SuL2ANBQrxrCbI5EzgFMVMU8bT-F6DS_9C0FEi6ws2JcAnuspu6Q"/></a>
</div>
</header>
{/* Page Content: Analysis History */}
<div className="flex-1 overflow-y-auto px-8 py-10">
{/* Header Section */}
<div className="mb-12 flex items-end justify-between">
<div>
<h1 className="font-headline text-4xl font-bold text-on-surface tracking-tighter mb-2">Analysis History</h1>
<p className="text-on-surface-variant text-sm max-w-md">Chronological record of automated repository audits and structural health checks.</p>
</div>
<div className="flex space-x-3">
<button className="flex items-center px-4 py-2 bg-surface-container-high text-on-surface text-xs font-medium rounded-lg border border-outline-variant/10 hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-sm mr-2" data-icon="filter_list">filter_list</span>
                        Filter Status
                    </button>
<button className="flex items-center px-4 py-2 bg-surface-container-high text-on-surface text-xs font-medium rounded-lg border border-outline-variant/10 hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-sm mr-2" data-icon="download">download</span>
                        Export Log
                    </button>
</div>
</div>
{/* Bento Grid - Quick Stats */}
<div className="grid grid-cols-4 gap-6 mb-12">
<div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-4xl" data-icon="database">database</span>
</div>
<span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest block mb-4">Total Scans</span>
<span className="font-headline text-3xl font-bold text-on-surface leading-none">1,248</span>
</div>
<div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-secondary relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-4xl" data-icon="check_circle">check_circle</span>
</div>
<span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest block mb-4">Success Rate</span>
<span className="font-headline text-3xl font-bold text-on-surface leading-none">99.2%</span>
</div>
<div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-tertiary relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-4xl" data-icon="warning">warning</span>
</div>
<span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest block mb-4">Total Failures</span>
<span className="font-headline text-3xl font-bold text-on-surface leading-none">14</span>
</div>
<div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-outline-variant relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-4xl" data-icon="schedule">schedule</span>
</div>
<span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest block mb-4">Avg Duration</span>
<span className="font-headline text-3xl font-bold text-on-surface leading-none">4.2m</span>
</div>
</div>
{/* Table View: History */}
<div className="bg-surface-container-low rounded-xl overflow-hidden shadow-2xl">
<table className="w-full border-collapse text-left">
<thead>
<tr className="bg-surface-container-high/50 border-b border-outline-variant/10">
<th className="px-6 py-5 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Repository Name</th>
<th className="px-6 py-5 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Status</th>
<th className="px-6 py-5 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Analysis Date</th>
<th className="px-6 py-5 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/5">
{/* Row 1: Completed */}
<tr className="hover:bg-surface-container-highest/30 transition-colors group">
<td className="px-6 py-5">
<div className="flex items-center">
<div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center mr-3">
<span className="material-symbols-outlined text-primary text-sm" data-icon="folder">folder</span>
</div>
<div>
<div className="text-sm font-semibold text-on-surface leading-tight">apollo-gateway-v3</div>
<div className="text-[10px] text-on-surface-variant">main branch • 42.1 MB</div>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider soft-glow-badge">
<span className="w-1.5 h-1.5 rounded-full bg-primary mr-1.5 animate-pulse"></span>
                                    Completed
                                </span>
</td>
<td className="px-6 py-5">
<div className="text-sm text-on-surface font-medium">Oct 24, 2023</div>
<div className="text-[10px] text-on-surface-variant uppercase tracking-tight">14:22 PM</div>
</td>
<td className="px-6 py-5 text-right">
<a className="inline-flex items-center text-xs font-bold text-primary group-hover:translate-x-1 transition-transform" href="{{DATA:SCREEN:SCREEN_25}}">
                                    View Detail
                                    <span className="material-symbols-outlined text-xs ml-1" data-icon="chevron_right">chevron_right</span>
</a>
</td>
</tr>
{/* Row 2: In-Progress */}
<tr className="hover:bg-surface-container-highest/30 transition-colors group">
<td className="px-6 py-5">
<div className="flex items-center">
<div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center mr-3">
<span className="material-symbols-outlined text-on-surface-variant text-sm" data-icon="architecture">architecture</span>
</div>
<div>
<div className="text-sm font-semibold text-on-surface leading-tight">nebula-ui-system</div>
<div className="text-[10px] text-on-surface-variant">dev-branch • 128.5 MB</div>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-surface-container-highest text-on-surface-variant border border-outline-variant/20">
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant mr-1.5"></span>
                                    In-progress
                                </span>
</td>
<td className="px-6 py-5">
<div className="text-sm text-on-surface font-medium">Oct 24, 2023</div>
<div className="text-[10px] text-on-surface-variant uppercase tracking-tight">16:45 PM</div>
</td>
<td className="px-6 py-5 text-right opacity-50 cursor-not-allowed">
<span className="text-xs font-bold text-on-surface-variant">
                                    Processing...
                                </span>
</td>
</tr>
{/* Row 3: Failed */}
<tr className="hover:bg-surface-container-highest/30 transition-colors group">
<td className="px-6 py-5">
<div className="flex items-center">
<div className="w-8 h-8 rounded bg-error/10 flex items-center justify-center mr-3">
<span className="material-symbols-outlined text-error text-sm" data-icon="code_off">code_off</span>
</div>
<div>
<div className="text-sm font-semibold text-on-surface leading-tight">legacy-crm-data</div>
<div className="text-[10px] text-on-surface-variant">staging • 1.2 GB</div>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-error-container text-on-error-container">
<span className="w-1.5 h-1.5 rounded-full bg-error mr-1.5"></span>
                                    Failed
                                </span>
</td>
<td className="px-6 py-5">
<div className="text-sm text-on-surface font-medium">Oct 23, 2023</div>
<div className="text-[10px] text-on-surface-variant uppercase tracking-tight">09:12 AM</div>
</td>
<td className="px-6 py-5 text-right">
<a className="inline-flex items-center text-xs font-bold text-error group-hover:translate-x-1 transition-transform" href="{{DATA:SCREEN:SCREEN_25}}">
                                    View Error
                                    <span className="material-symbols-outlined text-xs ml-1" data-icon="chevron_right">chevron_right</span>
</a>
</td>
</tr>
{/* Row 4: Completed */}
<tr className="hover:bg-surface-container-highest/30 transition-colors group">
<td className="px-6 py-5">
<div className="flex items-center">
<div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center mr-3">
<span className="material-symbols-outlined text-primary text-sm" data-icon="database">database</span>
</div>
<div>
<div className="text-sm font-semibold text-on-surface leading-tight">auth0-integration-sdk</div>
<div className="text-[10px] text-on-surface-variant">main branch • 12.4 MB</div>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider soft-glow-badge">
<span className="w-1.5 h-1.5 rounded-full bg-primary mr-1.5"></span>
                                    Completed
                                </span>
</td>
<td className="px-6 py-5">
<div className="text-sm text-on-surface font-medium">Oct 22, 2023</div>
<div className="text-[10px] text-on-surface-variant uppercase tracking-tight">18:30 PM</div>
</td>
<td className="px-6 py-5 text-right">
<a className="inline-flex items-center text-xs font-bold text-primary group-hover:translate-x-1 transition-transform" href="{{DATA:SCREEN:SCREEN_25}}">
                                    View Detail
                                    <span className="material-symbols-outlined text-xs ml-1" data-icon="chevron_right">chevron_right</span>
</a>
</td>
</tr>
{/* Row 5: Completed */}
<tr className="hover:bg-surface-container-highest/30 transition-colors group">
<td className="px-6 py-5">
<div className="flex items-center">
<div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center mr-3">
<span className="material-symbols-outlined text-primary text-sm" data-icon="layers">layers</span>
</div>
<div>
<div className="text-sm font-semibold text-on-surface leading-tight">wistletoe-core-engine</div>
<div className="text-[10px] text-on-surface-variant">stable-release • 450 MB</div>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider soft-glow-badge">
<span className="w-1.5 h-1.5 rounded-full bg-primary mr-1.5"></span>
                                    Completed
                                </span>
</td>
<td className="px-6 py-5">
<div className="text-sm text-on-surface font-medium">Oct 21, 2023</div>
<div className="text-[10px] text-on-surface-variant uppercase tracking-tight">11:05 AM</div>
</td>
<td className="px-6 py-5 text-right">
<a className="inline-flex items-center text-xs font-bold text-primary group-hover:translate-x-1 transition-transform" href="{{DATA:SCREEN:SCREEN_25}}">
                                    View Detail
                                    <span className="material-symbols-outlined text-xs ml-1" data-icon="chevron_right">chevron_right</span>
</a>
</td>
</tr>
</tbody>
</table>
{/* Pagination */}
<div className="px-6 py-4 bg-surface-container-high/30 border-t border-outline-variant/10 flex items-center justify-between">
<span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Showing 1 to 5 of 1248 analyses</span>
<div className="flex space-x-2">
<button className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="navigate_before">navigate_before</span>
</button>
<button className="w-8 h-8 rounded bg-primary text-on-primary text-[10px] font-bold">1</button>
<button className="w-8 h-8 rounded bg-surface-container-highest text-[10px] font-bold text-on-surface hover:text-primary transition-colors">2</button>
<button className="w-8 h-8 rounded bg-surface-container-highest text-[10px] font-bold text-on-surface hover:text-primary transition-colors">3</button>
<button className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="navigate_next">navigate_next</span>
</button>
</div>
</div>
</div>
</div>
</main>
{/* Contextual FAB */}
<button className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-primary to-primary-container rounded-full shadow-2xl flex items-center justify-center text-on-primary hover:scale-110 active:scale-95 transition-all z-50">
<span className="material-symbols-outlined text-2xl" data-icon="add_task">add_task</span>
</button>

    </>
  );
}
