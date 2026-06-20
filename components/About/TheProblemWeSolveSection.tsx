"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Building2,
  UserRound,
  FileSearch,
  Clock3,
  FileText,
  MessageSquareX,
  BadgeAlert,
  SearchX,
} from "lucide-react";

const employerProblems = [
  {
    icon: FileSearch,
    title: "Too Many Unqualified Applications",
    description:
      "Sorting through hundreds of irrelevant applications wastes valuable time and resources.",
  },
  {
    icon: Clock3,
    title: "Time-Consuming Screening",
    description:
      "Finding the right candidate often requires lengthy screening and interview processes.",
  },
  {
    icon: FileText,
    title: "Poor Job Descriptions",
    description:
      "Unclear requirements attract mismatched applicants and slow down hiring decisions.",
  },
];

const freelancerProblems = [
  {
    icon: MessageSquareX,
    title: "Low Response Rates",
    description:
      "Many freelancers send dozens of proposals without receiving meaningful responses.",
  },
  {
    icon: BadgeAlert,
    title: "Difficult To Stand Out",
    description:
      "Talented professionals struggle to differentiate themselves in crowded marketplaces.",
  },
  {
    icon: SearchX,
    title: "Unclear Requirements",
    description:
      "Vague project descriptions make it difficult to understand client expectations.",
  },
];

const TheProblemWeSolveSection = () => {
  return (
    <section className="relative overflow-hidden py-4 lg:py-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
            <AlertTriangle className="h-4 w-4 text-primary" />
            The Problem We Solve
          </div>

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            Hiring Should not Be
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {" "}
              This Hard
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Traditional hiring creates frustration for both employers and
            freelancers. HiredNow bridges the gap with smarter matching and
            better collaboration.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
            }}
            className="
              rounded-3xl
              border
              bg-background/70
              p-8
              backdrop-blur-xl
            "
          >
            <div className="mb-8 flex items-center gap-3">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-blue-600
                  to-violet-600
                  text-white
                "
              >
                <Building2 className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">For Employers</h3>

                <p className="text-muted-foreground">
                  Common hiring challenges
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {employerProblems.map((problem) => {
                const Icon = problem.icon;

                return (
                  <div
                    key={problem.title}
                    className="
                      rounded-2xl
                      border
                      p-5
                      transition-all
                      hover:shadow-md
                    "
                  >
                    <div className="flex gap-4">
                      <div className="mt-1 text-red-500">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h4 className="font-semibold">{problem.title}</h4>

                        <p className="mt-2 text-sm text-muted-foreground">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
            }}
            className="
              rounded-3xl
              border
              bg-background/70
              p-8
              backdrop-blur-xl
            "
          >
            <div className="mb-8 flex items-center gap-3">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-blue-600
                  to-violet-600
                  text-white
                "
              >
                <UserRound className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">For Freelancers</h3>

                <p className="text-muted-foreground">
                  Common career challenges
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {freelancerProblems.map((problem) => {
                const Icon = problem.icon;

                return (
                  <div
                    key={problem.title}
                    className="
                      rounded-2xl
                      border
                      p-5
                      transition-all
                      hover:shadow-md
                    "
                  >
                    <div className="flex gap-4">
                      <div className="mt-1 text-red-500">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h4 className="font-semibold">{problem.title}</h4>

                        <p className="mt-2 text-sm text-muted-foreground">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TheProblemWeSolveSection;
