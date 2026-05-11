<![CDATA[<div align="center">

# 🌿 Mistletoe — Frontend Dashboard

**AI-Powered Feature Impact Analysis Dashboard**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[Features](#features) · [Architecture](#architecture) · [Quick Start](#quick-start) · [Project Structure](#project-structure) · [Development](#development)

</div>

---

## Overview

Mistletoe Frontend is a modern Single Page Application (SPA) that serves as the interactive dashboard for the Mistletoe AI analysis platform. It provides a seamless interface for engineering teams and product managers to submit feature requests, visualize impact analysis results, manage GitHub repositories, and export professional reports.

Built with **React 19**, **TypeScript**, and a Material 3-inspired dark design system, the dashboard delivers a premium, responsive experience with smooth page transitions and micro-animations.

---

## Features

### 🔐 Authentication
- **GitHub OAuth2** integration with one-click sign-in
- **Automatic token refresh** — transparent JWT lifecycle management with retry logic
- **Auth-aware routing** — pages gracefully degrade to logged-out variants for unauthenticated users
- **Event-driven session sync** — custom DOM events (`AUTH_ERROR_EVENT`) coordinate auth state across the app

### 📊 Dashboard & Analytics
- **Monthly effort trends** — interactive area charts showing projected development hours over time
- **Top impacted areas** — visual breakdown of most-affected system components
- **Repository activity** — analysis distribution across tracked repositories
- **Real-time data** — dashboard analytics fetched with year/month filtering

### 🧠 Feature Analysis
- **Natural language input** — submit feature requests as plain text
- **Tiered results** — view MVP, Balanced, and Comprehensive implementation approaches
- **Impact scoring** — 1-10 scale with risk level, security, and performance assessments
- **Cost estimation** — automatic cost projections based on configurable hourly rates
- **Affected components** — visual breakdown of impacted system areas

### 📂 Repository Management
- **GitHub sync** — fetch and browse all accessible GitHub repositories
- **Repository selection** — track specific repositories for focused analysis
- **Per-repo history** — view analysis history scoped to individual repositories

### 📋 Analysis History
- **Global history** — cursor-based paginated feed of all analyses
- **Saved/bookmarked** — toggle and filter saved analyses for quick access
- **Detail view** — comprehensive analysis result breakdown with all metrics

### 📄 Export & Reports
- **PDF download** — generate and download professional PDF analysis reports
- **GitHub Issue export** — automatically create formatted GitHub Issues from analysis results
- **Export status tracking** — real-time polling of async export job progress

### ⚙️ User Settings
- **Custom hourly rate** — configure developer cost rates for personalized cost estimates
- **Billing overview** — settings and billing management page

---

## Architecture

### Design System

The application uses a **Material 3-inspired dark theme** with a custom design token system:

| Token | Value | Usage |
|:------|:------|:------|
| **Primary** | `#55d8e1` (Teal) | Primary actions, active states, links |
| **Secondary** | `#7dd5d5` | Secondary elements, supporting text |
| **Tertiary** | `#ffb68d` (Warm amber) | Accent, highlights, warnings |
| **Surface** | `#0e141c` | Base background |
| **Surface Container** | `#1a2029` | Elevated surfaces, cards |
| **On Surface** | `#dde3ef` | Primary text color |
| **Error** | `#ffb4ab` | Error states |
| **Headline Font** | Space Grotesk | Headlines, titles |
| **Body Font** | Inter | Body text, labels |

### Routing Architecture

```
<AuthProvider>                          ← Global auth state (React Context)
└── <BrowserRouter>
    └── <AnimatePresence>               ← Page transition animations
        └── <Routes>
            ├── /                       ← Landing Page (redirect if auth'd)
            ├── /auth/callback          ← OAuth callback handler
            │
            ├── [Auth-Aware Routes]     ← Show logged-out variant if not auth'd
            │   ├── /dashboard          ← DashboardPage | DashboardLoggedOutPage
            │   ├── /history            ← AnalysisHistoryPage | HistoryLoggedOutPage
            │   └── /feature            ← FeatureAnalysisPage | FeatureAnalysisLoggedOutPage
            │
            └── [Protected Routes]      ← Require authentication (auto-redirect to login)
                ├── /repos              ← Repository management
                ├── /repo-selector      ← Add new repositories
                ├── /saved              ← Saved/bookmarked analyses
                ├── /analysis/:id       ← Analysis detail view
                └── /settings           ← User settings & billing
```

### API Client Architecture

The API layer (`src/api/`) implements a resilient HTTP client with:

```
┌─────────────────────────────────────────────────────┐
│                    apiFetch<T>()                     │
│                                                     │
│  1. Inject JWT from localStorage                    │
│  2. Execute fetch()                                 │
│  3. If 401 → refreshAccessToken()                   │
│     ├── Success → Retry original request            │
│     └── Failure → Clear tokens → Dispatch event     │
│  4. Validate Content-Type (guard against HTML)      │
│  5. Unwrap { status, data, error } envelope         │
│  6. Return typed data as T                          │
└─────────────────────────────────────────────────────┘

Singleton refresh: concurrent 401s share a single        
refresh promise to prevent token race conditions.        
```

---

## Tech Stack

| Layer | Technology | Version | Purpose |
|:------|:-----------|:--------|:--------|
| **UI Framework** | React | 19.2 | Component-based UI with hooks |
| **Language** | TypeScript | 6.0 | Type-safe development |
| **Build Tool** | Vite | 8.0 | Lightning-fast HMR & builds |
| **Styling** | Tailwind CSS | 3.4 | Utility-first CSS with custom design tokens |
| **Animations** | Framer Motion | 12.x | Page transitions & micro-interactions |
| **Routing** | React Router | 7.x | Declarative routing with protected routes |
| **Charts** | Recharts | 3.8 | Dashboard data visualization |
| **Icons** | Lucide React | 1.11 | Consistent icon set |
| **Utilities** | clsx + tailwind-merge | — | Conditional class composition |

---

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 20+ (LTS recommended)
- [npm](https://www.npmjs.com/) 10+
- Running [Mistletoe Backend](https://github.com/numpyh/mistletoe) on `http://localhost:8090`

### 1. Clone & Install

```bash
git clone https://github.com/numpyh/mistletoe_fe_v2.git
cd mistletoe_fe_v2

npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
```

Edit `.env`:

```env
VITE_API_BASE_URL=http://localhost:8090/api/v1
VITE_AUTH_BASE_URL=http://localhost:8090/auth
```

### 3. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### 4. Build for Production

```bash
npm run build
npm run preview    # Preview production build locally
```

---

## Project Structure

```
src/
├── api/                              ← HTTP client & endpoint definitions
│   ├── client.ts                     ← Core fetch wrapper with JWT management
│   │   ├── getAuthTokens()           ← Read tokens from localStorage
│   │   ├── setAuthTokens()           ← Persist tokens
│   │   ├── clearAuthTokens()         ← Clear on logout/expiry
│   │   ├── refreshAccessToken()      ← Singleton token refresh
│   │   ├── backendLogout()           ← Server-side session invalidation
│   │   └── apiFetch<T>()            ← Generic typed fetch with retry
│   │
│   └── endpoints.ts                  ← Typed API method definitions
│       └── mistletoeApi              ← Namespace for all API calls
│           ├── .getGithubRepos()
│           ├── .getSelectedRepos()
│           ├── .selectRepository()
│           ├── .createAnalysis()
│           ├── .getAnalysis()
│           ├── .getGlobalAnalysisHistory()
│           ├── .toggleSaveAnalysis()
│           ├── .getSavedAnalyses()
│           ├── .exportToGithubIssue()
│           ├── .downloadPdfReport()
│           ├── .getDashboardAnalytics()
│           └── ...
│
├── auth/                             ← Authentication module
│   ├── AuthContext.ts                ← React Context type definition
│   ├── AuthProvider.tsx              ← Context provider (token check, login, logout)
│   └── useAuth.ts                    ← Custom hook for consuming auth state
│
├── components/
│   └── layout/                       ← Shared layout components
│       ├── Layout.tsx                ← Page layout wrapper (SideNav + TopBar + content)
│       ├── SideNav.tsx               ← Sidebar navigation with active route highlighting
│       └── TopBar.tsx                ← Top navigation bar with user menu
│
├── pages/                            ← Route-level page components
│   ├── LandingPagePage.tsx           ← Marketing landing page (unauthenticated)
│   ├── CallbackPage.tsx              ← OAuth callback token handler
│   │
│   ├── DashboardPage.tsx             ← Main dashboard with analytics charts
│   ├── DashboardLoggedOutPage.tsx    ← Dashboard preview for unauthenticated users
│   │
│   ├── FeatureAnalysisPage.tsx       ← Feature request submission form
│   ├── FeatureAnalysisLoggedOutPage.tsx
│   │
│   ├── AnalysisHistoryPage.tsx       ← Global analysis history (cursor-paginated)
│   ├── HistoryLoggedOutPage.tsx      ← History preview page
│   │
│   ├── AnalysisDetailPage.tsx        ← Full analysis result breakdown
│   │                                    (impact score, risks, costs, alternatives,
│   │                                     PDF download, GitHub export)
│   │
│   ├── ReposPage.tsx                 ← Repository management hub
│   ├── ReposActivePage.tsx           ← Active repositories with analysis counts
│   ├── ReposEmptyPage.tsx            ← Empty state for no repositories
│   ├── RepoSelectorPage.tsx          ← GitHub repository picker
│   │
│   ├── SavedPage.tsx                 ← Bookmarked analyses list
│   └── SettingsBillingPage.tsx       ← User settings & billing
│
├── types/
│   └── index.ts                      ← Shared TypeScript interfaces
│       ├── User, UserSettings
│       ├── UserRepository, GithubRepo
│       ├── AnalysisRequest, AnalysisResult
│       ├── AlternativeApproach
│       ├── ExportJob
│       ├── PaginatedResponse<T>
│       └── DashboardAnalytics (MonthlyEffort, ImpactedArea, RepoActivity)
│
├── assets/                           ← Static assets (images, icons)
├── App.tsx                           ← Root component: AuthProvider + Router + Routes
├── App.css                           ← Global styles & animations
├── index.css                         ← Tailwind directives + base resets
└── main.tsx                          ← React DOM entry point
```

---

## Key Implementation Details

### Auth-Aware vs Protected Routes

The application implements two route guard patterns:

```tsx
// Auth-Aware: gracefully shows alternative content
<AuthAwarePage
  loggedIn={DashboardPage}          // Full dashboard for authenticated users
  loggedOut={DashboardLoggedOutPage} // Preview/marketing page for visitors
/>

// Protected: enforces authentication
<ProtectedPage component={ReposPage} /> // Redirects to GitHub login if not auth'd
```

This enables a marketing-friendly approach where visitors can browse certain pages and see preview content before signing up.

### Token Refresh Strategy

The API client implements a **singleton refresh promise** pattern to handle concurrent 401 responses:

```typescript
// Multiple simultaneous 401s share a single refresh call
let refreshPromise: Promise<boolean> | null = null;

export const refreshAccessToken = async (): Promise<boolean> => {
    if (refreshPromise) return refreshPromise; // Reuse in-flight refresh
    // ... execute refresh, then clear promise in finally block
};
```

This prevents token refresh race conditions where multiple API calls might trigger simultaneous refresh requests.

### Animation System

Page transitions use Framer Motion's `AnimatePresence` with route-keyed animations:

```tsx
<AnimatePresence mode="wait">
  <Routes location={location} key={location.pathname}>
    {/* Routes re-mount with exit/enter animations */}
  </Routes>
</AnimatePresence>
```

---

## Development

### Available Scripts

```bash
npm run dev       # Start Vite dev server with HMR (port 5173)
npm run build     # TypeScript check + Vite production build
npm run lint      # Run ESLint across the project
npm run preview   # Preview production build locally
```

### Environment Variables

| Variable | Required | Default | Description |
|:---------|:---------|:--------|:------------|
| `VITE_API_BASE_URL` | No | `http://localhost:8090/api/v1` | Backend API base URL |
| `VITE_AUTH_BASE_URL` | No | `http://localhost:8090/auth` | Backend auth base URL |

### Code Quality

- **TypeScript** — strict mode with full type coverage across API calls, components, and state
- **ESLint** — configured with React Hooks and React Refresh plugins
- **Type-safe API** — all endpoint methods are generically typed with response interfaces

### Design Tokens

Custom design tokens are configured in `tailwind.config.js`, implementing a Material 3-inspired palette. Key utility classes:

```css
/* Backgrounds */
bg-surface              /* #0e141c — base background */
bg-surface-container    /* #1a2029 — elevated cards */
bg-primary              /* #55d8e1 — primary actions */

/* Text */
text-on-surface         /* #dde3ef — primary text */
text-on-surface-variant /* #bbc9ca — secondary text */
text-primary            /* #55d8e1 — links, accents */

/* Typography */
font-headline           /* Space Grotesk — headlines */
font-body               /* Inter — body text */
```

---

## Browser Compatibility

The application targets modern evergreen browsers:

- Chrome/Edge 100+
- Firefox 100+
- Safari 16+

---

## Related Projects

| Repository | Description |
|:-----------|:------------|
| [mistletoe](https://github.com/numpyh/mistletoe) | Backend API — Go, Gin, PostgreSQL, Redis, Gemini AI |

---

## License

This project is proprietary. All rights reserved.
]]>
