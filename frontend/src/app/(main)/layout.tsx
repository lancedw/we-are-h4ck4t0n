'use client'

import React from 'react'
import SideNav from "@/app/(main)/components/sideNav";
import Header from "@/app/(main)/components/header";

interface MainLayoutProps {
    children: React.ReactNode
    params: { domain: string }
}

export default function MainLayout({ children, params }: MainLayoutProps) {
    return (
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <Header />
          {children}
        </div>

        <SideNav params={params}>{children}</SideNav>
      </div>
    );
}
