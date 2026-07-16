"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Sparkles,
  Users,
  UserPlus,
  BriefcaseBusiness,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ApplicantsHeaderProps = {
  totalApplicants?: number;
  totalJobs?: number;
};

const ApplicantsHeader = ({
  totalApplicants = 84,
  totalJobs = 12,
}: ApplicantsHeaderProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        bg-card
        shadow-sm
      "
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-700" />

      {/* Blur */}

      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -right-28 -bottom-28 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

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

      {/* Content */}

      <div className="relative z-10 flex flex-col gap-10 p-6 text-white lg:flex-row lg:items-center lg:justify-between lg:p-10">
        {/* Left */}

        <div className="max-w-3xl">
          <Badge className="border-white/20 bg-white/15 text-white backdrop-blur-md hover:bg-white/20">
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            Employer Dashboard
          </Badge>

          <h1 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
            Manage Applicants
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100 md:text-lg">
            Review freelancer applications, compare candidates, communicate in
            real-time, and hire the best talent faster with AI-powered insights.
          </p>

          {/* Stats */}

          <div className="mt-8 flex flex-wrap gap-3">
            <Badge className="rounded-full border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur">
              <Users className="mr-2 h-4 w-4" />
              {totalApplicants} Applicants
            </Badge>

            <Badge className="rounded-full border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur">
              <BriefcaseBusiness className="mr-2 h-4 w-4" />
              {totalJobs} Active Jobs
            </Badge>

            <Badge className="rounded-full border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur">
              AI Candidate Matching
            </Badge>
          </div>
        </div>

        {/* Right */}

        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              variant="secondary"
              size="lg"
              className="
                h-14
                w-full
                rounded-2xl
                border-white/20
                bg-white/15
                px-6
                text-white
                backdrop-blur-md
                hover:bg-white/20
                sm:w-auto
              "
            >
              <Download className="mr-2 h-5 w-5" />
              Export CSV
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              asChild
              size="lg"
              className="
                h-14
                w-full
                rounded-2xl
                bg-white
                px-7
                text-blue-700
                shadow-xl
                hover:bg-white/90
                sm:w-auto
              "
            >
              <Link href="/jobs">
                <UserPlus className="mr-2 h-5 w-5" />
                Browse Jobs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ApplicantsHeader;
