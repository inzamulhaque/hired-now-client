"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";

type DashboardSidebarProps = {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  children: React.ReactNode;
};

const DashboardSidebar = ({
  collapsed,
  setCollapsed,
  children,
}: DashboardSidebarProps) => {
  return (
    <motion.aside
      animate={{
        width: collapsed ? 90 : 280,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        hidden
        md:flex
        h-screen
        sticky
        top-0
        border-r
        bg-background/95
        backdrop-blur-xl
        flex-col
        overflow-hidden
      "
    >
      {/* Header */}

      <div className="relative border-b px-4 py-5">
        <SidebarHeader collapsed={collapsed} />

        <Button
          size="icon"
          variant="ghost"
          onClick={() => setCollapsed(!collapsed)}
          className="
            absolute
            right-3
            top-5
            h-8
            w-8
          "
        >
          {collapsed ? (
            <PanelLeftOpen className="h-4 w-4" />
          ) : (
            <PanelLeftClose className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Menu */}

      <ScrollArea className="flex-1 px-3 py-5">
        <nav className="space-y-2">{children}</nav>
      </ScrollArea>

      {/* Footer */}

      <div className="border-t">
        <SidebarFooter collapsed={collapsed} />
      </div>
    </motion.aside>
  );
};

export default DashboardSidebar;
