"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  DollarSign,
  MessageSquareMore,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Active Jobs",
    value: 18,
    suffix: "",
    icon: BriefcaseBusiness,
    gradient: "from-blue-500 to-cyan-500",
    bg: "from-blue-500/10 to-cyan-500/10",
    change: "+12%",
    description: "3 new jobs this week",
  },
  {
    title: "Applications",
    value: 248,
    suffix: "",
    icon: Users,
    gradient: "from-violet-500 to-fuchsia-500",
    bg: "from-violet-500/10 to-fuchsia-500/10",
    change: "+28%",
    description: "42 pending reviews",
  },
  {
    title: "Messages",
    value: 31,
    suffix: "",
    icon: MessageSquareMore,
    gradient: "from-emerald-500 to-teal-500",
    bg: "from-emerald-500/10 to-teal-500/10",
    change: "+9%",
    description: "8 unread conversations",
  },
  {
    title: "Total Spent",
    value: 12850,
    prefix: "$",
    suffix: "",
    icon: DollarSign,
    gradient: "from-amber-500 to-orange-500",
    bg: "from-amber-500/10 to-orange-500/10",
    change: "+18%",
    description: "Across all completed hires",
  },
];

const StatsCards = () => {
  return (
    <section className="mt-8">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.45,
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                bg-card
                p-6
                shadow-sm
                transition-all
                hover:shadow-xl
              "
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.bg} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-r ${stat.gradient} opacity-10 blur-3xl`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div
                    className={`
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-r
                      ${stat.gradient}
                      text-white
                      shadow-lg
                    `}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-600 dark:text-green-400">
                    <ArrowUpRight className="h-3 w-3" />
                    {stat.change}
                  </div>
                </div>

                <p className="mt-6 text-sm text-muted-foreground">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-4xl font-bold tracking-tight">
                  {stat.prefix}

                  <CountUp end={stat.value} duration={2} separator="," />

                  {stat.suffix}
                </h2>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>

                  <div
                    className={`
                      h-2
                      w-16
                      rounded-full
                      bg-gradient-to-r
                      ${stat.gradient}
                    `}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsCards;
