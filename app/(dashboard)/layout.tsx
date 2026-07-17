"use client";

import DashboardSidebar from "@/components/Dashboard/DashboardSidebar/DashboardSidebar";
import DashboardTopbar from "@/components/Dashboard/DashboardTopbar";

import { useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div className="min-h-screen w-full">
        <div className="flex">
          <DashboardSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
          <div className="flex-1 min-w-0">
            <DashboardTopbar
              collapsed={collapsed}
              setCollapsed={setCollapsed}
            />

            <div className="mx-1 md:mx-2 lg:mx-3">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
