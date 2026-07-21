"use client";

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {
  count?: number;
};

function SkeletonItem() {
  return (
    <Card
      className="
        rounded-2xl
        border
        bg-card
        p-4
        shadow-sm
      "
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <Skeleton className="h-14 w-14 rounded-full" />

        <div className="min-w-0 flex-1">
          {/* Name + Time */}
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-2">
              <Skeleton className="h-4 w-32 rounded-md" />
              <Skeleton className="h-3 w-24 rounded-md" />
            </div>

            <Skeleton className="h-3 w-10 rounded-md" />
          </div>

          {/* Last Message */}
          <div className="mt-4 space-y-2">
            <Skeleton className="h-3 w-full rounded-md" />
            <Skeleton className="h-3 w-4/5 rounded-md" />
          </div>

          {/* Bottom */}
          <div className="mt-4 flex items-center justify-between">
            <Skeleton className="h-5 w-16 rounded-full" />

            <Skeleton className="h-6 w-6 rounded-full" />
          </div>
        </div>
      </div>
    </Card>
  );
}

const ConversationSkeleton = ({ count = 8 }: Props) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonItem key={index} />
      ))}
    </div>
  );
};

export default ConversationSkeleton;
