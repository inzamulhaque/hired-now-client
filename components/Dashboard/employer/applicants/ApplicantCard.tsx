"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Brain,
  DollarSign,
  Eye,
  MessageCircle,
  UserCheck,
  BriefcaseBusiness,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { TJobApplication } from "@/types";
import ApplicantActions from "./ApplicantActions";
import ApplicantStatusBadge from "./ApplicantStatusBadge";

type Props = {
  application: TJobApplication;

  freelancer: {
    id: string;
    name: string;
    image?: string;
    title: string;
    skills: string[];
  };

  jobTitle: string;
};

const ApplicantCard = ({ application, freelancer, jobTitle }: Props) => {
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
        y: -5,
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
          bg-card/80
          backdrop-blur
          transition-all
          hover:border-primary/30
          hover:shadow-xl
        "
      >
        <CardContent className="p-6">
          {/* Top */}

          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <Avatar className="h-14 w-14 border">
                <AvatarImage src={freelancer.image} />

                <AvatarFallback>{freelancer.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div>
                <h3
                  className="
                    text-lg
                    font-bold
                    transition-colors
                    group-hover:text-primary
                  "
                >
                  {freelancer.name}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {freelancer.title}
                </p>
              </div>
            </div>

            <ApplicantActions applicationId={application.id} />
          </div>

          {/* Applied */}

          <div className="mt-6">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Applied For
            </p>

            <div className="mt-2 flex items-center gap-2">
              <BriefcaseBusiness className="h-4 w-4 text-primary" />

              <span className="font-semibold">{jobTitle}</span>
            </div>
          </div>

          {/* Status */}

          <div className="mt-5 flex flex-wrap gap-2">
            <ApplicantStatusBadge status={application.status} />

            {application.aiMatchScore && (
              <Badge
                className="
                  border-violet-500/20
                  bg-violet-500/10
                  text-violet-600
                "
              >
                <Brain className="mr-1 h-3.5 w-3.5" />
                {application.aiMatchScore}% Match
              </Badge>
            )}
          </div>

          {/* Cover */}

          <p
            className="
              mt-5
              line-clamp-3
              text-sm
              leading-7
              text-muted-foreground
            "
          >
            {application.coverNote}
          </p>

          {/* Skills */}

          <div className="mt-5 flex flex-wrap gap-2">
            {freelancer.skills.slice(0, 5).map((skill) => (
              <Badge key={skill} variant="secondary" className="rounded-full">
                {skill}
              </Badge>
            ))}
          </div>

          {/* Stats */}

          <div className="mt-6 grid grid-cols-2 gap-4 border-y py-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-green-500/10 p-2">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>

              <div>
                <p className="text-xs text-muted-foreground">Proposed Budget</p>

                <h4 className="font-semibold">${application.proposedBudget}</h4>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-violet-500/10 p-2">
                <Brain className="h-5 w-5 text-violet-600" />
              </div>

              <div>
                <p className="text-xs text-muted-foreground">AI Match</p>

                <h4 className="font-semibold">
                  {application.aiMatchScore ?? "--"}%
                </h4>
              </div>
            </div>
          </div>

          {/* Footer */}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="flex-1">
              <Link href={`/dashboard/employer/applicants/${application.id}`}>
                <Eye className="mr-2 h-4 w-4" />
                View
              </Link>
            </Button>

            <Button variant="outline" className="flex-1">
              <MessageCircle className="mr-2 h-4 w-4" />
              Message
            </Button>

            <Button variant="secondary" className="flex-1">
              <UserCheck className="mr-2 h-4 w-4" />
              Hire
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ApplicantCard;
