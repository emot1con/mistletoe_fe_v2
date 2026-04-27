import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { mistletoeApi } from '../api/endpoints';

export default function SettingsBillingPage() {
  const [hourlyRate, setHourlyRate] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function fetchSettings() {
      try {
        const data = await mistletoeApi.getUserSettings();
        setHourlyRate(data.hourly_rate_usd || 0);
      } catch (err) {
        console.error('Failed to fetch settings', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSettings();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await mistletoeApi.updateUserSettings({ hourly_rate_usd: hourlyRate });
      alert('Settings saved successfully.');
    } catch (err) {
      console.error('Failed to save settings', err);
      alert('Failed to save settings.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-on-surface font-medium animate-pulse">Loading settings...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <header className="mb-12">
        <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface mb-2">Account Architecture</h2>
        <p className="text-on-surface-variant font-light text-lg">Precision control over your repository intelligence workspace.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Profile Card */}
        <div className="lg:col-span-7 bg-surface-container-high rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-2xl relative overflow-hidden">
           <div className="flex-1 space-y-4">
            <div>
              <h3 className="font-headline text-2xl font-bold text-on-surface">User Profile</h3>
              <p className="text-primary font-mono text-sm">Authenticated via GitHub</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-container text-secondary">
                <span className="material-symbols-outlined text-[10px] mr-1">hub</span>
                Connected
              </span>
            </div>
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
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">$</span>
                <input 
                  className="w-full bg-surface-container-lowest border-none border-b-2 border-outline focus:border-primary py-4 pl-8 pr-4 font-headline text-2xl text-on-surface transition-all outline-none" 
                  type="number" 
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                />
              </div>
            </div>
            <button 
              onClick={handleSave}
              disabled={isSaving}
              className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold rounded-lg hover:shadow-[0_0_20px_rgba(85,216,225,0.3)] transition-all active:scale-[0.98] disabled:opacity-50"
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
