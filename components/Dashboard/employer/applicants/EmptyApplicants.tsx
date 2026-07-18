"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Search,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const EmptyApplicants = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex min-h-[500px] items-center justify-center"
    >
      <div className="relative overflow-hidden rounded-3xl border bg-card p-10 text-center shadow-sm">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-violet-500/5" />

        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative z-10">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-primary/10"
          >
            <Users className="h-12 w-12 text-primary" />
          </motion.div>

          <div className="mt-8 flex justify-center">
            <span className="inline-flex items-center rounded-full border bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="mr-2 h-4 w-4" />
              No Applications Yet
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-bold">Waiting for Applicants</h2>

          <p className="mx-auto mt-4 max-w-lg leading-7 text-muted-foreground">
            You have not received any applications yet. Publish attractive job
            posts and talented freelancers will start applying soon.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="group rounded-xl">
              <Link href="/dashboard/employer/jobs">
                <BriefcaseBusiness className="mr-2 h-5 w-5" />
                View Jobs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button variant="outline" asChild size="lg" className="rounded-xl">
              <Link href="/jobs">
                <Search className="mr-2 h-4 w-4" />
                Browse Marketplace
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EmptyApplicants;
