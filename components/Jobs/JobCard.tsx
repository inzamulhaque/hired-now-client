"use client";

import { motion } from "framer-motion";
import { Clock3, Building2, DollarSign, ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type JobCardProps = {
  job: {
    id: number;
    title: string;
    employer: string;
    postedAt: string;
    description: string;
    skills: string[];
    budget: string;
    status: "Open" | "Closed";
  };
};

const JobCard = ({ job }: JobCardProps) => {
  return (
    <motion.article
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        group
        rounded-3xl
        border
        bg-background/70
        p-6
        shadow-sm
        backdrop-blur-xl
        transition-all
        hover:border-primary/30
        hover:shadow-xl
      "
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold">{job.title}</h3>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              {job.employer}
            </div>

            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4" />
              {job.postedAt}
            </div>
          </div>
        </div>

        <Badge
          variant="secondary"
          className="
            rounded-full
            bg-green-500/10
            text-green-600
            dark:text-green-400
          "
        >
          {job.status}
        </Badge>
      </div>

      <p className="mt-5 line-clamp-3 text-muted-foreground">
        {job.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            className="
              rounded-full
              bg-primary/5
              px-3
              py-1
            "
          >
            {skill}
          </Badge>
        ))}
      </div>

      <div
        className="
          mt-6
          flex
          flex-col
          gap-4
          border-t
          pt-5
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-primary" />

          <span className="font-semibold">{job.budget}</span>
        </div>

        <Button className="group/button">
          View Details
          <ArrowRight
            className="
              ml-2
              h-4
              w-4
              transition-transform
              group-hover/button:translate-x-1
            "
          />
        </Button>
      </div>
    </motion.article>
  );
};

export default JobCard;
