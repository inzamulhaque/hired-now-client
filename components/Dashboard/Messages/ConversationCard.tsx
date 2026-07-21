"use client";

import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import { Check, CheckCheck, Circle } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { TConversation } from "@/types";

type Props = {
  conversation: TConversation;

  active?: boolean;

  onClick?: () => void;
};

const ConversationCard = ({ conversation, active = false, onClick }: Props) => {
  const { freelancer, lastMessage, unreadCount } = conversation;

  return (
    <motion.button
      layout
      whileHover={{
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={onClick}
      className={cn(
        `
        group
        relative
        flex
        w-full
        items-start
        gap-4
        rounded-2xl
        border
        p-4
        text-left
        transition-all
        duration-200
        `,
        active
          ? "border-primary bg-primary/10 shadow-md"
          : "border-border bg-card hover:border-primary/30 hover:bg-muted/40",
      )}
    >
      {/* Avatar */}

      <div className="relative shrink-0">
        <Avatar className="h-14 w-14 border-2 border-background shadow">
          <AvatarImage src={freelancer.image} />

          <AvatarFallback className="font-semibold">
            {freelancer.name.charAt(0)}
          </AvatarFallback>
        </Avatar>

        {freelancer.isOnline && (
          <span
            className="
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
              bg-emerald-500
            "
          >
            <Circle className="h-2 w-2 fill-white text-white" />
          </span>
        )}
      </div>

      {/* Content */}

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3
              className={cn(
                "truncate font-semibold transition-colors",
                active && "text-primary",
              )}
            >
              {freelancer.name}
            </h3>

            {freelancer.title && (
              <p className="truncate text-xs text-muted-foreground">
                {freelancer.title}
              </p>
            )}
          </div>

          {lastMessage && (
            <span className="shrink-0 text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(lastMessage.createdAt), {
                addSuffix: true,
              })}
            </span>
          )}
        </div>

        <div className="mt-2 flex items-end justify-between gap-3">
          <div className="flex min-w-0 flex-1 items-center gap-2">
            {lastMessage?.isRead ? (
              <CheckCheck className="h-4 w-4 shrink-0 text-sky-500" />
            ) : (
              <Check className="h-4 w-4 shrink-0 text-muted-foreground" />
            )}

            <p className="line-clamp-2 text-sm text-muted-foreground">
              {lastMessage?.content ?? "No messages yet"}
            </p>
          </div>

          {unreadCount > 0 && (
            <Badge
              className="
                min-w-6
                rounded-full
                bg-primary
                px-2
                py-1
                text-xs
                text-primary-foreground
              "
            >
              {unreadCount > 99 ? "99+" : unreadCount}
            </Badge>
          )}
        </div>
      </div>

      {active && (
        <motion.div
          layoutId="activeConversation"
          className="
            absolute
            left-0
            top-3
            bottom-3
            w-1
            rounded-full
            bg-primary
          "
        />
      )}
    </motion.button>
  );
};

export default ConversationCard;
