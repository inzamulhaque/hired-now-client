"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Bell, ChevronRight, Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ThemeToggle from "@/components/shared/ThemeToggle";

type Props = {
  onMenuClick?: () => void;
};

const DashboardTopbar = ({ onMenuClick }: Props) => {
  const pathname = usePathname();

  const breadcrumbs = pathname.split("/").filter(Boolean);

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="
        sticky
        top-0
        z-40
        border-b
        bg-background/80
        backdrop-blur-xl
        mb-2
      "
    >
      <div className="flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-4">
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
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
                  {item.replace("-", " ")}
                </span>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Button size="icon" variant="ghost" className="relative">
            <Bell className="h-5 w-5" />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="rounded-full">
                <Avatar className="h-10 w-10 cursor-pointer">
                  <AvatarImage src="" />

                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>

              <DropdownMenuItem>Settings</DropdownMenuItem>

              <DropdownMenuItem className="text-red-500">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.header>
  );
};

export default DashboardTopbar;
