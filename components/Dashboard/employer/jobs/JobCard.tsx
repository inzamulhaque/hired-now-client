"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  BriefcaseBusiness,
  DollarSign,
  Eye,
  Pencil,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TJob } from "@/types";
import JobStatusBadge from "./JobStatusBadge";
import JobActions from "./JobActions";
import { useState } from "react";
import DeleteJobDialog from "./DeleteJobDialog";

type Props = {
  job: TJob;
};

const statusStyles = {
  OPEN: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400",

  CLOSED: "bg-red-500/10 text-red-600 border-red-500/20 dark:text-red-400",

  FILLED: "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400",
};

const JobCard = ({ job }: Props) => {
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  const skills =
    typeof job.skillsRequired === "string"
      ? job.skillsRequired.split(",")
      : job.skillsRequired;

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <Card
        className="
          group
          overflow-hidden
          rounded-3xl
          border
          bg-card/70
          backdrop-blur-xl
          transition-all
          hover:border-primary/30
          hover:shadow-xl
        "
      >
        <CardContent className="p-6">
          {/* Top */}

          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary/10
                  "
                >
                  <BriefcaseBusiness className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h2
                    className="
                      text-xl
                      font-bold
                      transition-colors
                      group-hover:text-primary
                    "
                  >
                    {job.title}
                  </h2>

                  <p className="text-sm text-muted-foreground">
                    Job Opportunity
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <JobStatusBadge status={job.status} />

                <Badge variant="secondary">{job.jobType}</Badge>

                {job.aiEnhanced && (
                  <Badge className="border-violet-500/20 bg-violet-500/10 text-violet-600">
                    <Brain className="mr-1 h-3.5 w-3.5" />
                    AI Enhanced
                  </Badge>
                )}
              </div>
            </div>

            <div
              className="
                rounded-xl
                bg-primary/5
                p-2
              "
            >
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
          </div>

          {/* Description */}

          <p
            className="
              mt-6
              line-clamp-2
              leading-7
              text-muted-foreground
            "
          >
            {job.description}
          </p>

          {/* Skills */}

          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="rounded-full px-3 py-1"
              >
                {skill}
              </Badge>
            ))}
          </div>

          {/* Info */}

          <div
            className="
              mt-8
              grid
              gap-4
              border-y
              py-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-green-500/10 p-2">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>

              <div>
                <p className="text-xs text-muted-foreground">Budget</p>

                <h4 className="font-semibold">${Number(job.budget)}</h4>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-500/10 p-2">
                <BriefcaseBusiness className="h-5 w-5 text-blue-600" />
              </div>

              <div>
                <p className="text-xs text-muted-foreground">Job Type</p>

                <h4 className="font-semibold">{job.jobType}</h4>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-violet-500/10 p-2">
                <Brain className="h-5 w-5 text-violet-600" />
              </div>

              <div>
                <p className="text-xs text-muted-foreground">AI Matching</p>

                <h4 className="font-semibold">
                  {job.aiEnhanced ? "Enabled" : "Disabled"}
                </h4>
              </div>
            </div>
          </div>

          {/* Footer */}

          <div
            className="
              mt-6
              flex
              flex-col
              gap-3
              sm:flex-row
            "
          >
            <JobActions
              jobId={job.id}
              onDelete={() => setOpenDelete(true)}
              onArchive={() => console.log("Archive")}
              onClose={() => console.log("Close")}
              onDuplicate={() => console.log("Duplicate")}
            />

            <DeleteJobDialog
              open={openDelete}
              onOpenChange={setOpenDelete}
              jobTitle={job.title}
              onDelete={async () => {
                // await deleteJob(job.id)
                setOpenDelete(false);
              }}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default JobCard;
