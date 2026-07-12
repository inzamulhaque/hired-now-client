"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type WelcomeCardProps = {
  name?: string;
};

const WelcomeCard = ({ name = "John" }: WelcomeCardProps) => {
  const hour = new Date().getHours();

  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

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
        duration: 0.5,
      }}
      className="relative overflow-hidden rounded-3xl border bg-background shadow-sm"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600" />

      <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      {/* Content */}

      <div className="relative z-10 flex flex-col gap-10 p-6 text-white lg:flex-row lg:items-center lg:justify-between lg:p-10">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Welcome Back
          </div>

          <h1 className="text-3xl font-bold leading-tight md:text-5xl">
            {greeting},
            <br />
            {name} 👋
          </h1>

          <p className="mt-5 max-w-xl text-base text-blue-100 md:text-lg">
            Manage your hiring pipeline, discover talented freelancers, review
            applications, and hire faster using AI-powered recommendations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-700 hover:bg-white/90"
            >
              <Link href="/dashboard/jobs/create">
                <BriefcaseBusiness className="mr-2 h-5 w-5" />
                Post a Job
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="secondary"
              className="border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20"
            >
              <Link href="/dashboard/freelancers">
                Browse Freelancers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid w-full max-w-sm gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <motion.div
            whileHover={{
              y: -5,
            }}
            className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <CalendarDays className="h-8 w-8 text-white" />

              <span className="text-sm text-blue-100">Today</span>
            </div>

            <h3 className="mt-5 text-xl font-semibold">Stay Productive</h3>

            <p className="mt-2 text-sm text-blue-100">
              Review your latest job applications and continue hiring.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              y: -5,
            }}
            className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <Users className="h-8 w-8 text-white" />

              <span className="text-sm text-blue-100">AI Matching</span>
            </div>

            <h3 className="mt-5 text-xl font-semibold">Find Top Talent</h3>

            <p className="mt-2 text-sm text-blue-100">
              Let AI recommend the best freelancers for your open jobs.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WelcomeCard;
