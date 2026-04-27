import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { mistletoeApi } from '../api/endpoints';
import type { GithubRepo } from '../types';

export default function RepoSelectorPage() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [selectedRepoIds, setSelectedRepoIds] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRepos() {
      try {
        const data = await mistletoeApi.getGithubRepos();
        setRepos(data);
      } catch (err) {
        console.error('Failed to fetch GitHub repos', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRepos();
  }, []);

  const filteredRepos = repos.filter(repo => 
    repo.full_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleSelection = (repoId: number) => {
    setSelectedRepoIds(prev => 
      prev.includes(repoId) 
        ? prev.filter(id => id !== repoId) 
        : [...prev, repoId]
    );
  };

  const handleAddRepos = async () => {
    setIsSubmitting(true);
    try {
      const selectedRepos = repos.filter(r => selectedRepoIds.includes(r.id));
      await Promise.all(selectedRepos.map(repo => mistletoeApi.selectRepository(repo)));
      navigate('/repos');
    } catch (err) {
      console.error('Failed to add repositories', err);
      alert('Failed to add some repositories. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-on-surface font-medium animate-pulse">Fetching repositories from GitHub...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col">
        <header className="mb-8">
          <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-[#00ADB5] tracking-[-0.02em]">Select Repositories</h2>
          <p className="text-on-surface-variant text-sm mt-1">Choose the projects you want to analyze with Wistletoe.</p>
        </header>

        <section className="mb-8">
          <div className="bg-surface-container-high rounded-xl p-6 flex flex-wrap gap-4 items-center shadow-sm">
            <div className="flex-1 min-w-[300px] relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input 
                className="w-full bg-surface-container-lowest border-none border-b-2 border-outline focus:border-primary focus:ring-0 text-on-surface pl-12 pr-4 py-3 rounded-t-lg transition-all placeholder:text-outline-variant/60" 
                placeholder="Search repository name..." 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        <section className="flex-1 pb-24">
          <div className="space-y-4">
            <div className="flex items-center px-6 py-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-60">
              <div className="w-10"></div>
              <div className="flex-1">Repository Details</div>
              <div className="w-32 text-center">Language</div>
              <div className="w-40 text-right">Owner</div>
            </div>

            {filteredRepos.length > 0 ? filteredRepos.map((repo) => (
              <div 
                key={repo.id}
                onClick={() => toggleSelection(repo.id)}
                className={`group flex items-center bg-surface-container-low hover:bg-surface-container-high transition-all duration-300 p-6 rounded-xl relative overflow-hidden border-l-4 cursor-pointer ${
                  selectedRepoIds.includes(repo.id) ? 'border-primary bg-surface-container-highest' : 'border-transparent'
                }`}
              >
                <div className="w-10 flex items-center">
                  <input 
                    type="checkbox" 
                    checked={selectedRepoIds.includes(repo.id)}
                    onChange={() => {}} // Handled by div onClick
                    className="rounded bg-surface-container-lowest border-outline-variant text-primary focus:ring-primary pointer-events-none"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-2">
                    <h3 className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors">{repo.name}</h3>
                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded-sm border ${
                      repo.private ? 'bg-tertiary-container/30 text-tertiary border-tertiary/20' : 'bg-secondary-container/30 text-secondary border-secondary/20'
                    }`}>
                      {repo.private ? 'PRIVATE' : 'PUBLIC'}
                    </span>
                  </div>
                  <p className="text-on-surface-variant text-sm mt-1 max-w-xl line-clamp-1">{repo.description || 'No description provided.'}</p>
                </div>
                <div className="w-32 flex justify-center">
                  <span className="flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-full text-xs font-medium border border-outline-variant/10">
                    {repo.language || 'Plain Text'}
                  </span>
                </div>
                <div className="w-40 flex justify-end gap-6 text-on-surface-variant">
                  <span className="text-sm font-medium">{repo.owner.login}</span>
                </div>
              </div>
            )) : (
              <div className="text-center py-20 bg-surface-container-low rounded-xl border border-dashed border-outline-variant">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">folder_off</span>
                <p className="text-on-surface-variant">No repositories found matching your search.</p>
              </div>
            )}
          </div>
        </section>

        <footer className="fixed bottom-0 right-0 w-[calc(100%-16rem)] bg-surface-container-low/90 backdrop-blur-xl border-t border-outline-variant/20 px-12 py-4 z-40">
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary border border-primary/20">
                <span className="font-headline font-bold">{selectedRepoIds.length}</span>
              </div>
              <p className="text-on-surface font-medium">Repositories selected</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => navigate('/dashboard')}
                className="px-6 py-3 text-on-surface-variant font-medium hover:text-on-surface transition-colors"
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button 
                onClick={handleAddRepos}
                disabled={selectedRepoIds.length === 0 || isSubmitting}
                className="px-8 py-3 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-lg shadow-lg shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 disabled:shadow-none"
              >
                {isSubmitting ? 'Adding...' : 'Add Repositories'}
              </button>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
}
