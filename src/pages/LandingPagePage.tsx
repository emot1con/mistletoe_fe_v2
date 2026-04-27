import { useAuth } from '../auth/useAuth';

export default function LandingPagePage() {
  const { login } = useAuth();

  return (
    <>
      
{/* TopNavBar Alignment with JSON Spec */}
<nav className="fixed top-0 w-full z-50 h-16 bg-[#0e141c] flex justify-between items-center px-6 w-full">
<div className="flex items-center gap-8">
<span className="text-2xl font-bold text-[#dde3ef] tracking-tighter font-['Space_Grotesk']" >Mistletoe</span>
<div className="hidden md:flex items-center gap-6">
<a className="text-[#55d8e1] font-bold border-b-2 border-[#55d8e1] font-['Space_Grotesk'] tracking-tight cursor-pointer active:scale-95 transition-transform" href="#" >Home</a>
<a className="text-[#bbc9ca] hover:text-[#55d8e1] transition-colors duration-200 font-['Space_Grotesk'] tracking-tight cursor-pointer active:scale-95 transition-transform" href="#capabilities" >Capabilities</a>
<a className="text-[#bbc9ca] hover:text-[#55d8e1] transition-colors duration-200 font-['Space_Grotesk'] tracking-tight cursor-pointer active:scale-95 transition-transform" href="#workflow" >Workflow</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center gap-3 mr-4">
<span className="material-symbols-outlined text-[#bbc9ca] hover:text-[#55d8e1] cursor-pointer" >filter_list</span>
<span className="material-symbols-outlined text-[#bbc9ca] hover:text-[#55d8e1] cursor-pointer" >notifications</span>
<span className="material-symbols-outlined text-[#bbc9ca] hover:text-[#55d8e1] cursor-pointer" >settings</span>
</div>
<button onClick={login} className="primary-gradient text-on-primary font-bold px-5 py-2 rounded-lg text-sm tracking-tight cursor-pointer active:scale-95 transition-transform inline-block">Analyze Repo</button>
</div>
</nav>
<main className="pt-16">
{/* Hero Section */}
<section className="relative min-h-[921px] flex flex-col items-center justify-center px-6 overflow-hidden">
{/* Decorative Architectural Element */}
<div className="absolute -top-24 -left-24 w-96 h-96 bg-primary opacity-5 blur-[120px] rounded-full"></div>
<div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-tertiary opacity-5 blur-[150px] rounded-full"></div>
<div className="max-w-5xl w-full text-center z-10">
<span className="text-primary font-bold tracking-[0.2em] text-xs mb-6 block uppercase" >Automated Insight Engine</span>
<h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.04em] leading-[0.9] mb-8 text-glow" >
                    Analisis Repositori <br /><span className="text-[#dde3ef]" >Otomatis.</span>
</h1>
<p className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" >
                    Bedah arsitektur kode Anda dengan presisi monolitik. Mistletoe mengurai dependensi, mendeteksi pola antipati, dan memberikan rekomendasi optimasi dalam hitungan detik.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button onClick={login} className="primary-gradient text-on-primary font-bold px-8 py-4 rounded-lg text-lg w-full sm:w-auto shadow-lg shadow-primary/20 text-center inline-block">Mulai Analisis</button>
<button className="border border-outline-variant hover:bg-surface-container-high transition-all text-on-surface font-semibold px-8 py-4 rounded-lg text-lg w-full sm:w-auto" >
                        Lihat Dokumentasi
                    </button>
</div>
</div>
{/* Dashboard Preview / Abstract Visual */}
<div className="mt-20 w-full max-w-6xl aspect-[16/9] rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/20 shadow-2xl relative">
<img alt="Analysis Engine Interface" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" data-alt="Modern code editor interface with glowing terminal lines and cyan data visualizations on a dark high-tech background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE4RNgJ4n5Yadrj4T-xBY-9Na6hrgcmOTb64Z283_HUGLL71fvBvAlXpJyuHzGv96RXwu4CSN8jx3F4s4Mr2EF1t0O8RXhEElH4VxgecAjn03sp4hDg3vM-iAHDCIu5Iy_7ha0Ffz8LhLRNk7aQEYYZhIbRhBprMn45B1oPpQ4hcxuFD27OpMQOucYv3OgzjVgr8kDi3XVEc6N5D0izZCz9BNyiGSQ51WzF9d6GvzCVZ78FnQH9ZlIGQBir32UZaS6c-tZiQbppFoN"  />
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
<div className="space-y-2">
<div className="h-1 w-32 bg-primary rounded-full"></div>
<p className="text-xs font-mono text-on-surface-variant" >ENGINE_STATUS: ACTIVE // SCANNING_REPOS</p>
</div>
<div className="glass-panel p-4 rounded-lg border border-outline-variant/30">
<span className="text-tertiary text-sm font-bold flex items-center gap-2" >
<span className="material-symbols-outlined text-xs" >analytics</span> Insights Detected: 142
                        </span>
</div>
</div>
</div>
</section>
{/* Capabilities Section - Bento Grid Layout */}
<section className="py-32 px-6 max-w-7xl mx-auto" id="capabilities">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-xl">
<h2 className="font-headline text-4xl font-bold tracking-tight mb-4" >Kemampuan Tanpa Batas</h2>
<p className="text-on-surface-variant" >Kami melampaui sekadar linter. Kami memahami niat di balik baris kode Anda.</p>
</div>
<div className="text-right">
<span className="text-surface-variant font-headline text-8xl font-black opacity-10" >01</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
{/* Big Feature */}
<div className="md:col-span-7 bg-surface-container-low rounded-xl p-8 flex flex-col justify-between border border-outline-variant/10 group hover:border-primary/30 transition-all">
<div className="space-y-6">
<div className="w-12 h-12 bg-secondary-container/20 rounded-lg flex items-center justify-center text-secondary">
<span className="material-symbols-outlined" >architecture</span>
</div>
<h3 className="text-3xl font-headline font-bold" >Deep Context Mapping</h3>
<p className="text-on-surface-variant leading-relaxed" >
                            Mistletoe membangun graf ketergantungan menyeluruh dari repositori Anda, memungkinkan visualisasi aliran data antar layanan yang kompleks tanpa batas.
                        </p>
</div>
<div className="mt-8 rounded-lg overflow-hidden bg-surface-container-lowest h-48 border border-outline-variant/20 relative">
<div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
<img alt="Context Map" className="w-full h-full object-cover mix-blend-screen" data-alt="Complex network graph visualization with glowing nodes and interconnecting cyan lines on a dark architectural background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPu8OSwNvBmL4hl2sHbts22M85n6PAadQtP14t34tDN6emWbCeSTb4b4mUxbONLM0HFKciZrXgxI4ZlYPO315alSo_isNfKz2hr7FwxVTi-CDieBs0hQjq3k9iiVxHEJMDXmj4aXtftLCSeDwjwz7Ho4bBIK_Dzavq_1F7zImphisc0YWs68eEIv80RpKC6JAC-nzVUvxTv-g3ucPPZoNl9GUCLwFZUw-Sgz0IZHB5s0TcF_dierLHFrYeDE0fUuWJnvcmF7I5PcRk"  />
</div>
</div>
{/* Secondary Feature */}
<div className="md:col-span-5 bg-surface-container-high rounded-xl p-8 flex flex-col justify-between border border-outline-variant/10">
<div className="space-y-6">
<div className="w-12 h-12 bg-tertiary-container/20 rounded-lg flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined" >security</span>
</div>
<h3 className="text-2xl font-headline font-bold" >Audit Keamanan Proaktif</h3>
<p className="text-on-surface-variant text-sm" >Identifikasi kerentanan sebelum mereka menjadi liabilitas. Audit kami mencakup rahasia yang bocor hingga dependensi yang usang.</p>
</div>
<div className="p-4 bg-surface-container-lowest rounded-lg border-l-4 border-tertiary mt-6">
<span className="text-tertiary text-xs font-bold block mb-1" >ALERT</span>
<p className="font-mono text-xs text-on-surface" >Critical dependency vulnerability found in 'package-lock.json'</p>
</div>
</div>
{/* Small Features */}
<div className="md:col-span-4 bg-surface-container-low rounded-xl p-6 border border-outline-variant/10">
<span className="material-symbols-outlined text-primary mb-4" >bolt</span>
<h4 className="font-bold mb-2" >Analisis Instan</h4>
<p className="text-on-surface-variant text-sm" >Optimasi performa real-time untuk pipeline CI/CD Anda.</p>
</div>
<div className="md:col-span-4 bg-surface-container-low rounded-xl p-6 border border-outline-variant/10">
<span className="material-symbols-outlined text-primary mb-4" >hub</span>
<h4 className="font-bold mb-2" >Multi-Repo Sync</h4>
<p className="text-on-surface-variant text-sm" >Pantau kesehatan seluruh organisasi dalam satu dashboard tunggal.</p>
</div>
<div className="md:col-span-4 bg-primary-container/10 rounded-xl p-6 border border-primary/20 flex items-center justify-center">
<a className="text-primary font-bold flex items-center gap-2 group" href="#" >
                        Jelajahi Semua Fitur 
                        <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform" >arrow_forward</span>
</a>
</div>
</div>
</section>
{/* Workflow Section ('How it works') */}
<section className="py-32 bg-surface-container-lowest" id="workflow">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="font-headline text-4xl font-bold tracking-tight mb-4" >Alur Kerja yang Presisi</h2>
<p className="text-on-surface-variant max-w-xl mx-auto" >Tiga langkah sederhana untuk mengubah repositori Anda menjadi karya arsitektur yang bersih.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative">
{/* Connector line */}
<div className="hidden lg:block absolute top-12 left-1/4 right-1/4 h-[1px] bg-outline-variant/30"></div>
{/* Step 1 */}
<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-surface-container-high border-2 border-outline-variant flex items-center justify-center mb-8 z-10">
<span className="material-symbols-outlined text-4xl text-primary" >link</span>
</div>
<h3 className="text-xl font-bold mb-4" >Hubungkan</h3>
<p className="text-on-surface-variant text-sm px-4" >Integrasikan GitHub, GitLab, atau Bitbucket Anda dalam hitungan detik dengan otentikasi aman.</p>
</div>
{/* Step 2 */}
<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-surface-container-high border-2 border-primary flex items-center justify-center mb-8 z-10 shadow-[0_0_30px_rgba(85,216,225,0.2)]">
<span className="material-symbols-outlined text-4xl text-primary" >settings_suggest</span>
</div>
<h3 className="text-xl font-bold mb-4" >Proses Analisis</h3>
<p className="text-on-surface-variant text-sm px-4" >Engine Mistletoe memindai setiap baris, pola, dan struktur menggunakan model AI arsitektural kami.</p>
</div>
{/* Step 3 */}
<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-surface-container-high border-2 border-outline-variant flex items-center justify-center mb-8 z-10">
<span className="material-symbols-outlined text-4xl text-primary" >auto_awesome</span>
</div>
<h3 className="text-xl font-bold mb-4" >Hasil &amp; Optimasi</h3>
<p className="text-on-surface-variant text-sm px-4" >Terima laporan mendalam dan PR otomatis untuk memperbaiki isu yang ditemukan.</p>
</div>
</div>
</div>
</section>
{/* CTA Footer */}
<section className="py-24 px-6">
<div className="max-w-5xl mx-auto glass-panel rounded-3xl p-12 border border-outline-variant/20 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10">
<span className="material-symbols-outlined text-[120px]" >architecture</span>
</div>
<div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
<div className="max-w-xl text-center lg:text-left">
<h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-6" >Siap Mengoptimalkan Kode Anda?</h2>
<p className="text-on-surface-variant text-lg" >Bergabunglah dengan ribuan pengembang yang telah meningkatkan standar kualitas repositori mereka bersama Mistletoe.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
<button onClick={login} className="primary-gradient text-on-primary font-bold px-10 py-5 rounded-lg text-lg shadow-xl shadow-primary/20 whitespace-nowrap text-center inline-block">Mulai Sekarang — Gratis</button>
</div>
</div>
</div>
{/* Simple Footer Links */}
<div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-3">
<span className="text-xl font-bold text-[#dde3ef] tracking-tighter font-['Space_Grotesk']" >Mistletoe</span>
<span className="text-on-surface-variant text-sm" >© 2024 Analysis Engine.</span>
</div>
<div className="flex gap-8 text-sm font-medium text-on-surface-variant">
<a className="hover:text-primary transition-colors" href="#" >Privacy</a>
<a className="hover:text-primary transition-colors" href="#" >Terms</a>
<a className="hover:text-primary transition-colors" href="#" >Security</a>
<a className="hover:text-primary transition-colors" href="#" >Contact</a>
</div>
</div>
</section>
</main>
{/* Contextual FAB (Hidden on Landing unless scrolled) */}
<button className="fixed bottom-8 right-8 w-14 h-14 rounded-full primary-gradient text-on-primary shadow-2xl flex items-center justify-center z-50 hover:scale-110 transition-transform md:hidden" >
<span className="material-symbols-outlined" >add</span>
</button>

    </>
  );
}
