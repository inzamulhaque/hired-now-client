"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  collapsed: boolean;
};

const SidebarHeader = ({ collapsed }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="HiredNow"
        width={44}
        height={44}
        className="rounded-xl"
      />

      <AnimatePresence>
        {!collapsed && (
          <motion.div
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
          >
            <h2 className="text-lg font-bold">HiredNow</h2>

            <p className="text-xs text-muted-foreground">AI Hiring Platform</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SidebarHeader;
