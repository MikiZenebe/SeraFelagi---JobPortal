import React from "react";
import SidebarRoutes from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="h-full border border-r flex flex-col overflow-y-auto bg-white">
      <div className="p-6 text-xl font-bold bg-gradient-to-r from-blue-600 via-blue-800 to-blue-400 text-transparent bg-clip-text">
        Jolent Seeker
      </div>

      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
