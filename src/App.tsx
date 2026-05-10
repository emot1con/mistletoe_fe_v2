import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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

function FullScreenSkeleton() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="flex flex-col items-center justify-center min-h-screen bg-surface space-y-4"
    >
      <motion.div 
        className="w-12 h-12 border-4 border-surface-container-highest border-t-primary rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <div className="text-on-surface-variant font-mono text-sm tracking-widest text-glow">INITIALIZING_WORKSPACE...</div>
    </motion.div>
  );
}

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
    return <FullScreenSkeleton />;
  }
  
  return isAuthenticated ? <LoggedIn /> : <LoggedOut />;
}

// For mandatory login pages
function ProtectedPage({ component: Component }: { component: React.ComponentType }) {
  const { isAuthenticated, isLoading, login } = useAuth();
  
  if (isLoading) {
    return <FullScreenSkeleton />;
  }
  
  if (!isAuthenticated) {
    login();
    return null;
  }
  
  return <Component />;
}

function IndexPage() {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return <FullScreenSkeleton />;
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <LandingPagePage />;
}

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public */}
        <Route path="/" element={<IndexPage />} />
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
    </AnimatePresence>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
