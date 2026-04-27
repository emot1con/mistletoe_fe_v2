import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import LandingPagePage from './pages/LandingPagePage';
import RepoSelectorPage from './pages/RepoSelectorPage';
import ReposActivePage from './pages/ReposActivePage';
import ReposEmptyPage from './pages/ReposEmptyPage';
import AnalysisHistoryPage from './pages/AnalysisHistoryPage';
import AnalysisDetailPage from './pages/AnalysisDetailPage';
import FeatureAnalysisPage from './pages/FeatureAnalysisPage';
import DashboardPage from './pages/DashboardPage';
import DashboardLoggedOutPage from './pages/DashboardLoggedOutPage';
import HistoryLoggedOutPage from './pages/HistoryLoggedOutPage';
import FeatureAnalysisLoggedOutPage from './pages/FeatureAnalysisLoggedOutPage';
import SettingsBillingPage from './pages/SettingsBillingPage';

function App() {
  return (
    <Router>
      <div className="fixed bottom-0 right-0 bg-surface-container-high p-4 flex flex-col gap-2 z-[9999] opacity-50 hover:opacity-100 transition-opacity border-t border-l border-outline-variant shadow-2xl rounded-tl-xl text-on-surface">
        <div className="text-xs text-on-surface-variant font-bold mb-1">Dev Nav</div>
        <div className="flex flex-wrap gap-2 max-w-[500px]">
          <Link to="/" className="text-xs text-primary hover:underline">Landing</Link>
          <Link to="/repo-selector" className="text-xs text-primary hover:underline">Repo Selector</Link>
          <Link to="/repos-active" className="text-xs text-primary hover:underline">Repos Active</Link>
          <Link to="/repos-empty" className="text-xs text-primary hover:underline">Repos Empty</Link>
          <Link to="/history" className="text-xs text-primary hover:underline">History</Link>
          <Link to="/history-logged-out" className="text-xs text-primary hover:underline">History Logged Out</Link>
          <Link to="/detail" className="text-xs text-primary hover:underline">Detail</Link>
          <Link to="/feature" className="text-xs text-primary hover:underline">Feature</Link>
          <Link to="/feature-logged-out" className="text-xs text-primary hover:underline">Feature Logged Out</Link>
          <Link to="/dashboard" className="text-xs text-primary hover:underline">Dashboard</Link>
          <Link to="/dashboard-logged-out" className="text-xs text-primary hover:underline">Dashboard Logged Out</Link>
          <Link to="/settings" className="text-xs text-primary hover:underline">Settings</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<LandingPagePage />} />
        <Route path="/repo-selector" element={<RepoSelectorPage />} />
        <Route path="/repos-active" element={<ReposActivePage />} />
        <Route path="/repos-empty" element={<ReposEmptyPage />} />
        <Route path="/history" element={<AnalysisHistoryPage />} />
        <Route path="/history-logged-out" element={<HistoryLoggedOutPage />} />
        <Route path="/detail" element={<AnalysisDetailPage />} />
        <Route path="/feature" element={<FeatureAnalysisPage />} />
        <Route path="/feature-logged-out" element={<FeatureAnalysisLoggedOutPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard-logged-out" element={<DashboardLoggedOutPage />} />
        <Route path="/settings" element={<SettingsBillingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
