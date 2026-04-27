export default function FeatureAnalysisPage() {
  return (
    <>
      
{/* SideNavBar (Shared Component) */}
<aside className="flex flex-col h-full py-8 px-4 h-screen w-64 fixed left-0 top-0 overflow-y-auto bg-[#161c25] dark:bg-[#161c25] font-['Space_Grotesk'] text-sm tracking-tight z-50">
<div className="mb-10 px-2 flex items-center gap-3">
<div className="w-8 h-8 bg-primary-container rounded flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary" data-icon="terminal">terminal</span>
</div>
<span className="font-['Space_Grotesk'] font-bold text-xl tracking-tighter text-[#dde3ef]">Wistletoe</span><p className="text-[10px] text-on-surface-variant font-medium tracking-widest uppercase mt-1">Analysis Engine</p>
</div>
<nav className="flex-1 space-y-2">{/* Dashboard */}
<a className="text-[#bbc9ca] hover:bg-[#242a33] hover:text-[#dde3ef] rounded-md flex items-center gap-3 px-3 py-2.5 font-medium text-sm transition-all ease-in-out duration-300" href="{{DATA:SCREEN:SCREEN_40}}">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
{/* Repositories Active */}
<a className="bg-[#242a33] text-[#55d8e1] rounded-md flex items-center gap-3 px-3 py-2.5 font-medium text-sm transition-all ease-in-out duration-300" href="#">
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
</a></nav>
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
{/* TopAppBar (Shared Component) */}
<header className="flex justify-between items-center w-full px-8 ml-64 max-w-[calc(100%-16rem)] h-16 sticky top-0 z-40 bg-[#0e141c]/80 backdrop-blur-xl font-['Space_Grotesk'] font-medium">
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#00adb5]" data-icon="terminal">terminal</span>
<span className="font-black text-[#00adb5] tracking-tight">Monolith AI</span>
</div>
<div className="hidden md:flex items-center bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant/10 min-w-[300px]">
<span className="material-symbols-outlined text-on-surface-variant text-sm mr-2" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm text-on-surface w-full" placeholder="Search repositories..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 hover:text-[#55d8e1] transition-all cursor-pointer active:opacity-80">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 hover:text-[#55d8e1] transition-all cursor-pointer active:opacity-80">
<span className="material-symbols-outlined" data-icon="terminal">terminal</span>
</button>
<div className="w-8 h-8 rounded bg-surface-container-high border border-outline-variant overflow-hidden">
<img alt="Developer avatar" className="w-full h-full object-cover" data-alt="Digital avatar of a developer in high-tech setting with neon cyan backlighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzCXWqmCsHVBS0O_OmnUUU5nQGqzSyIR2SudQL5vFESUWxXl0vKZyUMQ5W3BpSAIN3KzljCNsDudDUmHN1Bgqhih2rGs6FJSaeLc6t1Wllw5rw_jcXkNfOLWtzPGI2Xh6748WgYmRW4XvCLbOxYT_24RbSZxd_uWEofeJ79XgAped5GdQcvqEjiGcP35jUSv7iIpNFXJWbuj5hau0gBYuqj-tngNswWjOWda6HoGv2wqYXyPyMUMoeY9oi0rDO39kw7JS_sSbbVOyp"/>
</div>
</div>
</header>
{/* Main Canvas */}
<main className="ml-64 p-8 min-h-[calc(100vh-4rem)] bg-surface flex flex-col items-center justify-center relative overflow-hidden">
{/* Subtle Architectural Background Accents */}
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tertiary/5 rounded-full blur-[100px] -z-10"></div>
{/* Content Container */}
<div className="w-full max-w-[800px] space-y-12">
{/* Header Section */}
<div className="text-center space-y-3">
<h1 className="text-4xl font-headline font-black tracking-tighter text-on-surface">
                    New Feature Analysis
                </h1>
<p className="text-on-surface-variant font-body max-w-md mx-auto">
                    Describe the feature you want to build to see architectural impact and effort.
                </p>
</div>
{/* Input State Card */}
<div className="glass-card border border-outline-variant/10 rounded-xl overflow-hidden shadow-2xl relative group">
<div className="p-8 space-y-8">
{/* Repository Selector */}
<div className="space-y-3">
<label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Target Repository</label>
<div className="flex items-center justify-between bg-surface-container-lowest border border-outline-variant/20 px-4 py-3 rounded-lg group-focus-within:border-primary/50 transition-colors">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="folder_zip">folder_zip</span>
<span className="font-headline font-medium text-on-surface">numpyh/wistletoe</span>
<div className="flex gap-2">
<span className="text-[10px] px-2 py-0.5 rounded bg-surface-container-highest text-on-surface-variant border border-outline-variant/20">Private</span>
<span className="text-[10px] px-2 py-0.5 rounded bg-secondary-container/30 text-secondary border border-secondary/20">TypeScript</span>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant" data-icon="unfold_more">unfold_more</span>
</div>
</div>
{/* Textarea Feature Description */}
<div className="space-y-3">
<div className="flex justify-between items-end">
<label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Feature Description</label>
<span className="text-[10px] text-outline">0/2000 chars</span>
</div>
<div className="relative">
<textarea className="w-full min-h-[200px] bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-5 text-on-surface placeholder:text-on-surface-variant/30 focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none font-body" placeholder="e.g., Integrate a third-party payment gateway (Stripe) to allow users to subscribe to premium plans. This involves creating new database schemas for subscriptions, webhooks for payment verification, and updating the UI dashboard to show billing status."></textarea>
{/* Suggestion Chips */}
<div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
<button className="px-3 py-1.5 bg-surface-bright/50 hover:bg-surface-bright rounded-full text-xs font-medium text-primary border border-primary/20 flex items-center gap-1.5 transition-all">
<span className="material-symbols-outlined text-sm" data-icon="auto_awesome">auto_awesome</span>
                                    Add OAuth Login
                                </button>
<button className="px-3 py-1.5 bg-surface-bright/50 hover:bg-surface-bright rounded-full text-xs font-medium text-primary border border-primary/20 flex items-center gap-1.5 transition-all">
<span className="material-symbols-outlined text-sm" data-icon="auto_awesome">auto_awesome</span>
                                    Setup Stripe Payments
                                </button>
<button className="px-3 py-1.5 bg-surface-bright/50 hover:bg-surface-bright rounded-full text-xs font-medium text-primary border border-primary/20 flex items-center gap-1.5 transition-all">
<span className="material-symbols-outlined text-sm" data-icon="auto_awesome">auto_awesome</span>
                                    Migrate to GraphQL
                                </button>
</div>
</div>
</div>
</div>
{/* Footer Section */}
<div className="bg-surface-container-low/50 px-8 py-5 flex items-center justify-between border-t border-outline-variant/10">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-sm text-tertiary" data-icon="bolt">bolt</span>
<span className="text-xs font-medium">Analysis costs 1 credit</span>
</div>
<button className="relative overflow-hidden group/btn px-6 py-2.5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold rounded-lg transition-all hover:shadow-[0_0_20px_rgba(85,216,225,0.4)] active:scale-95 flex items-center gap-2" >
<span>Analyze Feature Impact</span>
<span className="material-symbols-outlined text-sm" data-icon="auto_awesome">auto_awesome</span>
<div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
</button>
</div>
</div>
{/* Loading State Overlay (Simulated for visualization) */}
<div className="hidden flex flex-col items-center justify-center space-y-12 py-20 animate-in fade-in zoom-in duration-500">
<div className="relative">
<div className="w-32 h-32 rounded-full border-2 border-primary/20 flex items-center justify-center">
<div className="pulse-orb w-16 h-16 bg-primary rounded-full animate-pulse flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary text-3xl" data-icon="radar">radar</span>
</div>
</div>
{/* Orbiting dots */}
<div className="absolute inset-0 border border-primary/10 rounded-full animate-[spin_4s_linear_infinite]">
<div className="absolute -top-1 left-1/2 w-2 h-2 bg-primary rounded-full"></div>
</div>
</div>
<div className="text-center space-y-8 w-full max-sm:px-4">
<h3 className="text-xl font-headline font-bold text-on-surface">Analyzing Repository Architecture...</h3>
<div className="space-y-4">
<div className="flex items-center gap-4 text-sm">
<div className="w-5 h-5 flex items-center justify-center">
<div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
</div>
<span className="text-on-surface font-medium">Parsing external dependencies...</span>
</div>
<div className="flex items-center gap-4 text-sm opacity-40">
<div className="w-5 h-5 flex items-center justify-center">
<div className="w-2 h-2 bg-outline rounded-full"></div>
</div>
<span className="text-on-surface-variant">Calculating effort estimators...</span>
</div>
<div className="flex items-center gap-4 text-sm opacity-40">
<div className="w-5 h-5 flex items-center justify-center">
<div className="w-2 h-2 bg-outline rounded-full"></div>
</div>
<span className="text-on-surface-variant">Generating alternative approaches...</span>
</div>
</div>
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
