export default function HistoryLoggedOutPage() {
  return (
    <>
      
{/* TopNavBar */}
<header className="docked full-width top-0 sticky z-50 bg-[#0e141c] dark:bg-[#0e141c] bg-[#161c25] shadow-[0_1px_0_0_rgba(60,73,74,0.15)] flex justify-between items-center w-full px-8 py-4 max-w-none">
<div className="flex items-center gap-8">
<div className="text-2xl font-bold text-[#dde3ef] tracking-[-0.02em] font-['Space_Grotesk']">WISTLETOE</div>
<nav className="hidden md:flex gap-6">
<a className="text-[#bbc9ca] hover:text-[#dde3ef] transition-colors font-['Space_Grotesk'] tracking-tight" href="#">Platform</a>
<a className="text-[#bbc9ca] hover:text-[#dde3ef] transition-colors font-['Space_Grotesk'] tracking-tight" href="#">Solutions</a>
<a className="text-[#bbc9ca] hover:text-[#dde3ef] transition-colors font-['Space_Grotesk'] tracking-tight" href="#">Enterprise</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="text-[#bbc9ca] hover:text-[#dde3ef] transition-colors font-medium px-4 py-2 scale-95 active:scale-100 transition-transform">Sign In</button>
<button className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold px-6 py-2.5 rounded-md scale-95 active:scale-100 transition-transform">Get Started</button>
</div>
</header>
<div className="flex min-h-[calc(100vh-72px)]">
{/* SideNavBar */}
<aside className="docked left-0 h-[calc(100vh-72px)] w-64 sticky bg-[#161c25] dark:bg-[#161c25] bg-[#0e141c] border-r border-[#3c494a]/15 shadow-2xl shadow-black/40 flex flex-col py-8 gap-2">
<div className="px-6 mb-8">
<div className="flex items-center gap-3 mb-10 px-2">
<div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary" data-icon="terminal">terminal</span>
</div>
<div>
<h1 className="font-headline font-bold text-[#dde3ef] text-xl leading-none">Wistletoe</h1>
<p className="text-[10px] text-on-surface-variant font-medium tracking-widest uppercase mt-1">Analysis Engine</p>
</div>
</div>
</div>
<div className="flex-1 space-y-1">
<div className="text-[#bbc9ca] flex items-center gap-3 px-4 py-3 opacity-30 cursor-not-allowed font-['Inter'] text-sm">
<span className="material-symbols-outlined">dashboard</span>
                    Overview
                </div>
{/* Active Determination: Historical Audits -> Analytics/History context */}
<div className="text-[#55d8e1] font-medium flex items-center gap-3 px-4 py-3 opacity-50 cursor-not-allowed font-['Inter'] text-sm">
<span className="material-symbols-outlined" >analytics</span>
                    Analytics
                </div>
<div className="text-[#bbc9ca] flex items-center gap-3 px-4 py-3 opacity-30 cursor-not-allowed font-['Inter'] text-sm">
<span className="material-symbols-outlined">lock</span>
                    Security
                </div>
<div className="text-[#bbc9ca] flex items-center gap-3 px-4 py-3 opacity-30 cursor-not-allowed font-['Inter'] text-sm">
<span className="material-symbols-outlined">settings</span>
                    Settings
                </div>
</div>
<div className="mt-auto pt-6 border-t border-outline-variant/15 px-4">
<button className="w-full bg-[#242a33] text-on-surface hover:bg-[#2f353e] font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg active:scale-95 transition-transform">
<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                    Connect GitHub
                </button>
<div className="mt-6 space-y-1 mb-6">
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
<main className="flex-1 p-12 bg-surface-dim overflow-y-auto">
<div className="max-w-6xl mx-auto">
{/* Header Section */}
<header className="mb-16">
<h1 className="font-headline text-5xl font-bold tracking-[-0.02em] text-on-surface mb-4">Analysis History</h1>
<p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
                        Review past repository audits, quality trends, and security vulnerability reports generated by the Wistletoe AI engine.
                    </p>
</header>
{/* Empty State Content Canvas */}
<div className="grid grid-cols-1 gap-8">
{/* Architectural Monolith: The Empty State Card */}
<div className="relative bg-surface-container-low rounded-xl p-16 flex flex-col items-center justify-center text-center overflow-hidden min-h-[500px]">
{/* Decorative Abstract Elements (Brutalist Backdrop) */}
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(85,216,225,0.03),transparent)]"></div>
<div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
</div>
{/* Central Illustration: The "Carved" Folder */}
<div className="relative z-10 mb-8">
<div className="w-48 h-48 relative flex items-center justify-center">
{/* Folder Base Shape (Custom Tonal Layers) */}
<div className="absolute inset-0 bg-surface-container-highest rounded-xl transform -rotate-3 border border-outline-variant/10"></div>
<div className="absolute inset-0 bg-surface-container-high rounded-xl transform rotate-2 border border-outline-variant/15 flex items-center justify-center">
<span className="material-symbols-outlined text-7xl text-primary/40" >folder_off</span>
</div>
{/* Floating Data Chips */}
<div className="absolute -top-4 -right-4 bg-surface-bright glass-effect p-3 rounded-lg border border-outline-variant/30 shadow-2xl">
<span className="material-symbols-outlined text-secondary text-xl">lock</span>
</div>
<div className="absolute -bottom-2 -left-6 bg-surface-container-lowest p-2 rounded border border-outline-variant/10">
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-primary/30"></div>
<div className="w-8 h-2 rounded-full bg-primary/10"></div>
</div>
</div>
</div>
</div>
{/* Empty State Messaging */}
<div className="relative z-10 max-w-md">
<h2 className="font-headline text-2xl font-bold text-on-surface mb-4">No Analysis History Found</h2>
<p className="text-on-surface-variant font-body mb-10 leading-relaxed">
                                You must be signed in to access your historical repository audits and quality reports. Connect your account to synchronize your development workflow.
                            </p>
{/* Primary CTA */}
<button className="group relative flex items-center gap-3 bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-bold text-lg shadow-xl shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
<img alt="GitHub Logo" className="w-6 h-6" data-alt="minimalist black github logo icon for authentication action" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7nukNV5zsam3GKdUpXvEm_5RSuXa6idPoYelMAXHCDoY5g77Zybm2vA6_xU0ETU8PA0eELhCYJZLukWVLjwjGOZMc_p5gv8BJHzA5zOpkKYydIe8DeUda1gMPepu_Vf6WoQ0n0jBpkrBKOFY1IiBCACuJVVsyfZH1IQr-DDhdVFD5BUKPERVofldiOfNBokN6zx9XK-mWbGsx78-IvwxPcXRfV-_N_qrx3i1Qf-NW4dKcg2AtDssdUj1V7FwVcCk6RgUaXhYwXPRH"/>
                                Connect with GitHub
                                <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
