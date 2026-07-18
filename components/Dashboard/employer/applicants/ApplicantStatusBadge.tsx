"use client";

import { motion } from "framer-motion";
import { Brain, CheckCircle2, Clock3, UserCheck, XCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { EApplicationStatus } from "@/types";

type Props = {
  status: EApplicationStatus;
};

const statusConfig = {
  [EApplicationStatus.PENDING]: {
    label: "Pending",
    icon: Clock3,
    className:
      "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400",
  },

  [EApplicationStatus.REVIEWED]: {
    label: "Reviewed",
    icon: Brain,
    className: "bg-sky-500/10 text-sky-600 border-sky-500/20 dark:text-sky-400",
  },

  [EApplicationStatus.SHORTLISTED]: {
    label: "Shortlisted",
    icon: UserCheck,
    className:
      "bg-violet-500/10 text-violet-600 border-violet-500/20 dark:text-violet-400",
  },

  [EApplicationStatus.HIRED]: {
    label: "Hired",
    icon: CheckCircle2,
    className:
      "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400",
  },

  [EApplicationStatus.REJECTED]: {
    label: "Rejected",
    icon: XCircle,
    className: "bg-red-500/10 text-red-600 border-red-500/20 dark:text-red-400",
  },
};

const ApplicantStatusBadge = ({ status }: Props) => {
  const config = statusConfig[status];

  const Icon = config.icon;

  return (
    <motion.div
      whileHover={{
        scale: 1.04,
      }}
    >
      <Badge
        className={`
          rounded-full
          border
          px-3
          py-1
          font-medium
          ${config.className}
        `}
      >
        <Icon className="mr-1 h-3.5 w-3.5" />

        {config.label}
      </Badge>
    </motion.div>
  );
};

export default ApplicantStatusBadge;
