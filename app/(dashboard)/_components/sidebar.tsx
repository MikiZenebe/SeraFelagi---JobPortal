import React from "react";
import SidebarRoutes from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="h-full border border-r flex flex-col overflow-y-auto bg-white">
      <div className="p-6 text-xl font-bold">ስራ ፈላጊ</div>

      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
