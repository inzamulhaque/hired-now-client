"use client";

import DashboardSidebar from "@/components/DashboardSidebar/DashboardSidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div className="flex min-h-screen w-full gap-5">
        <DashboardSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
