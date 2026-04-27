export default function AnalysisDetailPage() {
  return (
    <>
      
{/* Sidebar Navigation */}
<aside className="h-screen w-64 fixed left-0 top-0 flex flex-col bg-[#161c25] shadow-2xl shadow-black/40 z-50">
<div className="flex flex-col h-full py-6 space-y-4">
{/* Header/Logo Area */}
<div className="px-6 mb-8">
<div className="flex items-center gap-3 cursor-pointer" >
<div className="w-10 h-10 bg-primary-container rounded flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary text-2xl" data-icon="terminal">terminal</span>
</div>
<div>
<h1 className="font-['Space_Grotesk'] font-bold text-[#55d8e1] text-lg leading-tight uppercase">Wistletoe</h1>
<p className="text-[10px] text-on-surface-variant tracking-widest uppercase">v2.4.0-stable</p>
</div>
</div>
</div>
{/* Navigation Links */}
<nav className="flex-1 space-y-1 px-3">
<div className="flex items-center gap-3 px-3 py-2 text-[#bbc9ca] hover:bg-[#242a33]/30 hover:text-[#dde3ef] transition-all duration-150 ease-in-out cursor-pointer group" >
<span className="material-symbols-outlined text-xl" data-icon="dashboard">dashboard</span>
<span className="font-['Inter'] text-[13px]">Dashboard</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-[#bbc9ca] hover:bg-[#242a33]/30 hover:text-[#dde3ef] transition-all duration-150 ease-in-out cursor-pointer group" >
<span className="material-symbols-outlined text-xl" data-icon="folder">folder</span>
<span className="font-['Inter'] text-[13px]">Repositories</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-[#bbc9ca] hover:bg-[#242a33]/30 hover:text-[#dde3ef] transition-all duration-150 ease-in-out cursor-pointer group" >
<span className="material-symbols-outlined text-xl" data-icon="history">history</span>
<span className="font-['Inter'] text-[13px]">History</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-[#bbc9ca] hover:bg-[#242a33]/30 hover:text-[#dde3ef] transition-all duration-150 ease-in-out cursor-pointer group" >
<span className="material-symbols-outlined text-xl" data-icon="settings">settings</span>
<span className="font-['Inter'] text-[13px]">Settings</span>
</div>
</nav>
{/* CTA */}
<div className="px-6 mt-auto">
<button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold py-2.5 rounded-md text-[13px] active:scale-95 transition-transform">
                    New Analysis
                </button>
</div>
{/* Footer Links */}
<div className="px-3 pt-4 border-t border-outline-variant/10">
<div className="flex items-center gap-3 px-3 py-2 text-[#bbc9ca] hover:text-[#dde3ef] transition-all text-[12px] cursor-pointer" >
<span className="material-symbols-outlined text-lg" data-icon="description">description</span>
<span>Documentation</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-[#bbc9ca] hover:text-[#dde3ef] transition-all text-[12px] cursor-pointer" >
<span className="material-symbols-outlined text-lg" data-icon="help">help</span>
<span>Support</span>
</div>
</div>
</div>
</aside>
{/* Main Content Area */}
<main className="ml-64 min-h-screen bg-background p-8 md:p-12">
{/* Header */}
<header className="mb-12">
<div className="flex items-center gap-2 text-on-surface-variant text-sm mb-2 font-medium">
<span className="cursor-pointer hover:text-primary transition-colors" >Repositories</span>
<span className="material-symbols-outlined text-xs" data-icon="chevron_right">chevron_right</span>
<span className="cursor-pointer hover:text-primary transition-colors" >Wistletoe</span>
<span className="material-symbols-outlined text-xs" data-icon="chevron_right">chevron_right</span>
<span className="text-primary">Feature Analysis</span>
</div>
<div className="flex justify-between items-end">
<div>
<h2 className="text-4xl font-headline font-bold text-on-surface tracking-tight">Feature Analysis: Wistletoe Refactor</h2>
<p className="text-on-surface-variant mt-2 max-w-2xl text-lg">Detailed deep-dive into high-latency modules and architectural debt identified in the v2.4.0-stable release cycle.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 bg-surface-container-high text-on-surface rounded-lg flex items-center gap-2 hover:bg-surface-bright transition-colors text-sm">
<span className="material-symbols-outlined text-lg" data-icon="share">share</span>
                        Share Report
                    </button>
<button className="px-4 py-2 bg-surface-container-high text-on-surface rounded-lg flex items-center gap-2 hover:bg-surface-bright transition-colors text-sm">
<span className="material-symbols-outlined text-lg" data-icon="download">download</span>
                        Export PDF
                    </button>
</div>
</div>
</header>
{/* Summary Cards Grid */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
{/* Risk Level Card */}
<div className="bg-surface-container-low p-6 rounded-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl text-error" data-icon="warning" >warning</span>
</div>
<p className="text-on-surface-variant text-xs font-semibold tracking-wider uppercase mb-4">Risk Level</p>
<div className="flex items-baseline gap-2">
<h3 className="text-3xl font-headline font-bold text-error">High</h3>
<span className="text-xs text-on-surface-variant">Critical Path Impact</span>
</div>
<div className="mt-4 w-full bg-surface-container-lowest h-1.5 rounded-full">
<div className="bg-error h-full w-[85%] rounded-full shadow-[0_0_8px_rgba(255,180,171,0.5)]"></div>
</div>
</div>
{/* Effort Card */}
<div className="bg-surface-container-low p-6 rounded-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl text-primary" data-icon="timer" >timer</span>
</div>
<p className="text-on-surface-variant text-xs font-semibold tracking-wider uppercase mb-4">Estimated Effort</p>
<div className="flex items-baseline gap-2">
<h3 className="text-3xl font-headline font-bold text-primary">40-60 hrs</h3>
<span className="text-xs text-on-surface-variant">Dev cycles</span>
</div>
<div className="mt-4 w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden flex">
<div className="bg-primary h-full w-[60%] border-r border-background"></div>
<div className="bg-primary/40 h-full w-[20%]"></div>
</div>
</div>
{/* Cost Card */}
<div className="bg-surface-container-low p-6 rounded-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl text-tertiary" data-icon="payments" >payments</span>
</div>
<p className="text-on-surface-variant text-xs font-semibold tracking-wider uppercase mb-4">Projected Cost</p>
<div className="flex items-baseline gap-2">
<h3 className="text-3xl font-headline font-bold text-on-surface">$2,500</h3>
<span className="text-xs text-on-surface-variant">USD / Analysis</span>
</div>
<div className="mt-4 text-xs flex items-center gap-1 text-tertiary">
<span className="material-symbols-outlined text-[14px]" data-icon="info">info</span>
                    Includes infrastructure overhead
                </div>
</div>
</section>
{/* Visualization Section (Asymmetric) */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
{/* Impact Visualization (Radar/Hex) */}
<div className="lg:col-span-8 bg-surface-container-low p-8 rounded-xl min-h-[400px] flex flex-col">
<div className="flex justify-between items-start mb-10">
<div>
<h4 className="text-xl font-headline font-bold text-on-surface">Impact Visualization</h4>
<p className="text-sm text-on-surface-variant">Multi-dimensional analysis of feature refraction</p>
</div>
<div className="flex gap-4">
<div className="flex items-center gap-2 text-xs">
<span className="w-2 h-2 rounded-full bg-primary"></span> Current
                        </div>
<div className="flex items-center gap-2 text-xs">
<span className="w-2 h-2 rounded-full bg-secondary opacity-40"></span> Target
                        </div>
</div>
</div>
{/* Mock Radar Chart Layout */}
<div className="flex-1 flex items-center justify-center relative">
{/* Geometric Radar Pattern */}
<div className="w-64 h-64 border-2 border-outline-variant/10 rounded-full flex items-center justify-center">
<div className="w-48 h-48 border-2 border-outline-variant/10 rounded-full flex items-center justify-center">
<div className="w-32 h-32 border-2 border-outline-variant/10 rounded-full"></div>
</div>
{/* Hexagon Paths */}
<svg className="absolute inset-0 w-full h-full opacity-80" viewBox="0 0 100 100">
{/* Background Grid */}
<path className="text-outline-variant" d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" fill="none" stroke="currentColor" strokeWidth="0.2"></path>
<path className="text-outline-variant" d="M50 20 L75 35 L75 65 L50 80 L25 65 L25 35 Z" fill="none" stroke="currentColor" strokeWidth="0.2"></path>
{/* Data Path Primary */}
<path className="text-primary" d="M50 15 L85 30 L70 70 L50 85 L20 60 L30 25 Z" fill="rgba(85, 216, 225, 0.2)" stroke="currentColor" strokeWidth="1.5"></path>
<circle className="text-primary" cx="50" cy="15" fill="currentColor" r="1.5"></circle>
<circle className="text-primary" cx="85" cy="30" fill="currentColor" r="1.5"></circle>
<circle className="text-primary" cx="70" cy="70" fill="currentColor" r="1.5"></circle>
<circle className="text-primary" cx="50" cy="85" fill="currentColor" r="1.5"></circle>
<circle className="text-primary" cx="20" cy="60" fill="currentColor" r="1.5"></circle>
<circle className="text-primary" cx="30" cy="25" fill="currentColor" r="1.5"></circle>
</svg>
</div>
{/* Labels */}
<div className="absolute top-0 font-headline font-bold text-[10px] tracking-widest text-on-surface-variant">PERFORMANCE</div>
<div className="absolute bottom-0 font-headline font-bold text-[10px] tracking-widest text-on-surface-variant">SECURITY</div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 font-headline font-bold text-[10px] tracking-widest text-on-surface-variant rotate-90">MAINTAINABILITY</div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 font-headline font-bold text-[10px] tracking-widest text-on-surface-variant -rotate-90">TECH DEBT</div>
</div>
</div>
{/* Bar Chart Side (Effort & Cost) */}
<div className="lg:col-span-4 bg-surface-container-low p-8 rounded-xl flex flex-col">
<h4 className="text-xl font-headline font-bold text-on-surface mb-2">Metrics Correlation</h4>
<p className="text-sm text-on-surface-variant mb-8">Resource burn vs. technical gain</p>
<div className="flex-1 space-y-8">
{/* Performance vs Cost Bar */}
<div className="space-y-3">
<div className="flex justify-between text-xs font-medium">
<span className="text-on-surface">Cloud Efficiency</span>
<span className="text-primary">+34%</span>
</div>
<div className="h-6 bg-surface-container-lowest rounded overflow-hidden p-1 flex">
<div className="h-full bg-primary rounded-sm" ></div>
</div>
</div>
{/* Scalability vs Cost Bar */}
<div className="space-y-3">
<div className="flex justify-between text-xs font-medium">
<span className="text-on-surface">Data Throughput</span>
<span className="text-tertiary-fixed-dim">Optimized</span>
</div>
<div className="h-6 bg-surface-container-lowest rounded overflow-hidden p-1 flex">
<div className="h-full bg-tertiary rounded-sm" ></div>
</div>
</div>
{/* Security Posture */}
<div className="space-y-3">
<div className="flex justify-between text-xs font-medium">
<span className="text-on-surface">Vulnerability Mitigation</span>
<span className="text-on-surface-variant">Low Effort</span>
</div>
<div className="h-6 bg-surface-container-lowest rounded overflow-hidden p-1 flex">
<div className="h-full bg-secondary rounded-sm" ></div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-outline-variant/15">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary" data-icon="trending_up">trending_up</span>
</div>
<div>
<div className="text-xs text-on-surface-variant">ROI Factor</div>
<div className="text-lg font-headline font-bold text-on-surface">2.4x Multiplier</div>
</div>
</div>
</div>
</div>
</section>
{/* Alternative Approaches Section */}
<section className="mb-12">
<div className="flex items-center gap-3 mb-8">
<div className="h-[1px] flex-1 bg-outline-variant/20"></div>
<h4 className="text-xl font-headline font-bold text-on-surface tracking-tighter px-4">ALTERNATIVE APPROACHES</h4>
<div className="h-[1px] flex-1 bg-outline-variant/20"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* MVP */}
<div className="bg-surface-container-low border border-outline-variant/10 p-8 rounded-xl hover:bg-surface-container-high transition-all group">
<div className="mb-6 flex justify-between items-start">
<div className="px-2 py-1 bg-surface-container-lowest rounded text-[10px] font-bold text-on-surface-variant tracking-widest uppercase">Approach Alpha</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors" data-icon="bolt">bolt</span>
</div>
<h5 className="text-2xl font-headline font-bold mb-4">Minimum Viable</h5>
<p className="text-sm text-on-surface-variant leading-relaxed mb-8">Focuses exclusively on the critical refactor of the message broker. Quick implementation with limited scope.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-xs">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                            Fastest time-to-production
                        </li>
<li className="flex items-center gap-3 text-xs">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                            Low immediate cost
                        </li>
</ul>
<div className="mt-auto">
<div className="text-[10px] uppercase font-bold text-on-surface-variant mb-1">Impact</div>
<div className="text-lg font-headline font-bold text-on-surface">30% Debt Reduction</div>
</div>
</div>
{/* Balanced */}
<div className="bg-surface-container-high border-2 border-primary/20 p-8 rounded-xl relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
<div className="mb-6 flex justify-between items-start">
<div className="px-2 py-1 bg-primary/10 rounded text-[10px] font-bold text-primary tracking-widest uppercase">Recommended</div>
<span className="material-symbols-outlined text-primary" data-icon="balance" >balance</span>
</div>
<h5 className="text-2xl font-headline font-bold mb-4">Balanced Strategy</h5>
<p className="text-sm text-on-surface-variant leading-relaxed mb-8">Holistic refactor of broker and API layers. Optimizes for long-term maintenance and current scale.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-xs">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                            Scalable for next 12 months
                        </li>
<li className="flex items-center gap-3 text-xs">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                            Security baseline upgrade
                        </li>
<li className="flex items-center gap-3 text-xs">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                            Modular component logic
                        </li>
</ul>
<div className="mt-auto">
<div className="text-[10px] uppercase font-bold text-on-surface-variant mb-1">Impact</div>
<div className="text-lg font-headline font-bold text-primary">65% Debt Reduction</div>
</div>
</div>
{/* Comprehensive */}
<div className="bg-surface-container-low border border-outline-variant/10 p-8 rounded-xl hover:bg-surface-container-high transition-all group">
<div className="mb-6 flex justify-between items-start">
<div className="px-2 py-1 bg-surface-container-lowest rounded text-[10px] font-bold text-on-surface-variant tracking-widest uppercase">Approach Omega</div>
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-tertiary transition-colors" data-icon="architecture">architecture</span>
</div>
<h5 className="text-2xl font-headline font-bold mb-4">Comprehensive</h5>
<p className="text-sm text-on-surface-variant leading-relaxed mb-8">Complete architectural re-alignment to event-driven microservices. Deepest impact on future-proofing.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-xs">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                            Near-zero technical debt
                        </li>
<li className="flex items-center gap-3 text-xs">
<span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                            Enterprise-grade security
                        </li>
</ul>
<div className="mt-auto">
<div className="text-[10px] uppercase font-bold text-on-surface-variant mb-1">Impact</div>
<div className="text-lg font-headline font-bold text-on-surface">95% Debt Reduction</div>
</div>
</div>
</div>
</section>
{/* Final Summary/Action Footer */}
<footer className="bg-surface-container-lowest p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-6">
<div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
<img alt="Analyst Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyl0Y7pO9uUYLYIpS_bMl1nMtG-NU5ellT_fyvyp42dObABc_RxDRdxGqrlLKzHyCZu4v_8MUcqlgMOjZKZWIedPsCrzHSAZx0n6mS6_hW1udwguZEmZO2YRgzeAqGXaDrCKmEZhBhiZmtthAk18aTbPh0y6NWJMyCFWHnZJk5zW0t1cva8XEhQ-kMr6VJels_nCtGR4fsgoCwFdltvY8Qr9L-ZEk_yYZjB4edjG0VhLMqfgS8bBYxjhu6A1HMNrhVTjioqlUrhQ-F"/>
</div>
<div>
<h6 className="font-headline font-bold text-on-surface">Automated Analyst Summary</h6>
<p className="text-sm text-on-surface-variant max-w-lg">"Based on our 2.4-stable analysis, the Refactor of the Core Message Module represents the highest risk but also the highest return on performance stability."</p>
</div>
</div>
<div className="flex gap-4">
<button className="px-8 py-3 bg-primary text-on-primary font-bold rounded-lg shadow-lg shadow-primary/10 active:scale-95 transition-all" >
                    Initiate Refactor
                </button>
</div>
</footer>
</main>

    </>
  );
}
