"use client";

import { CheckCircle2, Lock, UserCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EJobStatus } from "@/types";

type Props = {
  status: EJobStatus;
};

const config = {
  OPEN: {
    label: "Open",
    icon: CheckCircle2,
    className:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  CLOSED: {
    label: "Closed",
    icon: Lock,
    className: "border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400",
  },
  FILLED: {
    label: "Filled",
    icon: UserCheck,
    className:
      "border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
} satisfies Record<
  EJobStatus,
  {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    className: string;
  }
>;

const JobStatusBadge = ({ status }: Props) => {
  const item = config[status];
  const Icon = item.icon;

  return (
    <Badge
      variant="outline"
      className={`rounded-full px-3 py-1 ${item.className}`}
    >
      <Icon className="mr-1 h-3.5 w-3.5" />
      {item.label}
    </Badge>
  );
};

export default JobStatusBadge;
