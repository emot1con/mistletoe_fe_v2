import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { mistletoeApi } from '../api/endpoints';
import type { AnalysisRequest } from '../types';

export default function SavedPage() {
  const [analyses, setAnalyses] = useState<AnalysisRequest[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSaved() {
      setIsLoading(true);
      try {
        const response = await mistletoeApi.getSavedAnalyses(page, 10);
        setAnalyses(response.data || []);
        setTotalPages(response.total_pages || 1);
      } catch (err) {
        console.error('Failed to fetch saved analyses', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSaved();
  }, [page]);

  const handleToggleSave = async (id: string) => {
    try {
      await mistletoeApi.toggleSaveAnalysis(id);
      // Remove from list since we are in the "Saved" page
      setAnalyses(prev => prev.filter(a => a.id !== id));
    } catch (err) {
      console.error('Failed to unsave analysis', err);
    }
  };

  if (isLoading && page === 1) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-on-surface font-medium animate-pulse text-lg tracking-tight">Loading saved analyses...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h1 className="font-headline text-4xl font-bold text-on-surface tracking-tighter mb-2">Saved Analyses</h1>
            <p className="text-on-surface-variant text-sm max-w-md">Your bookmarked architectural audits for quick reference and comparison.</p>
          </div>
        </div>

        <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-2xl border border-outline-variant/10">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-surface-container-high/50 border-b border-outline-variant/10">
                <th className="px-6 py-5 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">ID / Prompt Snippet</th>
                <th className="px-6 py-5 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Repository</th>
                <th className="px-6 py-5 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Date</th>
                <th className="px-6 py-5 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {analyses.length > 0 ? analyses.map((analysis) => (
                <tr key={analysis.id} className="hover:bg-surface-container-highest/30 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center mr-3">
                        <span className="material-symbols-outlined text-primary text-sm" data-icon="bookmark">bookmark</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-on-surface leading-tight truncate max-w-[300px]" title={analysis.feature_request_text}>
                          {analysis.feature_request_text.length > 50 
                            ? `${analysis.feature_request_text.substring(0, 50)}...` 
                            : analysis.feature_request_text}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="text-sm text-on-surface font-medium">{analysis.repository_name || 'Unknown Repo'}</div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="text-sm text-on-surface font-medium">
                      {new Date(analysis.created_at).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button 
                        onClick={() => handleToggleSave(analysis.id)}
                        className="p-2 text-on-surface-variant hover:text-error transition-colors bg-surface-container-highest/50 rounded hover:bg-error/10 border-none cursor-pointer"
                        title="Remove from saved"
                      >
                        <span className="material-symbols-outlined text-lg">bookmark_remove</span>
                      </button>
                      <Link 
                        className="h-9 px-4 rounded-lg bg-surface-container-highest flex items-center text-xs font-bold text-primary hover:bg-primary/10 transition-all border-none cursor-pointer" 
                        to={`/analysis/${analysis.id}`}
                      >
                        View Results
                        <span className="material-symbols-outlined text-xs ml-1" data-icon="chevron_right">chevron_right</span>
                      </Link>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={4} className="px-6 py-20 text-center">
                    <div className="flex flex-col items-center">
                      <span className="material-symbols-outlined text-6xl text-on-surface-variant/20 mb-4" data-icon="bookmark">bookmark</span>
                      <p className="text-on-surface-variant text-sm font-medium">No saved analyses yet.</p>
                      <Link to="/history" className="mt-4 text-xs font-bold text-primary hover:underline uppercase tracking-wider">Browse history to bookmark</Link>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="px-6 py-4 bg-surface-container-high/30 border-t border-outline-variant/10 flex items-center justify-between">
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                Page {page} of {totalPages}
              </span>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setPage(p => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors disabled:opacity-30 border-none cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm" data-icon="navigate_before">navigate_before</span>
                </button>
                <button className="w-8 h-8 rounded bg-primary text-on-primary text-[10px] font-bold border-none">{page}</button>
                <button 
                  onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors disabled:opacity-30 border-none cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm" data-icon="navigate_next">navigate_next</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
