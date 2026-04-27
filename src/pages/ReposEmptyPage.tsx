export default function ReposEmptyPage() {
  return (
    <>
      
{/* SideNavBar */}
<aside className="fixed left-0 top-0 h-full w-64 bg-[#161c25] flex flex-col p-6 space-y-2 z-50">
<div className="mb-10 flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-[#55d8e1]" >terminal</span>
</div>
<div>
<h1 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tighter text-[#55d8e1]">Wistletoe</h1>
<p className="text-[0.6875rem] uppercase tracking-widest text-on-surface-variant/60 font-semibold">Repo Analysis</p>
</div>
</div>
<nav className="flex-1 space-y-1">
{/* Dashboard */}
<a className="flex items-center gap-3 px-4 py-3 text-[#bbc9ca] hover:text-[#dde3ef] hover:bg-[#242a33] transition-all duration-200 font-['Inter'] text-[0.875rem] font-medium tracking-tight rounded-md active:scale-[0.98]" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
{/* Repositories (Active) */}
<a className="flex items-center gap-3 px-4 py-3 text-[#55d8e1] font-semibold border-r-2 border-[#55d8e1] bg-[#242a33]/50 font-['Inter'] text-[0.875rem] tracking-tight transition-all duration-200 active:scale-[0.98]" href="#">
<span className="material-symbols-outlined" data-icon="folder_special" >folder_special</span>
<span>Repositories</span>
</a>
{/* History */}
<a className="flex items-center gap-3 px-4 py-3 text-[#bbc9ca] hover:text-[#dde3ef] hover:bg-[#242a33] transition-all duration-200 font-['Inter'] text-[0.875rem] font-medium tracking-tight rounded-md active:scale-[0.98]" href="#">
<span className="material-symbols-outlined" data-icon="history">history</span>
<span>History</span>
</a>
{/* Settings */}
<a className="flex items-center gap-3 px-4 py-3 text-[#bbc9ca] hover:text-[#dde3ef] hover:bg-[#242a33] transition-all duration-200 font-['Inter'] text-[0.875rem] font-medium tracking-tight rounded-md active:scale-[0.98]" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span>Settings</span>
</a>
</nav>
<div className="pt-6 mt-auto border-t border-outline-variant/15"><button className="w-full bg-[#242a33] text-on-surface hover:bg-[#2f353e] font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg active:scale-95 transition-transform">
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
</div></div>
</aside>
{/* Main Application Wrapper */}
<div className="ml-64 min-h-screen flex flex-col">
{/* TopNavBar */}
<header className="sticky top-0 z-40 w-full bg-[#0e141c]/80 backdrop-blur-xl px-8 py-4 flex justify-between items-center shadow-[0px_4px_24px_rgba(0,0,0,0.2)]">
<div className="flex items-center gap-8 w-full max-w-2xl">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
<input className="w-full bg-surface-container-highest border-none rounded-lg pl-10 pr-4 py-2 text-sm text-on-surface placeholder:text-on-surface-variant focus:ring-1 focus:ring-primary" placeholder="Search codebases..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-[#bbc9ca] hover:text-[#55d8e1] cursor-pointer transition-colors" data-icon="notifications">notifications</button>
<button className="material-symbols-outlined text-[#bbc9ca] hover:text-[#55d8e1] cursor-pointer transition-colors" data-icon="terminal">terminal</button>
</div>
<div className="h-8 w-[1px] bg-outline-variant/20"></div>
<div className="flex items-center gap-3">
<span className="font-['Space_Grotesk'] text-sm font-bold uppercase tracking-widest text-[#55d8e1]">Live Node: US-E1</span>
</div>
</div>
</header>
{/* Main Content Layout (Bento Grid) */}
<main className="p-8 flex flex-col lg:flex-row gap-8 architectural-grid flex-1">
{/* Canvas: Content Area */}
<section className="flex-1 space-y-8">
{/* Page Header */}
<div className="space-y-2">
<h2 className="font-headline text-4xl font-extrabold tracking-tighter text-on-surface">Repositories</h2>
<p className="text-on-surface-variant font-body max-w-md">Analyze and audit your codebase for performance bottlenecks and security vulnerabilities in real-time.</p>
</div>
{/* Empty State: Connect Card */}
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-container/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative aspect-[16/9] lg:aspect-auto lg:h-[400px] bg-surface-container border-2 border-dashed border-outline-variant/30 rounded-xl flex flex-col items-center justify-center p-12 text-center transition-all duration-300 hover:border-primary/40">
<div className="w-20 h-20 bg-surface-container-highest rounded-full flex items-center justify-center mb-8 shadow-2xl">
<span className="material-symbols-outlined text-4xl text-primary" >add_link</span>
</div>
<h3 className="font-headline text-2xl font-bold text-on-surface mb-3">Connect Your Codebase</h3>
<p className="text-on-surface-variant text-sm max-w-sm mb-10 leading-relaxed">
                            Start your intelligence journey by syncing your GitHub or GitLab repositories. We'll perform an initial deep scan immediately.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-md transition-all hover:brightness-110 active:scale-95 shadow-lg shadow-primary/20">
<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
<span>Sync GitHub Profile</span>
</button>
<button className="flex items-center gap-3 px-8 py-4 bg-surface-container-highest text-primary border border-primary/20 font-bold rounded-md transition-all hover:bg-surface-bright active:scale-95">
<span className="material-symbols-outlined">link</span>
<span>Manual Git URL</span>
</button>
</div>
</div>
</div>
{/* Contextual Hint */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 bg-surface-container-low rounded-xl ghost-border">
<span className="material-symbols-outlined text-primary mb-4">security</span>
<h4 className="text-sm font-bold text-on-surface mb-2">SOC2 Compliant</h4>
<p className="text-xs text-on-surface-variant leading-relaxed">Your source code is never stored. We only keep metadata and analysis results.</p>
</div>
<div className="p-6 bg-surface-container-low rounded-xl ghost-border">
<span className="material-symbols-outlined text-tertiary mb-4">bolt</span>
<h4 className="text-sm font-bold text-on-surface mb-2">Instant Analysis</h4>
<p className="text-xs text-on-surface-variant leading-relaxed">Get a comprehensive quality score within seconds of connecting your repo.</p>
</div>
<div className="p-6 bg-surface-container-low rounded-xl ghost-border">
<span className="material-symbols-outlined text-secondary mb-4">monitoring</span>
<h4 className="text-sm font-bold text-on-surface mb-2">Global Insights</h4>
<p className="text-xs text-on-surface-variant leading-relaxed">Compare your tech debt against industry standards for similar projects.</p>
</div>
</div>
</section>
{/* Sidebar: Global Insights */}
<aside className="w-full lg:w-80 space-y-6">
<div className="bg-surface-container-high rounded-xl p-6 ghost-border sticky top-24">
<div className="flex items-center justify-between mb-8">
<h3 className="font-headline text-lg font-bold text-on-surface tracking-tight">Global Insights</h3>
<span className="text-[0.6rem] bg-surface-container px-2 py-1 rounded text-on-surface-variant font-mono uppercase">Live</span>
</div>
<div className="space-y-6">
{/* Stat Item 1 */}
<div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg transition-transform hover:scale-[1.02]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-sm text-primary">inventory_2</span>
</div>
<span className="text-xs font-medium text-on-surface-variant">Total Repos</span>
</div>
<span className="font-headline text-xl font-bold text-on-surface">0</span>
</div>
{/* Stat Item 2 */}
<div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg transition-transform hover:scale-[1.02]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-sm text-error">report</span>
</div>
<span className="text-xs font-medium text-on-surface-variant">Critical Alerts</span>
</div>
<span className="font-headline text-xl font-bold text-on-surface">0</span>
</div>
{/* Stat Item 3 */}
<div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg transition-transform hover:scale-[1.02]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-sm text-tertiary">science</span>
</div>
<span className="text-xs font-medium text-on-surface-variant">Active Scans</span>
</div>
<span className="font-headline text-xl font-bold text-on-surface">0</span>
</div>
{/* Stat Item 4 */}
<div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg transition-transform hover:scale-[1.02]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-sm text-secondary">database</span>
</div>
<span className="text-xs font-medium text-on-surface-variant">Data Size</span>
</div>
<span className="font-headline text-xl font-bold text-on-surface">0B</span>
</div>
</div>
{/* Placeholder Insight Card */}
<div className="mt-10 p-5 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
<div className="flex items-center gap-2 mb-3">
<span className="material-symbols-outlined text-tertiary text-lg">lightbulb</span>
<span className="text-[0.65rem] font-bold uppercase tracking-widest text-tertiary">Suggestion</span>
</div>
<p className="text-xs text-on-surface-variant leading-relaxed">
                            No data available yet. Connect your first repository to unlock personalized performance insights and architectural recommendations.
                        </p>
</div>
<button className="w-full mt-8 py-3 text-xs font-bold text-primary hover:text-primary-container transition-colors uppercase tracking-widest">
                        View Full Report
                    </button>
</div>
{/* Promotional/Help Section */}
<div className="relative overflow-hidden group bg-surface-container-highest rounded-xl p-6">
<div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[120px]" >psychology</span>
</div>
<h4 className="text-sm font-bold text-on-surface mb-2 relative z-10">Intelligence V2</h4>
<p className="text-[0.6875rem] text-on-surface-variant mb-4 relative z-10">Try our new AI-driven code refactoring agent, currently in beta for all users.</p>
<a className="text-[0.6875rem] font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all relative z-10" href="#">
                        Learn more <span className="material-symbols-outlined text-xs">arrow_forward</span>
</a>
</div>
</aside>
</main>
</div>
{/* Footer for Anchoring (Heavy Weight) */}
<footer className="ml-64 bg-surface-container-lowest p-8 flex flex-col sm:flex-row justify-between items-center text-[0.6875rem] text-on-surface-variant/40">
<div className="flex items-center gap-6 mb-4 sm:mb-0">
<span>© 2024 Wistletoe Intelligence</span>
<a className="hover:text-primary" href="#">Status</a>
<a className="hover:text-primary" href="#">Documentation</a>
<a className="hover:text-primary" href="#">API</a>
</div>
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-mono">ENCRYPTED CONNECTION : AES-256</span>
</div>
</footer>

    </>
  );
}
