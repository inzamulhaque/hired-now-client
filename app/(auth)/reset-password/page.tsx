"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";

import {
  ArrowLeft,
  ArrowRight,
  LockKeyhole,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

import HNForm from "@/components/shared/form/HNForm";
import HNInput from "@/components/shared/form/HNInput";

import { Button } from "@/components/ui/button";

import { resetPasswordSchema } from "@/schemas/reset-password.validation";

const page = () => {
  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container max-w-[1200px] mx-auto flex min-h-screen items-center justify-center px-4 py-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="w-ful"
        >
          <div
            className="
              rounded-[32px]
              border
              bg-background/80
              p-6
              shadow-xl
              backdrop-blur-xl
              md:p-10
            "
          >
            <div className="flex justify-center">
              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-3xl
                  bg-gradient-to-r
                  from-blue-600
                  to-violet-600
                  text-white
                  shadow-lg
                "
              >
                <LockKeyhole className="h-10 w-10" />
              </div>
            </div>

            <div className="block lg:flex md:items-center md:justify-between overflow-hidden gap-7">
              <div className="lg:min-w-[400px]">
                <div className="mt-8 text-center">
                  <h1 className="text-3xl font-bold">Reset Password</h1>

                  <p className="mt-4 text-muted-foreground">
                    Create a new secure password for your HiredNow account.
                  </p>
                </div>

                <div
                  className="
                mt-8
                rounded-2xl
                border
                bg-primary/5
                p-5
              "
                >
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-primary" />

                    <h3 className="font-semibold">Password Requirements</h3>
                  </div>

                  <div className="mt-5 space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Minimum 6 characters
                    </div>

                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      One uppercase letter
                    </div>

                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      One lowercase letter
                    </div>

                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      One number
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:min-w-[400px]">
                <HNForm
                  submit={handleSubmit}
                  resolver={zodResolver(resetPasswordSchema)}
                  defaultValues={{
                    password: "",
                    confirmPassword: "",
                  }}
                >
                  <div className="mt-8 space-y-6">
                    <HNInput
                      type="password"
                      name="password"
                      label="New Password"
                      required
                      placeholder="••••••••"
                    />

                    <HNInput
                      type="password"
                      name="confirmPassword"
                      label="Confirm Password"
                      required
                      placeholder="••••••••"
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="
                    group
                    w-full
                    bg-gradient-to-r
                    from-blue-600
                    to-violet-600
                    text-white
                    shadow-lg
                    hover:shadow-xl
                  "
                    >
                      Update Password
                      <ArrowRight
                        className="
                      ml-2
                      h-4
                      w-4
                      transition-transform
                      group-hover:translate-x-1"
                      />
                    </Button>
                  </div>
                </HNForm>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/signin"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-primary
                  transition-opacity
                  hover:opacity-80
                "
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Sign In
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default page;
