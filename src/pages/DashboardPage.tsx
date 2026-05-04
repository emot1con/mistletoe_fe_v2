import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { mistletoeApi } from '../api/endpoints';
import type { DashboardAnalytics } from '../types';

export default function DashboardPage() {
  const [analytics, setAnalytics] = useState<DashboardAnalytics | null>(null);
  const [totalAnalysis, setTotalAnalysis] = useState<number>(0);
  const [totalRepos, setTotalRepos] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [analyticsData, analysisCount, reposData] = await Promise.all([
          mistletoeApi.getDashboardAnalytics(),
          mistletoeApi.getAnalysisCount(),
          mistletoeApi.getSelectedRepos(1, 100) // Get all for count
        ]);
        
        setAnalytics(analyticsData);
        setTotalAnalysis(analysisCount);
        setTotalRepos(reposData.length);
      } catch (err) {
        console.error('Failed to fetch dashboard data', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-on-surface font-medium animate-pulse">Loading Analytics...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column: Summary Cards */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-surface-container-high p-6 rounded-xl relative overflow-hidden group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary" data-icon="database">database</span>
              </div>
            </div>
            <h3 className="text-on-surface-variant text-xs font-medium mb-1 uppercase tracking-wider">Total Repositories</h3>
            <p className="text-4xl font-headline font-bold text-on-surface">{totalRepos}</p>
            <div className="mt-4 h-1 bg-surface-container-lowest rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[75%]"></div>
            </div>
          </div>

          <div className="bg-surface-container-high p-6 rounded-xl relative overflow-hidden group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary" data-icon="analytics">analytics</span>
              </div>
            </div>
            <h3 className="text-on-surface-variant text-xs font-medium mb-1 uppercase tracking-wider">Total Analysis</h3>
            <p className="text-4xl font-headline font-bold text-on-surface">{totalAnalysis}</p>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-surface-container-lowest border border-surface-container-high flex items-center justify-center text-[8px]">JS</div>
                <div className="w-6 h-6 rounded-full bg-surface-container-lowest border border-surface-container-high flex items-center justify-center text-[8px]">PY</div>
                <div className="w-6 h-6 rounded-full bg-surface-container-lowest border border-surface-container-high flex items-center justify-center text-[8px]">TS</div>
              </div>
              <span className="text-[10px] text-on-surface-variant">+3 languages</span>
            </div>
          </div>

          <div className="bg-surface-container-high p-6 rounded-xl relative overflow-hidden group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary" data-icon="check_circle">check_circle</span>
              </div>
              <span className="text-[10px] font-bold text-secondary uppercase tracking-tighter">Healthy</span>
            </div>
            <h3 className="text-on-surface-variant text-xs font-medium mb-1 uppercase tracking-wider">Success Rate</h3>
            <p className="text-4xl font-headline font-bold text-on-surface">94<span className="text-xl">%</span></p>
            <div className="mt-4 h-1 bg-surface-container-lowest rounded-full overflow-hidden">
              <div className="h-full bg-secondary w-[94%] shadow-[0_0_8px_rgba(125,213,213,0.5)]"></div>
            </div>
          </div>
        </div>

        {/* Right Column: Charts */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="font-headline text-lg font-bold">Analysis Activity Over Time</h2>
                <p className="text-xs text-on-surface-variant">Global performance metrics for the current period</p>
              </div>
            </div>
            <div className="relative h-80 w-full">
              {/* Simplified Chart using real data if available, otherwise fallback */}
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 150">
                <defs>
                  <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#55d8e1" stopOpacity="0.3"></stop>
                    <stop offset="100%" stopColor="#55d8e1" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <path d="M0,120 Q50,100 100,110 T200,60 T300,80 T400,30 L400,150 L0,150 Z" fill="url(#gradient)"></path>
                <path d="M0,120 Q50,100 100,110 T200,60 T300,80 T400,30" fill="none" stroke="#55d8e1" strokeLinecap="round" strokeWidth="3"></path>
              </svg>
              <div className="absolute bottom-0 left-0 w-full flex justify-between px-2 text-[10px] text-on-surface-variant font-medium">
                {analytics?.monthly_effort?.slice(-7).map((e) => (
                  <span key={e.date}>{new Date(e.date).toLocaleDateString('en-US', { weekday: 'short' })}</span>
                )) || (
                  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <span key={d}>{d}</span>)
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10">
              <h3 className="font-headline text-sm font-bold mb-6">Top Impacted Areas</h3>
              <div className="space-y-4">
                {analytics?.top_impacted_areas?.slice(0, 4).map((area) => (
                  <div key={area.component} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      <span className="text-on-surface-variant">{area.component}</span>
                    </div>
                    <span className="font-bold">{area.frequency} analyses</span>
                  </div>
                )) || (
                  <div className="text-on-surface-variant text-xs">No impact data available</div>
                )}
              </div>
            </div>
            
            <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10 flex flex-col justify-between">
              <h3 className="font-headline text-sm font-bold mb-4">Top Repositories</h3>
               <div className="space-y-4">
                {analytics?.top_repositories?.slice(0, 3).map((repo) => (
                  <div key={repo.full_name} className="flex justify-between items-center bg-surface-container-lowest p-2 rounded">
                    <span className="text-[10px] text-on-surface-variant truncate max-w-[150px]">{repo.full_name}</span>
                    <span className="text-[10px] font-bold text-primary">{repo.analysis_count} scans</span>
                  </div>
                )) || (
                  <div className="text-on-surface-variant text-xs">No repository activity available</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
