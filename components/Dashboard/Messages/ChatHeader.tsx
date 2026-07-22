"use client";

import { motion } from "framer-motion";
import { Circle, BriefcaseBusiness } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ChatHeaderProps = {
  freelancer: {
    id: string;
    name: string;
    image?: string;
    title?: string;
    isOnline?: boolean;
    lastSeen?: string;
  };

  job?: {
    id: string;
    title: string;
  };
};

const ChatHeader = ({ freelancer, job }: ChatHeaderProps) => {
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
      transition={{
        duration: 0.3,
      }}
      className="
        sticky
        top-0
        z-20
        border-b
        bg-background/90
        backdrop-blur-xl
      "
    >
      <div className="flex items-center justify-between px-5 py-4">
        {/* Left */}

        <div className="flex min-w-0 items-center gap-4">
          {/* Avatar */}

          <div className="relative">
            <Avatar className="h-14 w-14 border-2 border-background shadow-md">
              <AvatarImage src={freelancer.image} />

              <AvatarFallback className="font-semibold">
                {freelancer.name.charAt(0)}
              </AvatarFallback>
            </Avatar>

            <span
              className={cn(
                `
                  absolute
                  bottom-0
                  right-0
                  flex
                  h-4
                  w-4
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-background
                `,
                freelancer.isOnline ? "bg-emerald-500" : "bg-slate-400",
              )}
            >
              <Circle className="h-2 w-2 fill-white text-white" />
            </span>
          </div>

          {/* User Info */}

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="truncate text-lg font-bold">{freelancer.name}</h2>

              <Badge
                variant="secondary"
                className={cn(
                  "rounded-full",
                  freelancer.isOnline &&
                    "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                )}
              >
                {freelancer.isOnline ? "Online" : "Offline"}
              </Badge>
            </div>

            {freelancer.title && (
              <p className="truncate text-sm text-muted-foreground">
                {freelancer.title}
              </p>
            )}

            {!freelancer.isOnline && freelancer.lastSeen && (
              <p className="mt-1 text-xs text-muted-foreground">
                Last seen {freelancer.lastSeen}
              </p>
            )}

            {job && (
              <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                <BriefcaseBusiness className="h-3.5 w-3.5" />

                <span className="truncate">{job.title}</span>
              </div>
            )}
          </div>
        </div>

        {/* Actions Placeholder */}
        <div className="flex items-center gap-2">{/* Part 3.1B */}</div>
      </div>
    </motion.header>
  );
};

export default ChatHeader;
