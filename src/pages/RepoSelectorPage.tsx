export default function RepoSelectorPage() {
  return (
    <>
      
{/* SideNavBar Component */}
<aside className="fixed left-0 top-0 h-full flex flex-col py-6 bg-[#161c25] w-72 shadow-[24px_0_48px_rgba(0,0,0,0.4)] z-50">
<div className="px-8 mb-10">
<h1 className="font-['Space_Grotesk'] font-bold text-[#dde3ef] text-2xl tracking-tight">Wistletoe</h1>
<p className="text-[0.75rem] text-[#bbc9ca] uppercase tracking-widest mt-1">Repo Analysis</p>
</div>
<nav className="flex-1 space-y-1">
{/* Dashboard */}
<a className="flex items-center text-[#bbc9ca] hover:bg-[#242a33]/50 mx-2 my-1 px-4 py-3 rounded-lg transition-all duration-200 hover:translate-x-1" href="#">
<span className="material-symbols-outlined mr-3">grid_view</span>
<span className="font-['Inter'] font-medium text-[0.875rem]">Dashboard</span>
</a>
{/* Active: Repositories */}
<a className="flex items-center bg-[#242a33] text-[#55d8e1] rounded-lg mx-2 my-1 px-4 py-3 transition-all duration-200" href="#">
<span className="material-symbols-outlined mr-3">database</span>
<span className="font-['Inter'] font-medium text-[0.875rem]">Repositories</span>
</a>
{/* History */}
<a className="flex items-center text-[#bbc9ca] hover:bg-[#242a33]/50 mx-2 my-1 px-4 py-3 rounded-lg transition-all duration-200 hover:translate-x-1" href="#">
<span className="material-symbols-outlined mr-3">history</span>
<span className="font-['Inter'] font-medium text-[0.875rem]">History</span>
</a>
{/* Settings */}
<a className="flex items-center text-[#bbc9ca] hover:bg-[#242a33]/50 mx-2 my-1 px-4 py-3 rounded-lg transition-all duration-200 hover:translate-x-1" href="#">
<span className="material-symbols-outlined mr-3">settings</span>
<span className="font-['Inter'] font-medium text-[0.875rem]">Settings</span>
</a>
</nav>
<div className="mt-auto pt-6 border-t border-outline-variant/10">
<a className="flex items-center text-[#bbc9ca] hover:bg-[#242a33]/50 mx-2 my-1 px-4 py-3 rounded-lg transition-all duration-200" href="#">
<span className="material-symbols-outlined mr-3">menu_book</span>
<span className="font-['Inter'] font-medium text-[0.875rem]">Documentation</span>
</a>
<a className="flex items-center text-[#bbc9ca] hover:bg-[#242a33]/50 mx-2 my-1 px-4 py-3 rounded-lg transition-all duration-200" href="#">
<span className="material-symbols-outlined mr-3">logout</span>
<span className="font-['Inter'] font-medium text-[0.875rem]">Log Out</span>
</a>
</div>
</aside>
{/* Main Content Canvas */}
<main className="ml-72 flex-1 flex flex-col min-h-screen relative pb-24">
{/* TopAppBar Component */}
<header className="flex justify-between items-center w-full px-12 py-6 sticky top-0 z-40 bg-[#0e141c]">
<div className="flex flex-col">
<h2 className="font-['Space_Grotesk'] text-3xl font-bold text-[#00ADB5] tracking-[-0.02em]">Select Repositories</h2>
<p className="text-on-surface-variant text-sm mt-1">Choose the projects you want to analyze with Wistletoe.</p>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-[#bbc9ca] hover:text-[#55d8e1] transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-[#bbc9ca] hover:text-[#55d8e1] transition-colors">
<span className="material-symbols-outlined">help_outline</span>
</button>
<div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant/20">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="Close up portrait of a male software engineer with glasses in a professional studio setting with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJRUVSnq4NQH51k9bZ0Vtxil6JC0NJU8CfVso4WpnyBeR2ejrpwBZkCnzuCWejq7QFP_drblLOpKbEFMY_TU1TQvIT03MLeLcKkrsWaik2visuNSgvKYAQQdREOB3k68mlofA7KmH9cDN8no-yYq_kuiMzoeDfIiGs7f2nXjhXU_q9Fd_TWuqM06YZNtA3Ls_o08oIOunB0rZNzrNIE8e3JRbCeVcFZtQFGxKIB5XGiIWzNnrHbGTFIuKYSbUpiPtPLt9anuBaF9KT"/>
</div>
</div>
</header>
{/* Search & Filter Bar */}
<section className="px-12 py-4">
<div className="bg-surface-container-high rounded-xl p-6 flex flex-wrap gap-4 items-center">
{/* Search */}
<div className="flex-1 min-w-[300px] relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full bg-surface-container-lowest border-none border-b-2 border-outline focus:border-primary focus:ring-0 text-on-surface pl-12 pr-4 py-3 rounded-t-lg transition-all placeholder:text-outline-variant/60" placeholder="Search repository name..." type="text"/>
</div>
{/* Filters */}
<div className="flex gap-3">
<div className="relative">
<select className="appearance-none bg-surface-container-lowest border border-outline-variant/20 rounded-lg px-4 py-3 pr-10 text-sm text-on-surface-variant focus:ring-1 focus:ring-primary focus:border-primary outline-none">
<option>All Languages</option>
<option>TypeScript</option>
<option>JavaScript</option>
<option>Python</option>
<option>Rust</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs">expand_more</span>
</div>
<div className="relative">
<select className="appearance-none bg-surface-container-lowest border border-outline-variant/20 rounded-lg px-4 py-3 pr-10 text-sm text-on-surface-variant focus:ring-1 focus:ring-primary focus:border-primary outline-none">
<option>Type: All</option>
<option>Public</option>
<option>Private</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs">expand_more</span>
</div>
</div>
</div>
</section>
{/* Repository List (Asymmetric Bento-ish List) */}
<section className="px-12 py-6 flex-1">
<div className="space-y-4">
{/* List Header */}
<div className="flex items-center px-6 py-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-60">
<div className="w-10">
<input className="rounded bg-surface-container-lowest border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
</div>
<div className="flex-1">Repository Details</div>
<div className="w-32 text-center">Language</div>
<div className="w-40 text-right">Metrics</div>
</div>
{/* Repo Items */}
<div className="group flex items-center bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 p-6 rounded-xl relative overflow-hidden border-l-4 border-transparent hover:border-primary/40">
<div className="w-10 flex items-center">
<input className="rounded bg-surface-container-lowest border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
</div>
<div className="flex-1 flex flex-col">
<div className="flex items-center gap-2">
<h3 className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors">mistletoe-core-engine</h3>
<span className="px-2 py-0.5 text-[10px] font-bold bg-secondary-container/30 text-secondary border border-secondary/20 rounded-sm">PUBLIC</span>
</div>
<p className="text-on-surface-variant text-sm mt-1 max-w-xl line-clamp-1">Main analysis engine for repository metadata and structural integrity scanning.</p>
</div>
<div className="w-32 flex justify-center">
<span className="flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-full text-xs font-medium border border-outline-variant/10">
<span className="w-2 h-2 rounded-full bg-blue-400"></span> TypeScript
                    </span>
</div>
<div className="w-40 flex justify-end gap-6 text-on-surface-variant">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">star</span>
<span className="text-sm font-mono">1.2k</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">account_tree</span>
<span className="text-sm font-mono">342</span>
</div>
</div>
</div>
<div className="group flex items-center bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 p-6 rounded-xl relative overflow-hidden border-l-4 border-transparent hover:border-primary/40">
<div className="w-10 flex items-center">
<input defaultChecked={true} className="rounded bg-surface-container-lowest border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
</div>
<div className="flex-1 flex flex-col">
<div className="flex items-center gap-2">
<h3 className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors">web-interface-v3</h3>
<span className="px-2 py-0.5 text-[10px] font-bold bg-tertiary-container/30 text-tertiary border border-tertiary/20 rounded-sm">PRIVATE</span>
</div>
<p className="text-on-surface-variant text-sm mt-1 max-w-xl line-clamp-1">Responsive dashboard built with React and Tailwind CSS for Wistletoe users.</p>
</div>
<div className="w-32 flex justify-center">
<span className="flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-full text-xs font-medium border border-outline-variant/10">
<span className="w-2 h-2 rounded-full bg-yellow-400"></span> JavaScript
                    </span>
</div>
<div className="w-40 flex justify-end gap-6 text-on-surface-variant">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">star</span>
<span className="text-sm font-mono">85</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">account_tree</span>
<span className="text-sm font-mono">12</span>
</div>
</div>
</div>
<div className="group flex items-center bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 p-6 rounded-xl relative overflow-hidden border-l-4 border-transparent hover:border-primary/40">
<div className="w-10 flex items-center">
<input className="rounded bg-surface-container-lowest border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
</div>
<div className="flex-1 flex flex-col">
<div className="flex items-center gap-2">
<h3 className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors">data-science-toolkit</h3>
<span className="px-2 py-0.5 text-[10px] font-bold bg-secondary-container/30 text-secondary border border-secondary/20 rounded-sm">PUBLIC</span>
</div>
<p className="text-on-surface-variant text-sm mt-1 max-w-xl line-clamp-1">Collection of utility scripts for data processing and model evaluation.</p>
</div>
<div className="w-32 flex justify-center">
<span className="flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-full text-xs font-medium border border-outline-variant/10">
<span className="w-2 h-2 rounded-full bg-blue-600"></span> Python
                    </span>
</div>
<div className="w-40 flex justify-end gap-6 text-on-surface-variant">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">star</span>
<span className="text-sm font-mono">4.1k</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">account_tree</span>
<span className="text-sm font-mono">1.1k</span>
</div>
</div>
</div>
<div className="group flex items-center bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 p-6 rounded-xl relative overflow-hidden border-l-4 border-transparent hover:border-primary/40">
<div className="w-10 flex items-center">
<input defaultChecked={true} className="rounded bg-surface-container-lowest border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
</div>
<div className="flex-1 flex flex-col">
<div className="flex items-center gap-2">
<h3 className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors">infrastructure-as-code</h3>
<span className="px-2 py-0.5 text-[10px] font-bold bg-secondary-container/30 text-secondary border border-secondary/20 rounded-sm">PUBLIC</span>
</div>
<p className="text-on-surface-variant text-sm mt-1 max-w-xl line-clamp-1">Terraform and Ansible scripts for automated cloud deployment.</p>
</div>
<div className="w-32 flex justify-center">
<span className="flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-full text-xs font-medium border border-outline-variant/10">
<span className="w-2 h-2 rounded-full bg-purple-500"></span> HCL
                    </span>
</div>
<div className="w-40 flex justify-end gap-6 text-on-surface-variant">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">star</span>
<span className="text-sm font-mono">210</span>
</div>
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">account_tree</span>
<span className="text-sm font-mono">45</span>
</div>
</div>
</div>
</div>
</section>
{/* Bottom Action Bar */}
<footer className="fixed bottom-0 right-0 w-[calc(100%-18rem)] bg-surface-container-low/90 backdrop-blur-xl border-t border-outline-variant/20 px-12 py-4 z-40">
<div className="flex justify-between items-center max-w-6xl mx-auto">
<div className="flex items-center gap-4">
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary border border-primary/20">
<span className="font-headline font-bold">2</span>
</div>
<p className="text-on-surface font-medium">Repositori dipilih</p>
</div>
<div className="flex gap-4">
<button className="px-6 py-3 text-on-surface-variant font-medium hover:text-on-surface transition-colors">
                    Cancel
                </button>
<button className="px-8 py-3 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-lg shadow-lg shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all" >
                    Add Repositories
                </button>
</div>
</div>
</footer>
</main>
{/* Decorative Background Elements */}
<div className="fixed top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="fixed bottom-0 left-72 -z-10 w-[300px] h-[300px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none"></div>

    </>
  );
}
