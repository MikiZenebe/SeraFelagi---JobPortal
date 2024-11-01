import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      {/*Header */}
      <header>Header</header>

      {/* Sidebar */}
      <div>Sidebar</div>

      <main>{children}</main>
    </div>
  );
}
