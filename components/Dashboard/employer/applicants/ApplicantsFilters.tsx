"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Filter,
  RotateCcw,
  Search,
  SlidersHorizontal,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ApplicantsFiltersProps = {
  search: string;
  onSearchChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;

  job: string;
  onJobChange: (value: string) => void;

  experience: string;
  onExperienceChange: (value: string) => void;

  sort: string;
  onSortChange: (value: string) => void;

  onReset: () => void;

  activeFilters?: number;

  jobs?: {
    id: string;
    title: string;
  }[];
};

const ApplicantsFilters = ({
  search,
  onSearchChange,

  status,
  onStatusChange,

  job,
  onJobChange,

  experience,
  onExperienceChange,

  sort,
  onSortChange,

  onReset,

  activeFilters = 0,

  jobs = [],
}: ApplicantsFiltersProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        rounded-3xl
        border
        bg-card
        p-5
        shadow-sm
      "
    >
      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-primary/10 p-2">
            <Filter className="h-5 w-5 text-primary" />
          </div>

          <div>
            <h3 className="font-semibold">Filters</h3>

            <p className="text-sm text-muted-foreground">
              Find the perfect applicant faster.
            </p>
          </div>
        </div>

        {activeFilters > 0 && (
          <span
            className="
              rounded-full
              bg-primary/10
              px-3
              py-1
              text-xs
              font-medium
              text-primary
            "
          >
            {activeFilters} Active
          </span>
        )}
      </div>

      {/* Filters */}

      <div className="grid gap-4 lg:grid-cols-5">
        {/* Search */}

        <div className="relative lg:col-span-2">
          <Search
            className="
              absolute
              left-3
              top-1/2
              h-4
              w-4
              -translate-y-1/2
              text-muted-foreground
            "
          />

          <Input
            placeholder="Search applicant..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 h-11 rounded-xl"
          />
        </div>

        {/* Status */}

        <Select value={status} onValueChange={onStatusChange}>
          <SelectTrigger className="h-11 rounded-xl">
            <SelectValue placeholder="Status" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="ALL">All Status</SelectItem>

            <SelectItem value="PENDING">Pending</SelectItem>

            <SelectItem value="SHORTLISTED">Shortlisted</SelectItem>

            <SelectItem value="HIRED">Hired</SelectItem>

            <SelectItem value="REJECTED">Rejected</SelectItem>
          </SelectContent>
        </Select>

        {/* Job */}

        <Select value={job} onValueChange={onJobChange}>
          <SelectTrigger className="h-11 rounded-xl">
            <BriefcaseBusiness className="mr-2 h-4 w-4" />

            <SelectValue placeholder="Job" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="ALL">All Jobs</SelectItem>

            {jobs.map((job) => (
              <SelectItem key={job.id} value={job.id}>
                {job.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Experience */}

        <Select value={experience} onValueChange={onExperienceChange}>
          <SelectTrigger className="h-11 rounded-xl">
            <Star className="mr-2 h-4 w-4" />

            <SelectValue placeholder="Experience" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="ALL">All Experience</SelectItem>

            <SelectItem value="0-1">0 - 1 Years</SelectItem>

            <SelectItem value="2-3">2 - 3 Years</SelectItem>

            <SelectItem value="4-5">4 - 5 Years</SelectItem>

            <SelectItem value="5+">5+ Years</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bottom */}

      <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Select value={sort} onValueChange={onSortChange}>
          <SelectTrigger className="h-11 w-full rounded-xl md:w-60">
            <SlidersHorizontal className="mr-2 h-4 w-4" />

            <SelectValue placeholder="Sort By" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>

            <SelectItem value="oldest">Oldest First</SelectItem>

            <SelectItem value="rating">Highest Rating</SelectItem>

            <SelectItem value="experience">Most Experienced</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" onClick={onReset} className="rounded-xl">
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset Filters
        </Button>
      </div>
    </motion.div>
  );
};

export default ApplicantsFilters;
