"use client";

import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Props = {
  applicationId: string;

  onView?: () => void;

  onMessage?: () => void;

  onShortlist?: () => void;

  onHire?: () => void;

  onReject?: () => void;
};

const ApplicantActions = ({
  onView,
  onMessage,
  onShortlist,
  onHire,
  onReject,
}: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="
            rounded-xl
            transition-all
            hover:bg-primary/10
          "
        >
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-52 rounded-2xl">
        <DropdownMenuItem onClick={onView} className="cursor-pointer">
          View Profile
        </DropdownMenuItem>

        <DropdownMenuItem onClick={onMessage} className="cursor-pointer">
          Message Freelancer
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={onShortlist} className="cursor-pointer">
          Shortlist
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={onHire}
          className="cursor-pointer text-emerald-600 focus:text-emerald-600"
        >
          Hire Applicant
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={onReject}
          className="
            cursor-pointer
            text-red-600
            focus:text-red-600
          "
        >
          Reject Applicant
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ApplicantActions;
