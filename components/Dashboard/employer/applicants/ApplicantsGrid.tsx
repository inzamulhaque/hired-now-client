"use client";

import { AnimatePresence, motion } from "framer-motion";

import ApplicantCard from "./ApplicantCard";
import ApplicantSkeleton from "./ApplicantSkeleton";
import EmptyApplicants from "./EmptyApplicants";

import { TApplicant } from "@/types";

type ApplicantsGridProps = {
  applicants: TApplicant[];
  loading?: boolean;
};

const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const ApplicantsGrid = ({
  applicants,
  loading = false,
}: ApplicantsGridProps) => {
  // Loading State
  if (loading) {
    return (
      <div
        className="
          grid
          gap-6
          sm:grid-cols-1
          lg:grid-cols-2
          2xl:grid-cols-3
          my-4
        "
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <ApplicantSkeleton key={index} />
        ))}
      </div>
    );
  }

  // Empty State
  if (!loading && applicants.length === 0) {
    return <EmptyApplicants />;
  }

  // Data State
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      layout
      className="
        grid
        gap-6
        sm:grid-cols-1
        lg:grid-cols-2
        2xl:grid-cols-3
        my-4
      "
    >
      <AnimatePresence mode="popLayout">
        {applicants.map((applicant) => (
          <motion.div
            key={applicant.id}
            variants={itemVariants}
            layout
            exit={{
              opacity: 0,
              scale: 0.95,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <ApplicantCard application={applicant} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ApplicantsGrid;
