"use client";

import { MoreHorizontal } from "lucide-react";
import Link from "next/link";

import { Copy, Edit, Eye, Share2, Trash2, Archive, Lock } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

type Props = {
  jobId: string;

  onDelete?: () => void;

  onArchive?: () => void;

  onClose?: () => void;

  onDuplicate?: () => void;
};

const JobActions = ({
  jobId,
  onDelete,
  onArchive,
  onClose,
  onDuplicate,
}: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-xl">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 rounded-2xl">
        <DropdownMenuItem asChild>
          <Link href={`/dashboard/employer/jobs/${jobId}`}>
            <Eye className="mr-2 h-4 w-4" />
            View Job
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href={`/dashboard/employer/jobs/edit/${jobId}`}>
            <Edit className="mr-2 h-4 w-4" />
            Edit Job
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={onDuplicate}>
          <Copy className="mr-2 h-4 w-4" />
          Duplicate
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Share2 className="mr-2 h-4 w-4" />
          Share Job
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={onClose}>
          <Lock className="mr-2 h-4 w-4" />
          Close Job
        </DropdownMenuItem>

        <DropdownMenuItem onClick={onArchive}>
          <Archive className="mr-2 h-4 w-4" />
          Archive
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={onDelete}
          className="text-red-600 focus:text-red-600"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete Job
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default JobActions;
