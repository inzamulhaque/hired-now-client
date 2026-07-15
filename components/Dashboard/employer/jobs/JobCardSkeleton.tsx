"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const JobCardSkeleton = () => {
  return (
    <Card className="overflow-hidden rounded-3xl border bg-card shadow-sm">
      <CardContent className="space-y-6 p-6">
        {/* Header */}

        <div className="flex justify-between">
          <div className="flex gap-4">
            <Skeleton className="h-12 w-12 rounded-2xl" />

            <div className="space-y-2">
              <Skeleton className="h-5 w-52" />
              <Skeleton className="h-4 w-28" />
            </div>
          </div>

          <Skeleton className="h-10 w-10 rounded-xl" />
        </div>

        {/* Badges */}

        <div className="flex gap-2">
          <Skeleton className="h-7 w-20 rounded-full" />
          <Skeleton className="h-7 w-24 rounded-full" />
          <Skeleton className="h-7 w-28 rounded-full" />
        </div>

        {/* Description */}

        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[90%]" />
        </div>

        {/* Skills */}

        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4].map((item) => (
            <Skeleton key={item} className="h-8 w-24 rounded-full" />
          ))}
        </div>

        {/* Stats */}

        <div className="grid gap-4 border-y py-5 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <Skeleton className="h-11 w-11 rounded-xl" />

              <div className="space-y-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}

        <div className="flex flex-col gap-3 sm:flex-row">
          <Skeleton className="h-11 flex-1 rounded-xl" />
          <Skeleton className="h-11 flex-1 rounded-xl" />
          <Skeleton className="h-11 w-full rounded-xl sm:w-32" />
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCardSkeleton;
