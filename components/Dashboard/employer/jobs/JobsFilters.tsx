"use client";

import { motion } from "framer-motion";
import {
  ArrowUpDown,
  BriefcaseBusiness,
  RotateCcw,
  Search,
  SlidersHorizontal,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type JobsFiltersProps = {
  search?: string;
  onSearchChange?: (value: string) => void;

  status?: string;
  onStatusChange?: (value: string) => void;

  jobType?: string;
  onJobTypeChange?: (value: string) => void;

  sort?: string;
  onSortChange?: (value: string) => void;

  onReset?: () => void;
};

const JobsFilters = ({
  search = "",
  status = "all",
  jobType = "all",
  sort = "newest",

  onSearchChange,
  onStatusChange,
  onJobTypeChange,
  onSortChange,
  onReset,
}: JobsFiltersProps) => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        mt-8
        rounded-3xl
        border
        bg-card/70
        p-5
        shadow-sm
        backdrop-blur-xl
      "
    >
      {/* Header */}

      <div className="mb-5 flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
          <SlidersHorizontal className="h-5 w-5 text-primary" />
        </div>

        <div>
          <h3 className="font-semibold">Filter Jobs</h3>

          <p className="text-sm text-muted-foreground">
            Search and filter your job listings.
          </p>
        </div>
      </div>

      {/* Filters */}

      <div className="grid gap-4 lg:grid-cols-12">
        {/* Search */}

        <div className="relative lg:col-span-5">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            value={search}
            onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder="Search by title, skill or keyword..."
            className="h-12 rounded-xl pl-11"
          />
        </div>

        {/* Status */}

        <div className="lg:col-span-2">
          <Select value={status} onValueChange={onStatusChange}>
            <SelectTrigger className="h-12 rounded-xl">
              <SelectValue placeholder="Status" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>

              <SelectItem value="open">Open</SelectItem>

              <SelectItem value="draft">Draft</SelectItem>

              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Job Type */}

        <div className="lg:col-span-2">
          <Select value={jobType} onValueChange={onJobTypeChange}>
            <SelectTrigger className="h-12 rounded-xl">
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>

              <SelectItem value="fixed">Fixed Price</SelectItem>

              <SelectItem value="hourly">Hourly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort */}

        <div className="lg:col-span-2">
          <Select value={sort} onValueChange={onSortChange}>
            <SelectTrigger className="h-12 rounded-xl">
              <ArrowUpDown className="mr-2 h-4 w-4" />

              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>

              <SelectItem value="oldest">Oldest</SelectItem>

              <SelectItem value="applications">Applications</SelectItem>

              <SelectItem value="views">Most Viewed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Reset */}

        <div className="lg:col-span-1">
          <Button
            variant="outline"
            onClick={onReset}
            className="h-12 w-full rounded-xl"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Bottom */}

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          <BriefcaseBusiness className="h-4 w-4" />
          Manage Jobs Efficiently
        </div>

        <p className="text-sm text-muted-foreground">
          Quickly search, filter and organize your job postings.
        </p>
      </div>
    </motion.section>
  );
};

export default JobsFilters;
