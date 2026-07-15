"use client";

import { AnimatePresence, motion } from "framer-motion";

import { TJob } from "@/types";

import EmptyJobs from "./EmptyJobs";
import JobCard from "./JobCard";
import JobCardSkeleton from "./JobCardSkeleton";

type Props = {
  jobs?: TJob[];

  loading?: boolean;
};

const JobsGrid = ({ jobs = [], loading = false }: Props) => {
  if (loading) {
    return (
      <div className="grid gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <JobCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!jobs.length) {
    return <EmptyJobs />;
  }

  return (
    <motion.div layout className="grid gap-6 my-4">
      <AnimatePresence mode="popLayout">
        {jobs.map((job) => (
          <motion.div
            key={job.id}
            layout
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <JobCard job={job} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default JobsGrid;
