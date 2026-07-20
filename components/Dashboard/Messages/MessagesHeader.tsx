"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  MailOpen,
  Users,
  Sparkles,
  Filter,
  MessageCirclePlus,
  RefreshCcw,
  Search,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type MessagesHeaderProps = {
  totalConversations?: number;
  unreadMessages?: number;
  onlineFreelancers?: number;

  search?: string;
  onSearch?: (value: string) => void;

  onRefresh?: () => void;
  onNewMessage?: () => void;
  onFilter?: () => void;
};

const MessagesHeader = ({
  totalConversations = 128,
  unreadMessages = 12,
  onlineFreelancers = 36,

  search = "",
  onSearch,
  onRefresh,
  onNewMessage,
  onFilter,
}: MessagesHeaderProps) => {
  const stats = [
    {
      icon: MessageSquare,
      value: totalConversations,
      label: "Conversations",
    },
    {
      icon: MailOpen,
      value: unreadMessages,
      label: "Unread",
    },
    {
      icon: Users,
      value: onlineFreelancers,
      label: "Online",
    },
  ];

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="relative overflow-hidden rounded-3xl border shadow-sm"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-700" />

      {/* Blur */}

      <div className="absolute -left-28 -top-28 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -right-32 -bottom-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-10
          [background-image:linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      <div className="relative z-10 p-6 md:p-8 lg:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Left */}

          <div className="max-w-3xl">
            <Badge className="border-white/20 bg-white/15 text-white backdrop-blur-md hover:bg-white/20">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              Employer Dashboard
            </Badge>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Messages
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100 md:text-lg">
              Communicate with freelancers in real-time, discuss project
              requirements, review proposals, and build successful
              collaborations—all in one place.
            </p>
          </div>

          {/* Stats */}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:w-auto">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-white/15
                    bg-white/10
                    px-5
                    py-4
                    backdrop-blur-md
                  "
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-white/15 p-3">
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {item.value}
                      </h3>

                      <p className="text-sm text-blue-100">{item.label}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.35,
          }}
          className="
    mt-10
    flex
    flex-col
    gap-4
    lg:flex-row
    lg:items-center
    lg:justify-between
  "
        >
          {/* Search */}

          <div className="relative w-full lg:max-w-lg">
            <Search
              className="
        absolute
        left-4
        top-1/2
        h-4
        w-4
        -translate-y-1/2
        text-white/70
      "
            />

            <Input
              value={search}
              onChange={(e) => onSearch?.(e.target.value)}
              placeholder="Search conversations..."
              className="
        h-12
        rounded-xl
        border-white/20
        bg-white/10
        pl-11
        text-white
        placeholder:text-white/60
        backdrop-blur-md

        focus-visible:ring-2
        focus-visible:ring-white/30
        focus-visible:border-white/40
      "
            />
          </div>

          {/* Actions */}

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="secondary"
              size="icon"
              onClick={onRefresh}
              className="
                rounded-xl
                border
                border-white/20
                bg-white/10
                text-white
                backdrop-blur-md
                hover:bg-white/20
              "
            >
              <RefreshCcw className="h-4 w-4" />
            </Button>

            <Button
              variant="secondary"
              onClick={onFilter}
              className="
                  rounded-xl
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  backdrop-blur-md
                  hover:bg-white/20
                "
            >
              <Filter className="mr-2 h-4 w-4" />
              Filters
              {unreadMessages > 0 && (
                <Badge
                  className="
                        ml-2
                        rounded-full
                        bg-red-500
                        text-white
                    "
                >
                  {unreadMessages}
                </Badge>
              )}
            </Button>

            <Button
              onClick={onNewMessage}
              className="
                  rounded-xl
                  bg-white
                  px-6
                  text-slate-900
                  hover:bg-slate-100
      "
            >
              <MessageCirclePlus className="mr-2 h-4 w-4" />
              New Message
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MessagesHeader;
