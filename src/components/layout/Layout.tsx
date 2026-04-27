import React from 'react';
import SideNav from './SideNav';
import TopBar from './TopBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-surface">
      <SideNav />
      <main className="flex-1 ml-64 overflow-y-auto no-scrollbar h-full bg-surface">
        <TopBar />
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
