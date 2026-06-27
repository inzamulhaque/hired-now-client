"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { ArrowRight, Briefcase, Sparkles } from "lucide-react";

import HNForm from "@/components/shared/form/HNForm";
import HNInput from "@/components/shared/form/HNInput";
import { Button } from "@/components/ui/button";
import { signinSchema } from "@/schemas/signin.validation";

const page = () => {
  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto flex min-h-screen items-center px-4 py-10">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="hidden lg:block"
          >
            <div className="max-w-xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-primary" />
                Welcome Back
              </div>

              <h1 className="text-5xl font-bold leading-tight">
                Sign in and continue your
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  {" "}
                  freelance journey.
                </span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground">
                Connect with top employers, manage applications, and discover
                your next opportunity with HiredNow.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-semibold">Thousands of Jobs</h3>

                    <p className="text-sm text-muted-foreground">
                      Find projects from companies worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-semibold">AI-Powered Matching</h3>

                    <p className="text-sm text-muted-foreground">
                      Discover opportunities tailored to your skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

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
              duration: 0.6,
            }}
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
              <div className="text-center">
                <h2 className="text-3xl font-bold">Sign In</h2>

                <p className="mt-3 text-muted-foreground mb-3">
                  Welcome back! Please enter your details.
                </p>
              </div>

              <HNForm
                submit={handleSubmit}
                resolver={zodResolver(signinSchema)}
                defaultValues={{
                  email: "",
                  password: "",
                }}
              >
                <div className="space-y-6">
                  <HNInput
                    type="email"
                    name="email"
                    label="Email Address"
                    required
                    placeholder="john@example.com"
                  />

                  <HNInput
                    type="password"
                    name="password"
                    label="Password"
                    required
                    placeholder="Enter your password"
                  />

                  <div className="flex justify-end">
                    <Link
                      href="/forgot-password"
                      className="
                        text-sm
                        font-medium
                        text-primary
                        transition-opacity
                        hover:opacity-80
                      "
                    >
                      Forgot password?
                    </Link>
                  </div>

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
                    Sign In
                    <ArrowRight
                      className="
                        ml-2
                        h-4
                        w-4
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </Button>
                </div>
              </HNForm>

              <p className="mt-8 text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="
                    font-semibold
                    text-primary
                    hover:underline
                  "
                >
                  Create Account
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default page;
