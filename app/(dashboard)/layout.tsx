import React from "react";
import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      {/*Header */}
      <header className="h-20 fixed inset-y-0 w-full z-50">
        <Navbar />
      </header>

      {/* Sidebar */}
      <div className="hidden md:flex w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>

      <main>{children}</main>
    </div>
  );
}
