export default function FeatureAnalysisLoggedOutPage() {
  return (
    <>
      
{/* SideNavBar (Shared Component) */}
<aside className="flex flex-col h-full py-8 px-4 h-screen w-64 fixed left-0 top-0 overflow-y-auto bg-[#161c25] dark:bg-[#161c25] font-['Space_Grotesk'] text-sm tracking-tight z-50">
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
<button className="w-full bg-[#242a33] text-on-surface hover:bg-[#2f353e] font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg active:scale-95 transition-transform">
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
{/* TopAppBar (Shared Component) */}
<header className="flex justify-between items-center w-full px-8 ml-64 max-w-[calc(100%-16rem)] h-16 sticky top-0 z-40 bg-[#0e141c]/80 backdrop-blur-xl font-['Space_Grotesk'] font-medium">
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#00adb5]" data-icon="terminal">terminal</span>
<span className="font-black text-[#00adb5] tracking-tight">Monolith AI</span>
</div>
<div className="hidden md:flex items-center bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant/10 min-w-[300px]">
<span className="material-symbols-outlined text-on-surface-variant text-sm mr-2" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm text-on-surface w-full" placeholder="Search documentation..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 hover:text-[#55d8e1] transition-all cursor-pointer active:opacity-80">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</button>
<button className="px-4 py-1.5 border border-outline-variant rounded text-sm hover:bg-surface-container-high transition-colors">
            Login
        </button>
</div>
</header>
{/* Main Canvas */}
<main className="ml-64 p-8 min-h-[calc(100vh-4rem)] bg-surface flex flex-col items-center justify-center relative overflow-hidden">
{/* Subtle Architectural Background Accents */}
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tertiary/5 rounded-full blur-[100px] -z-10"></div>
{/* Content Container */}
<div className="w-full max-w-[800px] space-y-12">
{/* Empty State / Login Prompt */}
<div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
<div className="flex justify-center">
<div className="relative">
<div className="w-32 h-32 rounded-3xl bg-surface-container-high border border-outline-variant/20 flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
<svg className="text-on-surface/80" fill="currentColor" height="64" viewBox="0 0 24 24" width="64"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
</div>
<div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-primary flex items-center justify-center border-4 border-surface shadow-xl">
<span className="material-symbols-outlined text-on-primary text-xl" data-icon="hub">hub</span>
</div>
</div>
</div>
<div className="space-y-4">
<h1 className="text-4xl font-headline font-black tracking-tighter text-on-surface">
                    Connect your codebase to begin analysis
                </h1>
<p className="text-on-surface-variant font-body max-w-lg mx-auto text-lg leading-relaxed">
                    Analyze your repository architecture, estimate effort, and visualize technical impact with AI.
                </p>
</div>
<div className="flex flex-col items-center gap-4">
<button className="px-10 py-4 bg-[#24292e] text-white font-headline font-bold rounded-xl transition-all hover:shadow-[0_0_30px_rgba(36,41,46,0.4)] hover:scale-[1.02] active:scale-95 flex items-center gap-3 text-lg">
<svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
<span>Connect with GitHub</span>
</button>
<p className="text-xs text-on-surface-variant/60">No payment method required to start</p>
</div>
</div>
{/* Additional Context Section (Bento Style) */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
<div className="col-span-1 glass-card p-6 rounded-xl border border-outline-variant/10">
<span className="material-symbols-outlined text-primary mb-4" data-icon="schema">schema</span>
<h4 className="font-headline font-bold text-sm mb-2">Architectural Mapping</h4>
<p className="text-xs text-on-surface-variant leading-relaxed">Automatically map the impact of new features across your microservices or modules.</p>
</div>
<div className="col-span-1 glass-card p-6 rounded-xl border border-outline-variant/10">
<span className="material-symbols-outlined text-secondary mb-4" data-icon="monitoring">monitoring</span>
<h4 className="font-headline font-bold text-sm mb-2">Effort Estimation</h4>
<p className="text-xs text-on-surface-variant leading-relaxed">Get accurate story point and developer hour estimates based on historical commit density.</p>
</div>
<div className="col-span-1 glass-card p-6 rounded-xl border border-outline-variant/10">
<span className="material-symbols-outlined text-tertiary mb-4" data-icon="lightbulb">lightbulb</span>
<h4 className="font-headline font-bold text-sm mb-2">Smart Alternatives</h4>
<p className="text-xs text-on-surface-variant leading-relaxed">Identify refactoring opportunities that could simplify your feature implementation.</p>
</div>
</div>
</div>
</main>
{/* Footer Identity (Semantic Shell) */}
<footer className="ml-64 py-8 px-12 bg-surface-container-lowest border-t border-outline-variant/5">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3 grayscale opacity-40">
<span className="material-symbols-outlined" data-icon="token">token</span>
<span className="font-headline font-bold tracking-tighter">Wistletoe Analysis Engine</span>
</div>
<div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
<a className="hover:text-primary transition-colors" href="#">Documentation</a>
<a className="hover:text-primary transition-colors" href="#">API Reference</a>
<a className="hover:text-primary transition-colors" href="#">Security</a>
<a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</footer>

    </>
  );
}
