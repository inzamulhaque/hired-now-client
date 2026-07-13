"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  CreditCard,
  FileText,
  MessageSquareMore,
  UserPlus,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  {
    id: 1,
    title: "New Job Posted",
    description: "Senior Next.js Developer position has been published.",
    time: "5 min ago",
    icon: BriefcaseBusiness,
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400",
    status: "Published",
  },
  {
    id: 2,
    title: "New Application Received",
    description: "John Anderson applied for Senior Next.js Developer.",
    time: "18 min ago",
    icon: UserPlus,
    color:
      "bg-violet-500/10 text-violet-600 border-violet-500/20 dark:text-violet-400",
    status: "New",
  },
  {
    id: 3,
    title: "Interview Scheduled",
    description: "Interview scheduled with Sarah Wilson.",
    time: "1 hour ago",
    icon: MessageSquareMore,
    color:
      "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400",
    status: "Scheduled",
  },
  {
    id: 4,
    title: "Payment Completed",
    description: "Stripe payment successfully sent to David Lee.",
    time: "Yesterday",
    icon: CreditCard,
    color:
      "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400",
    status: "Completed",
  },
  {
    id: 5,
    title: "Contract Signed",
    description: "Freelancer accepted the project agreement.",
    time: "2 days ago",
    icon: FileText,
    color:
      "bg-green-500/10 text-green-600 border-green-500/20 dark:text-green-400",
    status: "Done",
  },
];

const ActivityTimeline = () => {
  return (
    <Card className="rounded-3xl shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Clock3 className="h-5 w-5 text-primary" />
            Activity Timeline
          </CardTitle>

          <p className="mt-2 text-sm text-muted-foreground">
            Stay updated with your latest hiring activities.
          </p>
        </div>

        <Button asChild variant="ghost" size="sm">
          <Link href="/dashboard/activity">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>

      <CardContent>
        <div className="relative">
          <div className="absolute left-6 top-0 h-full w-px bg-border" />

          <div className="space-y-8">
            {activities.map((activity, index) => {
              const Icon = activity.icon;

              return (
                <motion.div
                  key={activity.id}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    x: 4,
                  }}
                  className="relative flex gap-5"
                >
                  <div
                    className={`
                      relative
                      z-10
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      ${activity.color}
                      bg-background
                    `}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="flex-1 rounded-2xl border bg-card p-5 transition-all hover:shadow-md">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-semibold">{activity.title}</h3>

                      <Badge variant="secondary" className="rounded-full">
                        {activity.status}
                      </Badge>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {activity.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock3 className="h-3.5 w-3.5" />
                      {activity.time}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <Button variant="outline" asChild className="group rounded-full">
            <Link href="/dashboard/activity">
              <CheckCircle2 className="mr-2 h-4 w-4" />
              View Complete Timeline
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default ActivityTimeline;
