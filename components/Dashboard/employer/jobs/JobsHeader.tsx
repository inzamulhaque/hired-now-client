"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, Plus, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type JobsHeaderProps = {
  totalJobs?: number;
};

const JobsHeader = ({ totalJobs = 12 }: JobsHeaderProps) => {
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
        duration: 0.45,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        bg-card
        shadow-sm
      "
    >
      {/* Gradient Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600" />

      {/* Decorative Blur */}

      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      {/* Grid Pattern */}

      <div
        className="
          absolute
          inset-0
          opacity-10
          [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />

      {/* Content */}

      <div className="relative z-10 flex flex-col gap-8 p-6 text-white lg:flex-row lg:items-center lg:justify-between lg:p-10">
        {/* Left */}

        <div className="max-w-2xl">
          <Badge className="border-white/20 bg-white/15 text-white backdrop-blur-md hover:bg-white/20">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            Employer Dashboard
          </Badge>

          <h1 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            Manage Your Jobs
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-blue-100 md:text-lg">
            View, edit, manage, and monitor all your active job postings from
            one place. Keep track of applications and hire the right freelancers
            faster.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Badge className="rounded-full border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur">
              <BriefcaseBusiness className="mr-2 h-4 w-4" />
              {totalJobs} Active Jobs
            </Badge>

            <Badge className="rounded-full border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur">
              Hiring Dashboard
            </Badge>
          </div>
        </div>

        {/* Right */}

        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="flex shrink-0"
        >
          <Button
            asChild
            size="lg"
            className="
              h-14
              rounded-2xl
              bg-white
              px-8
              text-blue-700
              shadow-xl
              transition-all
              hover:bg-white/90
            "
          >
            <Link href="/dashboard/jobs/create">
              <Plus className="mr-2 h-5 w-5" />
              Create New Job
              <ArrowRight className="ml-3 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default JobsHeader;
