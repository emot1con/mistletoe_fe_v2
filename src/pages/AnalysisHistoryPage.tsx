import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { mistletoeApi } from '../api/endpoints';
import type { AnalysisRequest } from '../types';

export default function AnalysisHistoryPage() {
  const [analyses, setAnalyses] = useState<AnalysisRequest[]>([]);
  const [cursorHistory, setCursorHistory] = useState<(string | undefined)[]>([undefined]);
  const [pageIndex, setPageIndex] = useState(0);
  const [nextCursor, setNextCursor] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch analysis history using cursor
  useEffect(() => {
    async function fetchHistory() {
      setIsLoading(true);
      try {
        const cursor = cursorHistory[pageIndex];
        const response = await mistletoeApi.getGlobalAnalysisHistory(cursor, 10);
        setAnalyses(response.data || []);
        // Save the next cursor if it exists and is not empty string
        setNextCursor(response.next_cursor || undefined);
      } catch (err) {
        console.error('Failed to fetch global analysis history', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchHistory();
  }, [cursorHistory, pageIndex]);

  if (isLoading && pageIndex === 0) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-on-surface font-medium animate-pulse">Loading global analysis history...</div>
        </div>
      </Layout>
    );
  }

  const handleNext = () => {
    if (nextCursor) {
      if (pageIndex === cursorHistory.length - 1) {
        setCursorHistory(prev => [...prev, nextCursor]);
      }
      setPageIndex(p => p + 1);
    }
  };

  const handlePrev = () => {
    setPageIndex(p => Math.max(0, p - 1));
  };

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h1 className="font-headline text-4xl font-bold text-on-surface tracking-tighter mb-2">Global Analysis History</h1>
            <p className="text-on-surface-variant text-sm max-w-md">Chronological record of all automated repository audits across your account.</p>
          </div>
        </div>

        <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-2xl">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-surface-container-high/50 border-b border-outline-variant/10">
                <th className="px-6 py-5 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">ID / Prompt Snippet</th>
                <th className="px-6 py-5 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Status</th>
                <th className="px-6 py-5 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Analysis Date</th>
                <th className="px-6 py-5 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {analyses.length > 0 ? analyses.map((analysis) => (
                <tr key={analysis.id} className="hover:bg-surface-container-highest/30 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center mr-3">
                        <span className="material-symbols-outlined text-primary text-sm" data-icon="folder">folder</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-on-surface leading-tight truncate max-w-[200px]" title={analysis.feature_request_text}>
                          {analysis.feature_request_text.substring(0, 30)}...
                        </div>
                        <div className="text-[10px] text-on-surface-variant mt-1">{analysis.repository_name || 'Unknown Repo'}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      analysis.status === 'completed' ? 'bg-primary/20 text-primary' : 
                      analysis.status === 'failed' ? 'bg-error-container text-on-error-container' : 
                      'bg-surface-container-highest text-on-surface-variant'
                    }`}>
                      {analysis.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="text-sm text-on-surface font-medium">
                      {new Date(analysis.created_at).toLocaleDateString()}
                    </div>
                    <div className="text-[10px] text-on-surface-variant uppercase tracking-tight">
                      {new Date(analysis.created_at).toLocaleTimeString()}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    {analysis.status === 'completed' ? (
                      <Link className="inline-flex items-center text-xs font-bold text-primary group-hover:translate-x-1 transition-transform" to={`/analysis/${analysis.id}`}>
                        View Detail
                        <span className="material-symbols-outlined text-xs ml-1" data-icon="chevron_right">chevron_right</span>
                      </Link>
                    ) : (
                      <span className="text-xs font-bold text-on-surface-variant opacity-50">Unavailable</span>
                    )}
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={4} className="px-6 py-10 text-center text-on-surface-variant">
                    No analysis history found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="px-6 py-4 bg-surface-container-high/30 border-t border-outline-variant/10 flex items-center justify-between">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
              Page {pageIndex + 1}
            </span>
            <div className="flex space-x-2">
              <button 
                onClick={handlePrev}
                disabled={pageIndex === 0}
                className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors disabled:opacity-30 border-none cursor-pointer disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined text-sm" data-icon="navigate_before">navigate_before</span>
              </button>
              <button className="w-8 h-8 rounded bg-primary text-on-primary text-[10px] font-bold border-none">{pageIndex + 1}</button>
              <button 
                onClick={handleNext}
                disabled={!nextCursor}
                className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors disabled:opacity-30 border-none cursor-pointer disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined text-sm" data-icon="navigate_next">navigate_next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
