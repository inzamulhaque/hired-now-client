"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

const JobsFilters = () => {
  return (
    <aside
      className="
        rounded-3xl
        border
        bg-background/70
        p-6
        backdrop-blur-xl
        lg:sticky
        lg:top-24
      "
    >
      <h3 className="text-lg font-semibold">Filters</h3>

      <div className="mt-8">
        <h4 className="font-medium">Job Type</h4>

        <div className="mt-4 space-y-3">
          <div className="flex items-center gap-3">
            <Checkbox id="fixed" />
            <label htmlFor="fixed">Fixed Price</label>
          </div>

          <div className="flex items-center gap-3">
            <Checkbox id="hourly" />
            <label htmlFor="hourly">Hourly</label>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-medium">Budget</h4>

        <Slider defaultValue={[50]} max={1000} step={50} className="mt-5" />

        <p className="mt-3 text-sm text-muted-foreground">Up to $1,000</p>
      </div>

      <Button variant="outline" className="mt-8 w-full">
        Clear Filters
      </Button>
    </aside>
  );
};

export default JobsFilters;
