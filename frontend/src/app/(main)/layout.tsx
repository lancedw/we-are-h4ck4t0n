'use client'

import React from 'react'
import Header from './[pageId]/components/header';
import SideNav from './[pageId]/components/sideNav';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 bg-stone-50 h-screen overflow-y-auto">
        <Header />
        <div className="max-w-[1500px] mx-auto p-3 w-full">{children}</div>
      </div>
      <SideNav />
    </div>
  );
}
