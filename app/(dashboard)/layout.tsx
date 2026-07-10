"use client";

import DashboardSidebar from "@/components/DashboardSidebar/DashboardSidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <DashboardSidebar collapsed={collapsed} setCollapsed={setCollapsed}>
        <TooltipProvider>Menu Items</TooltipProvider>
      </DashboardSidebar>
      {children}
    </>
  );
};

export default DashboardLayout;
