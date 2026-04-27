import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { mistletoeApi } from '../api/endpoints';
import type { UserRepository } from '../types';

export default function ReposPage() {
  const [repos, setRepos] = useState<UserRepository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRepos() {
      try {
        const data = await mistletoeApi.getSelectedRepos(1, 50);
        setRepos(data);
      } catch (err) {
        console.error('Failed to fetch repositories', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRepos();
  }, []);

  const handleRemoveRepo = async (id: string) => {
    if (!window.confirm('Are you sure you want to remove this repository?')) return;
    try {
      await mistletoeApi.removeRepository(id);
      setRepos(repos.filter(r => r.id !== id));
    } catch (err) {
      console.error('Failed to remove repository', err);
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-on-surface font-medium animate-pulse">Fetching repositories...</div>
        </div>
      </Layout>
    );
  }

  if (repos.length === 0) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-20 h-20 bg-surface-container-highest rounded-full flex items-center justify-center mb-8 shadow-2xl">
            <span className="material-symbols-outlined text-4xl text-primary">add_link</span>
          </div>
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-3">No Repositories Connected</h2>
          <p className="text-on-surface-variant max-w-sm mb-10">Start your intelligence journey by syncing your GitHub repositories.</p>
          <button 
            onClick={() => navigate('/repo-selector')}
            className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-md active:scale-95 shadow-lg shadow-primary/20"
          >
            Add Repository
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="mb-10 flex justify-between items-end">
        <div>
          <h2 className="font-headline text-4xl font-bold tracking-tighter text-on-surface mb-2">Repositories</h2>
          <p className="text-on-surface-variant max-w-2xl">Manage your architectural analysis pipeline across your connected services.</p>
        </div>
        <button 
          onClick={() => navigate('/repo-selector')}
          className="bg-primary text-on-primary px-6 py-2 rounded-lg text-sm font-bold active:scale-95 transition-transform"
        >
          Add Repository
        </button>
      </section>

      <div className="grid grid-cols-1 gap-4">
        {repos.map(repo => (
          <div key={repo.id} className="group bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 rounded-xl p-6 relative overflow-hidden border border-outline-variant/10">
            <div className="flex items-start justify-between relative z-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-headline font-semibold text-xl text-on-surface">{repo.full_name}</h3>
                    <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-widest bg-secondary-container/20 text-secondary">Active</span>
                  </div>
                  <div className="text-sm text-on-surface-variant">
                    Added: {new Date(repo.selected_at).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Link to={`/feature`} state={{ repoId: repo.id }} className="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                  New Analysis
                </Link>
                <button 
                  onClick={() => handleRemoveRepo(repo.id)}
                  className="text-error/60 hover:text-error text-sm font-medium ml-4 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
