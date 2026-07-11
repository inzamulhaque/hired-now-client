"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TSidebarItem } from "./sidebarItems";

type Props = {
  item: TSidebarItem;
  collapsed: boolean;
};

export default function SidebarMenuItem({ item, collapsed }: Props) {
  const pathname = usePathname();

  const active = pathname === item.href;

  const Icon = item.icon;

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={item.href}
            className={cn(
              "relative flex items-center rounded-xl px-3 py-3 transition-all duration-200",

              active
                ? "bg-primary text-primary-foreground shadow-lg"
                : "hover:bg-muted",
            )}
          >
            {active && (
              <motion.div
                layoutId="sidebar-active"
                className="absolute inset-0 rounded-xl bg-primary"
              />
            )}

            <div className="relative z-10 flex w-full items-center">
              <Icon className="h-5 w-5 shrink-0" />

              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -10,
                    }}
                    className="ml-3 flex-1 font-medium"
                  >
                    {item.title}
                  </motion.span>
                )}
              </AnimatePresence>

              {!collapsed && item.badge && (
                <Badge variant="secondary" className="relative z-10">
                  {item.badge}
                </Badge>
              )}
            </div>
          </Link>
        </TooltipTrigger>

        {collapsed && (
          <TooltipContent side="right">{item.title}</TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
