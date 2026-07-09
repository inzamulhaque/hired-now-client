"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";

import HNForm from "@/components/shared/form/HNForm";
import HNInput from "@/components/shared/form/HNInput";

import { Button } from "@/components/ui/button";

import { resetPasswordSchema } from "@/schemas/reset-password.validation";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const page = () => {
  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  const passwordRequirements = [
    "Minimum 8 characters",
    "One uppercase letter",
    "One lowercase letter",
    "One number",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="container max-w-[1200px] mx-auto flex min-h-screen items-center px-4 py-10">
        <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex flex-col justify-center"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-xl">
                <LockKeyhole className="h-10 w-10" />
              </div>

              <div>
                <h2 className="text-3xl font-bold">HiredNow</h2>

                <p className="text-muted-foreground">AI Hiring Platform</p>
              </div>
            </div>

            <div className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-primary" />
              Secure Account Recovery
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight">
              Create a
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                New Password
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Protect your HiredNow account with a strong password. Make sure
              it's unique and difficult to guess.
            </p>

            <div className="mt-12 space-y-5">
              {[
                "256-bit encrypted authentication",
                "Secure password storage",
                "Industry-standard account protection",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border bg-background/60 p-4 backdrop-blur"
                >
                  <div className="rounded-xl bg-primary/10 p-2">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>

                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <div className="w-full rounded-[32px] border bg-background/80 p-6 shadow-2xl backdrop-blur-xl md:p-10">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg lg:hidden">
                  <LockKeyhole className="h-10 w-10" />
                </div>

                <h2 className="mt-6 text-3xl font-bold">Reset Password</h2>

                <p className="mt-3 text-muted-foreground">
                  Enter your new password below to regain access to your
                  account.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border bg-primary/5 p-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary" />

                  <h3 className="font-semibold">Password Requirements</h3>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {passwordRequirements.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />

                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

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
                    placeholder="Enter new password"
                  />

                  <HNInput
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                    required
                    placeholder="Confirm new password"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="group w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg hover:shadow-xl"
                  >
                    Update Password
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </HNForm>

              <div className="mt-8 text-center">
                <Link
                  href="/signin"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Sign In
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default page;