</button>
</div>
</div>
{/* Supplemental Bento Featurettes (Secondary Context) */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container-low p-8 rounded-xl border-b-2 border-outline/10 flex flex-col gap-4">
<span className="material-symbols-outlined text-secondary text-3xl">insights</span>
<h3 className="font-headline font-bold text-on-surface">Trend Tracking</h3>
<p className="text-sm text-on-surface-variant">Monitor code health progress across months of commits once authenticated.</p>
</div>
<div className="bg-surface-container-low p-8 rounded-xl border-b-2 border-outline/10 flex flex-col gap-4">
<span className="material-symbols-outlined text-tertiary text-3xl">security</span>
<h3 className="font-headline font-bold text-on-surface">Vulnerability Logs</h3>
<p className="text-sm text-on-surface-variant">Retain a permanent record of all patches and security remediation history.</p>
</div>
<div className="bg-surface-container-low p-8 rounded-xl border-b-2 border-outline/10 flex flex-col gap-4">
<span className="material-symbols-outlined text-primary text-3xl">history</span>
<h3 className="font-headline font-bold text-on-surface">Audit Snapshots</h3>
<p className="text-sm text-on-surface-variant">Compare current code quality against historical baseline snapshots.</p>
</div>
</div>
</div>
{/* Subtle Informational Footer */}
<footer className="mt-24 pt-12 border-t border-outline-variant/10 flex justify-between items-center text-xs text-on-surface-variant/60 font-label tracking-widest uppercase">
<div>© 2024 WISTLETOE SYSTEMS</div>
<div className="flex gap-8">
<a className="hover:text-primary transition-colors" href="#">Documentation</a>
<a className="hover:text-primary transition-colors" href="#">Privacy Protocol</a>
<a className="hover:text-primary transition-colors" href="#">Status</a>
</div>
</footer>
</div>
</main>
</div>
{/* Background Decoration */}
<div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
<div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px]"></div>
<div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[140px]"></div>
</div>

    </>
  );
}
