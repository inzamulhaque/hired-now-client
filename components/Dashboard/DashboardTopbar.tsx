"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

import { Bell, ChevronRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/shared/ThemeToggle";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DashboardTopbarProps {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}

const DashboardTopbar = ({ collapsed, setCollapsed }: DashboardTopbarProps) => {
  const pathname = usePathname();

  const breadcrumbs = pathname.split("/").filter(Boolean);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-40 mb-2 border-b bg-background/80 backdrop-blur-xl"
    >
      <div className="flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Left */}
        <div className="flex items-center gap-4">
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setCollapsed((prev) => !prev)}
            aria-label={collapsed ? "Open sidebar" : "Close sidebar"}
          >
            <motion.div
              initial={false}
              animate={{ rotate: collapsed ? 0 : 180 }}
              transition={{ duration: 0.2 }}
            >
              {collapsed ? (
                <Menu className="h-5 w-5" />
              ) : (
                <X className="h-5 w-5" />
              )}
            </motion.div>
          </Button>

          <nav className="hidden items-center gap-2 text-sm md:flex">
            {breadcrumbs.slice(1).map((item, index) => (
              <div key={item} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />

                <span
                  className={
                    index === breadcrumbs.length - 2
                      ? "font-medium capitalize"
                      : "text-muted-foreground capitalize"
                  }
                >
                  {item.replace(/-/g, " ")}
                </span>
              </div>
            ))}
          </nav>
        </div>

        {/* Right */}
        {collapsed && (
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Button
              size="icon"
              variant="ghost"
              className="relative"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="rounded-full focus:outline-none"
                  aria-label="Open user menu"
                >
                  <Avatar className="h-10 w-10 cursor-pointer">
                    <AvatarImage src="" alt="User Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>

                <DropdownMenuItem>Settings</DropdownMenuItem>

                <DropdownMenuItem className="text-red-500 focus:text-red-500">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default DashboardTopbar;
