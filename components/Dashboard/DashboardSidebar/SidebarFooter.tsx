"use client";

import { AnimatePresence, motion } from "framer-motion";

import { LogOut, Settings } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

type Props = {
  collapsed: boolean;
};

const SidebarFooter = ({ collapsed }: Props) => {
  return (
    <div className="p-4">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>

        <AnimatePresence>
          {!collapsed && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="flex-1"
            >
              <h4 className="text-sm font-semibold">John Doe</h4>

              <p className="text-xs text-muted-foreground">john@example.com</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-5 space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />

          {!collapsed && "Settings"}
        </Button>

        <Button variant="destructive" className="w-full justify-start">
          <LogOut className="mr-2 h-4 w-4" />

          {!collapsed && "Logout"}
        </Button>
      </div>
    </div>
  );
};

export default SidebarFooter;
