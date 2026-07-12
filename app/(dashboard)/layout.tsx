"use client";

import DashboardSidebar from "@/components/Dashboard/DashboardSidebar/DashboardSidebar";
import DashboardTopbar from "@/components/Dashboard/DashboardTopbar";

import { useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="flex min-h-screen w-full">
        <DashboardSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="w-full">
          <DashboardTopbar onMenuClick={() => setMobileOpen(true)} />

          <div className="md:mx-2 lg:mx-3">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
