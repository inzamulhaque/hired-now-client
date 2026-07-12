"use client";

import DashboardSidebar from "@/components/Dashboard/DashboardSidebar/DashboardSidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="w-full">
          <div className="container mx-auto md:mx-1">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
