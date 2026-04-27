import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider';
import { useAuth } from './auth/useAuth';

import LandingPagePage from './pages/LandingPagePage';
import CallbackPage from './pages/CallbackPage';
import RepoSelectorPage from './pages/RepoSelectorPage';
import ReposPage from './pages/ReposPage';
import AnalysisHistoryPage from './pages/AnalysisHistoryPage';
import AnalysisDetailPage from './pages/AnalysisDetailPage';
import FeatureAnalysisPage from './pages/FeatureAnalysisPage';
import DashboardPage from './pages/DashboardPage';
import DashboardLoggedOutPage from './pages/DashboardLoggedOutPage';
import HistoryLoggedOutPage from './pages/HistoryLoggedOutPage';
import FeatureAnalysisLoggedOutPage from './pages/FeatureAnalysisLoggedOutPage';
import SavedPage from './pages/SavedPage';
import SettingsBillingPage from './pages/SettingsBillingPage';

// Helper component: select between logged-in and logged-out version
function AuthAwarePage({ 
  loggedIn: LoggedIn, 
  loggedOut: LoggedOut 
}: { 
  loggedIn: React.ComponentType; 
  loggedOut: React.ComponentType;
}) {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-surface">
        <div className="text-on-surface text-xl font-bold">Loading...</div>
      </div>
    );
  }
  
  return isAuthenticated ? <LoggedIn /> : <LoggedOut />;
}

// For mandatory login pages
function ProtectedPage({ component: Component }: { component: React.ComponentType }) {
  const { isAuthenticated, isLoading, login } = useAuth();
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-surface">
        <div className="text-on-surface text-xl font-bold">Loading...</div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    login();
    return null;
  }
  
  return <Component />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public */}
          <Route path="/" element={<LandingPagePage />} />
          <Route path="/auth/callback" element={<CallbackPage />} />

          {/* Auth-Aware: show logged-out version if not authenticated */}
          <Route path="/dashboard" element={
            <AuthAwarePage loggedIn={DashboardPage} loggedOut={DashboardLoggedOutPage} />
          } />
          <Route path="/history" element={
            <AuthAwarePage loggedIn={AnalysisHistoryPage} loggedOut={HistoryLoggedOutPage} />
          } />
          <Route path="/feature" element={
            <AuthAwarePage loggedIn={FeatureAnalysisPage} loggedOut={FeatureAnalysisLoggedOutPage} />
          } />

          {/* Protected: must login */}
          <Route path="/repos" element={<ProtectedPage component={ReposPage} />} />
          <Route path="/repo-selector" element={<ProtectedPage component={RepoSelectorPage} />} />
          <Route path="/history" element={<ProtectedPage component={AnalysisHistoryPage} />} />
          <Route path="/saved" element={<ProtectedPage component={SavedPage} />} />
          <Route path="/analysis/:id" element={<ProtectedPage component={AnalysisDetailPage} />} />
          <Route path="/settings" element={<ProtectedPage component={SettingsBillingPage} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
