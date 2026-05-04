import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { mistletoeApi } from '../api/endpoints';
import type { AnalysisResult, ExportJob } from '../types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export default function AnalysisDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const [isExportingToGithub, setIsExportingToGithub] = useState(false);
  const [exportJob, setExportJob] = useState<ExportJob | null>(null);
  const navigate = useNavigate();

  const TIER_LABELS = ['MVP', 'Balanced', 'Comprehensive'] as const;
  type TierLabel = typeof TIER_LABELS[number];
  const [selectedTier, setSelectedTier] = useState<TierLabel>('Comprehensive');
  const [isSaved, setIsSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function fetchResult() {
      if (!id) return;
      setIsLoading(true);
      try {
        const data = await mistletoeApi.getAnalysis(id);
        setResult(data);
        setIsSaved(data.is_saved);
      } catch (err) {
        console.error('Failed to fetch analysis detail', err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchResult();
  }, [id]);

  const handleToggleSave = async () => {
    if (!id || isSaving) return;
    setIsSaving(true);
    try {
      const response = await mistletoeApi.toggleSaveAnalysis(id);
      setIsSaved(response.is_saved);
    } catch (err) {
      console.error('Failed to toggle save status', err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleExportPdf = async () => {
    if (!id) return;
    setIsExporting(true);
    try {
      const blob = await mistletoeApi.downloadPdfReport(id);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `mistletoe-report-${id.substring(0, 8)}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to export PDF', err);
      alert('Failed to generate PDF report.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportToGithub = async () => {
    if (!id || isExportingToGithub) return;
    
    setIsExportingToGithub(true);
    try {
        const job = await mistletoeApi.exportToGithubIssue(id);
        setExportJob(job);
        
        // Start polling
        const pollInterval = setInterval(async () => {
            try {
                const status = await mistletoeApi.getExportStatus(job.id);
                setExportJob(status);
                
                if (status.status === 'completed' || status.status === 'failed') {
                    clearInterval(pollInterval);
                    setIsExportingToGithub(false);
                }
            } catch (err) {
                console.error('Failed to poll export status', err);
                clearInterval(pollInterval);
                setIsExportingToGithub(false);
            }
        }, 2000);
    } catch (err) {
        console.error('Failed to start export', err);
        setIsExportingToGithub(false);
        alert('Failed to start GitHub export');
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-on-surface font-medium animate-pulse">Analyzing architectural data...</div>
        </div>
      </Layout>
    );
  }

  if (!result) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-on-surface mb-2">Analysis Not Found</h2>
          <p className="text-on-surface-variant mb-6">The analysis you are looking for does not exist or has been removed.</p>
          <button onClick={() => navigate('/history')} className="text-primary font-bold hover:underline">Back to History</button>
        </div>
      </Layout>
    );
  }

  // Derive title from text
  const featureTitle = result.feature_request_text.split('.')[0].substring(0, 50);
  
  // Custom mapping for risk colors
  const getRiskColor = (level: string) => {
    switch(level) {
      case 'critical': return 'text-error bg-error';
      case 'high': return 'text-error bg-error';
      case 'medium': return 'text-tertiary bg-tertiary';
      default: return 'text-secondary bg-secondary';
    }
  };
  // Radar chart data mapping
  const getScore = (impact: string) => impact === 'critical' ? 95 : impact === 'high' ? 80 : impact === 'medium' ? 60 : impact === 'low' ? 30 : 10;
  
  const chartData = [
    { subject: 'PERFORMANCE', value: getScore(result.performance_impact), fullMark: 100 },
    { subject: 'MAINTAINABILITY', value: result.impact_score || 50, fullMark: 100 },
    { subject: 'SECURITY', value: getScore(result.security_impact), fullMark: 100 },
    { subject: 'TECH DEBT', value: getScore(result.technical_debt_score), fullMark: 100 },
  ];

  // Find the matching alternative approach for the selected tier
  const activeTierData = result.alternative_approaches.find(
    (a) => a.label === selectedTier
  );

  // Map impact_level from tier approach to display risk
  const getTierRisk = (impactLevel: string): string => {
    switch (impactLevel) {
      case 'high': return 'high';
      case 'medium': return 'medium';
      case 'low': return 'low';
      default: return impactLevel;
    }
  };

  return (
    <Layout>
      <header className="mb-10">
        <div className="text-[10px] text-on-surface-variant font-bold mb-2 uppercase tracking-widest flex items-center gap-2">
          <span>Repositories</span>
          <span className="opacity-50">›</span>
          <span>{result.repository_id ? 'Wistletoe' : 'Unknown'}</span>
          <span className="opacity-50">›</span>
          <span className="text-primary">Feature Analysis</span>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-headline font-bold text-on-surface tracking-tight leading-tight">Feature Analysis: {featureTitle}</h2>
            <p className="text-on-surface-variant mt-2 text-sm leading-relaxed">{result.feature_request_text}</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button 
              onClick={handleToggleSave}
              disabled={isSaving}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${isSaved ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' : 'bg-surface-container-high text-on-surface hover:bg-surface-bright border border-outline-variant/30'} disabled:opacity-50`}
              title={isSaved ? "Remove from saved" : "Save analysis"}
            >
              <span className={`material-symbols-outlined text-[20px] ${isSaved ? 'fill-[1]' : ''}`} data-icon="bookmark">bookmark</span>
            </button>
            {exportJob?.status === 'completed' && exportJob.github_issue_url && (
              <a 
                href={exportJob.github_issue_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-primary/10 text-primary border border-primary/20 rounded-lg flex items-center gap-2 hover:bg-primary/20 transition-colors text-xs font-bold uppercase tracking-wider"
              >
                <span className="material-symbols-outlined text-[16px]" data-icon="open_in_new">open_in_new</span>
                View Issue
              </a>
            )}
            <button 
              onClick={handleExportToGithub}
              disabled={isExportingToGithub || exportJob?.status === 'completed'}
              className="px-4 py-2.5 bg-surface-container-high text-on-surface rounded-lg flex items-center gap-2 hover:bg-surface-bright transition-colors text-xs font-bold uppercase tracking-wider disabled:opacity-50"
            >
              {isExportingToGithub ? (
                 <>
                   <span className="material-symbols-outlined text-[16px] animate-spin" data-icon="sync">sync</span>
                   Exporting...
                 </>
              ) : exportJob?.status === 'completed' ? (
                 <>
                   <span className="material-symbols-outlined text-[16px]" data-icon="check">check</span>
                   Exported
                 </>
              ) : (
                 <>
                   <span className="material-symbols-outlined text-[16px]" data-icon="send">send</span>
                   Send to Github Issue
                 </>
              )}
            </button>
            <button 
              onClick={handleExportPdf}
              disabled={isExporting}
              className="px-4 py-2.5 bg-surface-container-high border border-outline-variant/30 text-on-surface rounded-lg flex items-center gap-2 hover:bg-surface-bright transition-colors text-xs font-bold uppercase tracking-wider disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-[16px]" data-icon="download">download</span>
              Export PDF
            </button>
          </div>
        </div>
      </header>

      {/* Alternative Approaches Section */}
      <section className="mb-12">
        <h3 className="text-center text-[11px] font-bold tracking-[0.2em] text-on-surface-variant uppercase mb-8">Implementation Tier Selection</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {result.alternative_approaches.map((app, idx) => {
            // Styling and icons vary by approach sequence (mocking the image 2 layout)
            const isActiveTier = app.label === selectedTier;
            const badgeLabel = app.label;
            const iconName = idx === 0 ? "bolt" : idx === 1 ? "balance" : "architecture";
            const debtReduction = idx === 0 ? "30%" : idx === 1 ? "65%" : "95%";
            
            return (
              <div 
                key={idx} 
                onClick={() => setSelectedTier(app.label as TierLabel)}
                className={`bg-surface-container-low rounded-xl p-8 flex flex-col transition-all group cursor-pointer hover:-translate-y-1 ${isActiveTier ? 'border-2 border-primary bg-primary/5 shadow-[0_0_40px_rgba(85,216,225,0.1)] scale-[1.02]' : 'border-2 border-transparent hover:bg-surface-container-high hover:shadow-xl'}`}
              >
                
                <div className="flex justify-between items-start mb-6">
                  <div className={`px-2 py-1 rounded text-[8px] font-bold tracking-[0.15em] uppercase ${isActiveTier ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface-variant'}`}>
                    {isActiveTier ? "Current Selection" : badgeLabel}
                  </div>
                  <span className={`material-symbols-outlined text-lg ${isActiveTier ? 'text-primary' : 'text-on-surface-variant'}`} data-icon={iconName}>{iconName}</span>
                </div>
                
                <h4 className="text-2xl font-headline font-bold text-on-surface tracking-tight mb-3">{app.label}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed font-medium mb-8">
                  {app.description.length > 100 ? `${app.description.substring(0, 100)}...` : app.description}
                </p>
                
                <ul className="mb-8 space-y-3">
                  <li className="flex items-start gap-2 text-xs font-medium text-on-surface-variant">
                    <div className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${isActiveTier ? 'bg-primary' : 'bg-primary/40'}`}></div>
                    <span>{idx === 0 ? 'Fastest time-to-production' : idx === 1 ? 'Scalable for next 12 months' : 'Near-zero technical debt'}</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs font-medium text-on-surface-variant">
                    <div className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${isActiveTier ? 'bg-primary' : 'bg-primary/40'}`}></div>
                    <span>{idx === 0 ? 'Low immediate cost' : idx === 1 ? 'Security baseline upgrade' : 'Enterprise-grade security'}</span>
                  </li>
                  {isActiveTier && (
                  <li className="flex items-start gap-2 text-xs font-medium text-on-surface-variant">
                    <div className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${isActiveTier ? 'bg-primary' : 'bg-primary/40'}`}></div>
                    <span>Modular component logic</span>
                  </li>
                  )}
                </ul>

                <div className="mt-auto pt-5 border-t border-outline-variant/10">
                  <div className="text-[9px] font-bold tracking-widest uppercase text-on-surface-variant mb-1">Impact</div>
                  <div className={`text-lg font-headline font-bold ${isActiveTier ? 'text-primary' : 'text-on-surface'}`}>{debtReduction} Debt Reduction</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Top 3 Metric Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Risk Level */}
        <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border border-transparent hover:border-outline-variant/10 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <p className="text-on-surface-variant text-[10px] font-bold tracking-widest uppercase">Risk Level</p>
            <span className={`material-symbols-outlined ${getRiskColor(activeTierData ? getTierRisk(activeTierData.impact_level) : result.risk_level).split(' ')[0]}`} data-icon="warning">warning</span>
          </div>
          <div>
            <div className="flex items-end gap-3 mb-3">
              <h3 className={`text-4xl font-headline font-bold capitalize ${getRiskColor(activeTierData ? getTierRisk(activeTierData.impact_level) : result.risk_level).split(' ')[0]}`}>
                {activeTierData ? getTierRisk(activeTierData.impact_level) : result.risk_level}
              </h3>
              <span className="text-xs text-on-surface-variant font-medium mb-1">Critical Path Impact</span>
            </div>
            <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${getRiskColor(activeTierData ? getTierRisk(activeTierData.impact_level) : result.risk_level).split(' ')[1]}`} 
                style={{ 
                  width: (activeTierData ? getTierRisk(activeTierData.impact_level) : result.risk_level) === 'critical' ? '90%' : 
                         (activeTierData ? getTierRisk(activeTierData.impact_level) : result.risk_level) === 'high' ? '75%' : 
                         (activeTierData ? getTierRisk(activeTierData.impact_level) : result.risk_level) === 'medium' ? '55%' : '35%' 
                }}></div>
            </div>
          </div>
        </div>

        {/* Estimated Effort */}
        <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border border-transparent hover:border-outline-variant/10 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <p className="text-on-surface-variant text-[10px] font-bold tracking-widest uppercase">Estimated Effort</p>
            <span className="material-symbols-outlined text-primary/70" data-icon="timer">timer</span>
          </div>
          <div>
            <div className="flex items-end gap-3 mb-4">
              <h3 className="text-4xl font-headline font-bold text-primary">
                {activeTierData ? `${activeTierData.estimated_effort_min_hours}-${activeTierData.estimated_effort_max_hours}` : `${result.estimated_effort_min_hours}-${result.estimated_effort_max_hours}`} hrs
              </h3>
              <span className="text-xs text-on-surface-variant font-medium mb-1">Dev cycles</span>
            </div>
            <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full w-[60%]"></div>
            </div>
          </div>
        </div>

        {/* Projected Cost */}
        <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border border-transparent hover:border-outline-variant/10 transition-colors">
          <div className="flex justify-between items-start mb-4">
            <p className="text-on-surface-variant text-[10px] font-bold tracking-widest uppercase">Projected Cost</p>
            <span className="material-symbols-outlined text-on-surface-variant/50" data-icon="payments">payments</span>
          </div>
          <div>
            <div className="flex items-end gap-3 mb-3">
              <h3 className="text-4xl font-headline font-bold text-on-surface">
                ${(activeTierData ? activeTierData.cost_estimate_max_usd : result.cost_estimate_max_usd).toLocaleString()}
              </h3>
              <span className="text-[10px] text-on-surface-variant font-bold mb-1 uppercase tracking-wider">USD / Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-tertiary"></div>
              <span className="text-[10px] text-on-surface-variant font-medium uppercase tracking-wider">Includes infrastructure overhead</span>
            </div>
          </div>
        </div>
      </section>

      {/* Included Patterns & Effort Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Included Patterns / Features */}
        <div className="bg-surface-container-low rounded-xl p-6 border border-transparent hover:border-outline-variant/10 transition-colors">
          <h4 className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant mb-4">
            Included Patterns / Features
          </h4>
          <div className="flex flex-wrap gap-2">
            {(activeTierData?.included_patterns || result.feature_types).map((pattern) => (
              <span
                key={pattern}
                className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-semibold"
              >
                {pattern}
              </span>
            ))}
          </div>
        </div>

        {/* Effort Breakdown Summary */}
        <div className="bg-surface-container-low rounded-xl p-6 border border-transparent hover:border-outline-variant/10 transition-colors">
          <h4 className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant mb-4">
            Effort Breakdown
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mb-1">Min Effort</p>
              <p className="text-lg font-headline font-bold text-on-surface">
                {activeTierData ? activeTierData.estimated_effort_min_hours : result.estimated_effort_min_hours}h
              </p>
            </div>
            <div>
              <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mb-1">Max Buffer</p>
              <p className="text-lg font-headline font-bold text-on-surface">
                +{activeTierData 
                  ? activeTierData.estimated_effort_max_hours - activeTierData.estimated_effort_min_hours 
                  : result.estimated_effort_max_hours - result.estimated_effort_min_hours}h
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Affected Components */}
      {result.affected_components.length > 0 && (
        <section className="mb-12">
          <h4 className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant mb-4">
            Affected Components
          </h4>
          <div className="flex flex-wrap gap-2">
            {result.affected_components.map((comp) => (
              <span
                key={comp}
                className="px-3 py-1.5 bg-tertiary/10 text-tertiary border border-tertiary/20 rounded-full text-xs font-semibold"
              >
                {comp}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Middle Dashboard Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
        {/* Radar Chart Block */}
        <div className="lg:col-span-8 bg-surface-container-low p-8 rounded-xl border border-transparent hover:border-outline-variant/10 transition-colors">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h4 className="text-lg font-headline font-bold text-on-surface mb-1">Impact Visualization</h4>
              <p className="text-xs text-on-surface-variant font-medium">Multi-dimensional analysis of feature refraction</p>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-primary"></div> Current
              </div>
              <div className="flex items-center gap-1.5 opacity-50">
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div> Target
              </div>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid stroke="#2c313a" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#8b949e', fontSize: 10, fontWeight: 700, letterSpacing: 1 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Current" dataKey="value" stroke="#55d8e1" strokeWidth={2} fill="#55d8e1" fillOpacity={0.1} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Metrics Correlation */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-low p-6 rounded-xl flex-1 border border-transparent hover:border-outline-variant/10 transition-colors">
            <h4 className="text-lg font-headline font-bold text-on-surface mb-1">Metrics Correlation</h4>
            <p className="text-xs text-on-surface-variant font-medium mb-8">Resource burn vs. technical gain</p>
            
            <div className="space-y-6">
              {/* Performance Gain */}
              <div>
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2">
                  <span className="text-on-surface-variant">Performance Gain</span>
                  <span className="text-primary">+{getScore(result.performance_impact)}%</span>
                </div>
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: `${getScore(result.performance_impact)}%` }}></div>
                </div>
              </div>
              
              {/* Security Readiness */}
              <div>
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2">
                  <span className="text-on-surface-variant">Security Readiness</span>
                  <span className="text-tertiary">
                    {activeTierData ? (activeTierData.label === 'MVP' ? 'Baseline Upgrade' : activeTierData.label === 'Balanced' ? 'Standard Protocol' : 'Enterprise-Grade') : 'Optimized'}
                  </span>
                </div>
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <div className="bg-tertiary h-full rounded-full transition-all duration-500" style={{ width: `${activeTierData ? (activeTierData.label === 'MVP' ? 40 : activeTierData.label === 'Balanced' ? 70 : 100) : 60}%` }}></div>
                </div>
              </div>
              
              {/* Tech Debt Reduction */}
              <div>
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2">
                  <span className="text-on-surface-variant">Tech Debt Reduction</span>
                  <span className="text-secondary">
                    {activeTierData ? (activeTierData.label === 'MVP' ? '30%' : activeTierData.label === 'Balanced' ? '65%' : '95%') : 'Low'}
                  </span>
                </div>
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full rounded-full transition-all duration-500" style={{ width: `${activeTierData ? (activeTierData.label === 'MVP' ? 30 : activeTierData.label === 'Balanced' ? 65 : 95) : 40}%` }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-container-low p-5 rounded-xl border border-transparent hover:border-outline-variant/10 transition-colors flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary text-xl" data-icon="trending_up">trending_up</span>
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-0.5">ROI Factor</div>
              <div className="text-lg font-headline font-bold text-on-surface tracking-tight">
                 {activeTierData ? (activeTierData.label === 'MVP' ? '3.5x' : activeTierData.label === 'Balanced' ? '2.5x' : '1.8x') : '2.4x'} Multiplier
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analyst Summary Footer */}
      <section className="bg-surface-container-high rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 outline outline-1 outline-outline-variant/20 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-surface-container-highest shrink-0 flex items-center justify-center border border-outline-variant/20 overflow-hidden">
            <span className="material-symbols-outlined text-primary text-2xl" data-icon="robot_2">robot_2</span>
          </div>
          <div>
            <div className="text-on-surface font-bold text-sm mb-1">Automated Analyst Summary</div>
            <p className="text-on-surface-variant text-xs font-medium leading-relaxed italic max-w-2xl">
              "Based on our {result.repository_id ? 'repo' : '2.4-stable'} analysis, the {featureTitle} represents the highest risk but also the highest return on performance stability."
            </p>
          </div>
        </div>
        <button className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-lg font-bold text-sm tracking-wide shadow-lg hover:shadow-primary/30 transition-shadow">
          Initiate Refactor
        </button>
      </section>
    </Layout>
  );
}
