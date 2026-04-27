import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { mistletoeApi } from '../api/endpoints';
import type { UserRepository } from '../types';

export default function FeatureAnalysisPage() {
  const [repos, setRepos] = useState<UserRepository[]>([]);
  const [selectedRepoId, setSelectedRepoId] = useState<string>('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRepos() {
      try {
        const data = await mistletoeApi.getSelectedRepos(1, 50);
        setRepos(data);
        if (data.length > 0) {
          setSelectedRepoId(data[0].id);
        }
      } catch (err) {
        console.error('Failed to fetch selected repos', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRepos();
  }, []);

  const handleAnalyze = async () => {
    if (!selectedRepoId || !description.trim()) return;
    setIsSubmitting(true);
    try {
      const result = await mistletoeApi.createAnalysis(selectedRepoId, description);
      navigate(`/analysis/${result.analysis_request_id || result.id}`);
    } catch (err) {
      console.error('Failed to create analysis', err);
      alert('Failed to start analysis. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-on-surface font-medium animate-pulse">Initializing analysis engine...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="w-full max-w-[800px] mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-headline font-black tracking-tighter text-on-surface">New Feature Analysis</h1>
          <p className="text-on-surface-variant font-body max-w-md mx-auto">
            Describe the feature you want to build to see architectural impact and effort.
          </p>
        </div>

        <div className="bg-surface-container-low border border-outline-variant/10 rounded-xl overflow-hidden shadow-2xl relative group">
          <div className="p-8 space-y-8">
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Target Repository</label>
              <select 
                className="w-full bg-surface-container-lowest border border-outline-variant/20 px-4 py-3 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none text-on-surface"
                value={selectedRepoId}
                onChange={(e) => setSelectedRepoId(e.target.value)}
              >
                {repos.map(repo => (
                  <option key={repo.id} value={repo.id}>{repo.full_name}</option>
                ))}
              </select>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-end">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Feature Description</label>
                <span className="text-[10px] text-outline">{description.length}/2000 chars</span>
              </div>
              <textarea 
                className="w-full min-h-[200px] bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-5 text-on-surface placeholder:text-on-surface-variant/30 focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none font-body" 
                placeholder="e.g., Integrate a third-party payment gateway (Stripe) to allow users to subscribe to premium plans..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className="bg-surface-container-low/50 px-8 py-5 flex items-center justify-between border-t border-outline-variant/10">
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-sm text-tertiary" data-icon="bolt">bolt</span>
              <span className="text-xs font-medium">Analysis costs 1 credit</span>
            </div>
            <button 
              onClick={handleAnalyze}
              disabled={isSubmitting || !description.trim()}
              className="relative overflow-hidden group/btn px-6 py-2.5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold rounded-lg transition-all hover:shadow-[0_0_20px_rgba(85,216,225,0.4)] active:scale-95 flex items-center gap-2 disabled:opacity-50"
            >
              <span>{isSubmitting ? 'Analyzing...' : 'Analyze Feature Impact'}</span>
              <span className="material-symbols-outlined text-sm" data-icon="auto_awesome">auto_awesome</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
