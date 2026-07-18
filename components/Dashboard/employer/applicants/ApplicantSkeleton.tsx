"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ApplicantSkeleton = () => {
  return (
    <Card className="overflow-hidden rounded-3xl border bg-card shadow-sm">
      <CardContent className="space-y-6 p-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <Skeleton className="h-14 w-14 rounded-full" />

            <div className="space-y-2">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-4 w-28" />
            </div>
          </div>

          <Skeleton className="h-10 w-10 rounded-xl" />
        </div>

        {/* Applied Job */}
        <div className="space-y-2">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-5 w-56" />
        </div>

        {/* Status */}
        <div className="flex gap-2">
          <Skeleton className="h-7 w-24 rounded-full" />
          <Skeleton className="h-7 w-24 rounded-full" />
        </div>

        {/* Cover Note */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[92%]" />
          <Skeleton className="h-4 w-[70%]" />
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <Skeleton key={item} className="h-8 w-20 rounded-full" />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 border-y py-5">
          {[1, 2].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-xl" />

              <div className="space-y-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Skeleton className="h-11 flex-1 rounded-xl" />
          <Skeleton className="h-11 flex-1 rounded-xl" />
          <Skeleton className="h-11 flex-1 rounded-xl" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ApplicantSkeleton;
