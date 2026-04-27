export default function SettingsBillingPage() {
  return (
    <>
      
{/* SideNavBar (from JSON logic) */}
<aside className="h-screen w-64 fixed left-0 top-0 bg-[#161c25] dark:bg-[#161c25] flex flex-col p-6 space-y-8 z-50">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary text-xl" >terminal</span>
</div>
<div>
<h1 className="font-['Space_Grotesk'] font-bold text-[#55d8e1] text-xl tracking-tighter">Wistletoe</h1>
<p className="font-['Space_Grotesk'] text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">Repo Analysis</p>
</div>
</div>
<nav className="flex-1 space-y-2">
<a className="flex items-center space-x-3 px-4 py-3 text-[#bbc9ca] hover:text-[#dde3ef] transition-colors hover:bg-[#242a33] rounded-md group font-['Space_Grotesk'] text-sm tracking-tight" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center space-x-3 px-4 py-3 text-[#bbc9ca] hover:text-[#dde3ef] transition-colors hover:bg-[#242a33] rounded-md group font-['Space_Grotesk'] text-sm tracking-tight" href="#">
<span className="material-symbols-outlined">database</span>
<span>Repositories</span>
</a>
<a className="flex items-center space-x-3 px-4 py-3 text-[#bbc9ca] hover:text-[#dde3ef] transition-colors hover:bg-[#242a33] rounded-md group font-['Space_Grotesk'] text-sm tracking-tight" href="#">
<span className="material-symbols-outlined">history</span>
<span>History</span>
</a>
<a className="flex items-center space-x-3 px-4 py-3 text-[#55d8e1] font-bold bg-[#242a33] rounded-md font-['Space_Grotesk'] text-sm tracking-tight" href="#">
<span className="material-symbols-outlined" >settings</span>
<span>Settings</span>
</a>
</nav>
<div className="pt-6 border-t border-outline-variant/20">
<div className="flex items-center space-x-3 p-2">
<img alt="Wistletoe Logo" className="w-10 h-10 rounded-lg object-cover grayscale opacity-80 hover:grayscale-0 transition-all" data-alt="close-up portrait of a tech professional man with glasses against a dark architectural background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaX_nMww5CTbzAkqKJIDX0RrqZyBUAu54hz12XqxaU5XyybRay1ukdgAokhB04hJGgRR65odPMF8lecccnuAu0usZAYilZLjEUIpLjYuttAle__QsTH2lkXanRzCRaW9i_xAjeoLN0FseY87L5s08UURP1ynzvjnb-IIDg7uH0U1X2eQ_JbgwH54UY-8mTEFggFI7vDn4L8dP4Q8A0PZN7Hp_fy6peHH0GfFJwS88nHIbHxpWsnMbxSoUK-VcRAtFaoMa_g9MOM0_9"/>
<div className="overflow-hidden">
<p className="text-xs font-bold truncate">Alex Rivera</p>
<p className="text-[10px] text-on-surface-variant truncate">PRO ARCHITECT</p>
</div>
</div>
</div>
</aside>
{/* TopNavBar (from JSON logic) */}
<header className="fixed top-0 right-0 left-64 h-16 z-40 bg-[#0e141c]/80 backdrop-blur-xl flex justify-between items-center px-8 w-full">
<div className="flex-1 max-w-md">
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg group-focus-within:text-primary transition-colors">search</span>
<input className="w-full bg-surface-container-low border-none rounded-md py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-[#55d8e1] transition-all placeholder:text-outline/50" placeholder="Search architecture, Repos, or Ledger..." type="text"/>
</div>
</div>
<div className="flex items-center space-x-6">
<button className="relative text-[#bbc9ca] hover:text-[#55d8e1] transition-opacity">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full"></span>
</button>
<button className="text-[#bbc9ca] hover:text-[#55d8e1] transition-opacity">
<span className="material-symbols-outlined">help</span>
</button>
<div className="h-8 w-px bg-outline-variant/20 mx-2"></div>
<img alt="User Profile" className="w-8 h-8 rounded-full border border-outline-variant/30" data-alt="professional male portrait avatar with neutral lighting and minimalist tech background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPauBZ2sTlGFGh20uvXTzhO0cCSj1NTKDNUC1QPSeAXT0DMumag5gAJgINb_Cz3hcZ4zIMYU3JjTvbbLekLjdj7Xg0EhJHDND5FMe8qEKXI3wg0X7dObJF9Gtfdh7CYqWlbiGewUcQQMNUQ2f8HDG4u3hfJE2LxfJXN3HbgLrE63D5YBEQMSNDo66pyAj1t6gVGyDwinlbZbQ21F8YVC8CcswOdcj0rEr8R1OXzTf_FxPuYcPizzhR71_A4uHgXYHOM_EoLacsesfr"/>
</div>
</header>
{/* Main Content */}
<main className="ml-64 mt-16 p-10 min-h-screen">
<header className="mb-12">
<h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface mb-2">Account Architecture</h2>
<p className="text-on-surface-variant font-light text-lg">Precision control over your repository intelligence workspace.</p>
</header>
{/* Section 1: User Profile & Valuation Core */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
{/* Profile Card */}
<div className="lg:col-span-7 bg-surface-container-high rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
<span className="material-symbols-outlined text-9xl">person</span>
</div>
<div className="relative">
<img className="w-32 h-32 rounded-xl object-cover grayscale" data-alt="close up headshot of a developer man looking forward with soft professional lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpbFiWK0-TIFsOm6oeA2vOrw1AOW-brsus1R90XTwJ5HD1hX0US6LcHIBIDPeFJuUXlLWw_xXwj46IzjnvRRuyvHc6QglYD0AAhisk2iyEWb_gI4FQ_eLAEZ5JKxMYZVgx6cEZFhsOEOgAywjIsgxEU70RgHNbN6x82FRC19twjshrgmZPmu6ukFWHAj_-25xrIX7rmBPxzS1C5Cwk2Yun0UYJIBudW_9DfbePPBAHMClICwuw3SFuGbpNY2f4hTq0R-gCDXKmWNRz"/>
<div className="absolute -bottom-2 -right-2 bg-primary p-2 rounded-lg text-on-primary">
<span className="material-symbols-outlined text-sm" >verified</span>
</div>
</div>
<div className="flex-1 space-y-4">
<div>
<h3 className="font-headline text-2xl font-bold">Alex Rivera</h3>
<p className="text-primary font-mono text-sm">@arivero_dev</p>
</div>
<div className="flex items-center space-x-2">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-container text-secondary">
<span className="material-symbols-outlined text-[10px] mr-1" >hub</span>
                            Connected to GitHub
                        </span>
</div>
<button className="mt-4 px-6 py-2 bg-surface-container-highest border border-outline-variant/30 rounded-lg text-sm font-medium hover:bg-surface-bright transition-all active:scale-95">
                        Refresh Data
                    </button>
</div>
</div>
{/* Valuation Core Card */}
<div className="lg:col-span-5 bg-surface-container-high rounded-xl p-8 shadow-2xl border-l-4 border-primary">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline text-xl font-bold uppercase tracking-widest text-primary/80">Valuation Core</h3>
<span className="material-symbols-outlined text-primary">analytics</span>
</div>
<div className="space-y-6">
<div>
<label className="block text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Global Analysis Rate (USD)</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-outline">$</span>
<input className="w-full bg-surface-container-lowest border-none border-b-2 border-outline focus:border-primary py-4 pl-8 pr-4 font-headline text-2xl text-on-surface transition-all outline-none" type="text" value="125"/>
</div>
</div>
<button className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold rounded-lg hover:shadow-[0_0_20px_rgba(85,216,225,0.3)] transition-all active:scale-[0.98]">
                        Save Changes
                    </button>
</div>
</div>
</div>
{/* Section 2: Subscription Plan */}
<div className="bg-surface-container-low rounded-xl p-10 mb-12 relative overflow-hidden border border-outline-variant/10">
<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<div className="flex items-center space-x-3 mb-4">
<h2 className="font-headline text-5xl font-black tracking-tighter text-on-surface">WISTLETOE PRO</h2>
<span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold px-2 py-1 rounded tracking-tighter">ANNUAL</span>
</div>
<p className="text-on-surface-variant max-w-sm">Elevated intelligence suite with unlimited deep-scanning and private repo integration.</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-6 bg-surface-container-high rounded-xl">
<p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Next Invoice</p>
<p className="font-headline text-lg font-bold">Oct 12, 2024</p>
</div>
<div className="p-6 bg-surface-container-high rounded-xl">
<p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Method</p>
<div className="flex items-center space-x-2">
<span className="material-symbols-outlined text-primary">credit_card</span>
<p className="font-headline text-lg font-bold">Visa · 8291</p>
</div>
</div>
</div>
</div>
</div>
{/* Section 3: Recent Ledger Entries */}
<div className="mb-12">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline text-xl font-bold">Recent Ledger Entries</h3>
<button className="text-primary text-xs font-bold uppercase tracking-widest flex items-center hover:underline">
                    Download Full Export <span className="material-symbols-outlined text-sm ml-1">download</span>
</button>
</div>
<div className="bg-surface-container-high rounded-xl overflow-hidden shadow-xl">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-highest/50">
<th className="px-8 py-5 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Transaction ID</th>
<th className="px-8 py-5 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Date</th>
<th className="px-8 py-5 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Description</th>
<th className="px-8 py-5 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Amount</th>
<th className="px-8 py-5 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">
<tr className="hover:bg-surface-container-highest/30 transition-colors">
<td className="px-8 py-4 font-mono text-xs text-primary">#TX-99201-B</td>
<td className="px-8 py-4 text-sm">Sep 12, 2024</td>
<td className="px-8 py-4 text-sm font-medium">Monthly Intelligence Seat (Pro)</td>
<td className="px-8 py-4 font-headline font-bold">$125.00</td>
<td className="px-8 py-4">
<span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-secondary-container/30 text-secondary border border-secondary/20">Paid</span>
</td>
</tr>
<tr className="hover:bg-surface-container-highest/30 transition-colors">
<td className="px-8 py-4 font-mono text-xs text-primary">#TX-99042-A</td>
<td className="px-8 py-4 text-sm">Aug 12, 2024</td>
<td className="px-8 py-4 text-sm font-medium">Monthly Intelligence Seat (Pro)</td>
<td className="px-8 py-4 font-headline font-bold">$125.00</td>
<td className="px-8 py-4">
<span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-secondary-container/30 text-secondary border border-secondary/20">Paid</span>
</td>
</tr>
<tr className="hover:bg-surface-container-highest/30 transition-colors">
<td className="px-8 py-4 font-mono text-xs text-primary">#TX-98781-C</td>
<td className="px-8 py-4 text-sm">Jul 12, 2024</td>
<td className="px-8 py-4 text-sm font-medium">Architecture Audit Fee</td>
<td className="px-8 py-4 font-headline font-bold">$450.00</td>
<td className="px-8 py-4">
<span className="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-secondary-container/30 text-secondary border border-secondary/20">Paid</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Section 4: Danger Zone */}
<div className="border-2 border-error-container/30 rounded-xl p-8 bg-surface-container-lowest/50">
<div className="flex items-center space-x-3 mb-6">
<span className="material-symbols-outlined text-error">warning</span>
<h3 className="font-headline text-xl font-bold text-error">Danger Zone</h3>
</div>
<div className="flex flex-col md:flex-row justify-between gap-6">
<div className="max-w-md">
<p className="text-sm font-bold mb-1">Destructive Operations</p>
<p className="text-xs text-on-surface-variant">These actions are irreversible. Clearing history will delete all training data models, and account deletion will purge all repository insights from our monolith.</p>
</div>
<div className="flex flex-wrap gap-4">
<button className="px-6 py-3 border border-outline-variant hover:bg-surface-container-high rounded-lg text-xs font-bold uppercase tracking-widest transition-all">
                        Clear Analysis History
                    </button>
<button className="px-6 py-3 bg-error-container text-on-error-container hover:bg-error rounded-lg text-xs font-bold uppercase tracking-widest transition-all active:scale-95">
                        Delete Account
                    </button>
</div>
</div>
</div>
{/* Footer Spacer */}
<div className="h-20"></div>
</main>

    </>
  );
}
