"use client";

import { Loader2, Trash2 } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  jobTitle: string;

  isLoading?: boolean;

  onDelete: () => void;
};

const DeleteJobDialog = ({
  open,
  onOpenChange,
  jobTitle,
  isLoading = false,
  onDelete,
}: Props) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="rounded-3xl">
        <AlertDialogHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">
            <Trash2 className="h-8 w-8 text-red-600" />
          </div>

          <AlertDialogTitle className="text-center text-2xl">
            Delete Job
          </AlertDialogTitle>

          <AlertDialogDescription className="text-center leading-7">
            Are you sure you want to delete
            <span className="mx-1 font-semibold text-foreground">
              {jobTitle}
            </span>
            ?
            <br />
            This action cannot be undone and all applications related to this
            job may become inaccessible.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="mt-4 flex-col-reverse gap-3 sm:flex-row">
          <AlertDialogCancel disabled={isLoading} className="rounded-xl">
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            disabled={isLoading}
            onClick={(e) => {
              e.preventDefault();
              onDelete();
            }}
            className="
              rounded-xl
              bg-red-600
              hover:bg-red-700
            "
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              <>
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Job
              </>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteJobDialog;
