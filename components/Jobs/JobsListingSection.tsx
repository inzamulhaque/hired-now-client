"use client";

import { motion } from "framer-motion";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

import JobCard from "./JobCard";

const jobs = [
  {
    id: 1,
    title: "Senior Next.js Developer",
    employer: "TechFlow Ltd.",
    postedAt: "Posted 2 hours ago",
    description:
      "We are looking for an experienced Next.js developer to build scalable SaaS applications using React, TypeScript and Prisma.",
    skills: ["React", "Next.js", "TypeScript", "Prisma"],
    budget: "$500 Fixed",
    status: "Open" as const,
  },
  {
    id: 2,
    title: "UI/UX Designer",
    employer: "Creative Studio",
    postedAt: "Posted 5 hours ago",
    description:
      "Design beautiful dashboards and mobile experiences for modern startups and SaaS products.",
    skills: ["Figma", "UI Design", "Wireframing"],
    budget: "$20/hr",
    status: "Open" as const,
  },
];

const JobsListingSection = () => {
  return (
    <section className="py-20">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div>
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
            className="
                mb-8
                flex
                items-center
                justify-between
              "
          >
            <div>
              <h2 className="text-2xl font-bold">Available Jobs</h2>

              <p className="text-muted-foreground">{jobs.length} jobs found</p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsListingSection;
