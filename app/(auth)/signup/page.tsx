"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Brain,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";

import HNForm from "@/components/shared/form/HNForm";
import HNInput from "@/components/shared/form/HNInput";

import { signupSchema } from "@/schemas/signup.validation";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import HNCheckbox from "@/components/shared/form/HNCheckbox";

const page = () => {
  const [role, setRole] = useState<"freelancer" | "employer">("freelancer");

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const payload = {
      ...data,
      role,
    };

    console.log(payload);
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container max-w-[1200px] mx-auto flex min-h-screen items-center px-4 py-10">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-2">
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
            className="
              hidden
              lg:flex
              lg:sticky
              lg:top-24
              lg:flex-col
              lg:justify-center
            "
          >
            <div className="mb-8 flex items-center gap-3">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  to-violet-600
                  font-bold
                  text-white
                "
              >
                HN
              </div>

              <span className="text-2xl font-bold">HiredNow</span>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-primary" />
              Create Your Account
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-tight">
              Hire Smarter.
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Work Better.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              AI-powered platform connecting businesses with top freelancers
              through intelligent matching and real-time collaboration.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-primary/10 p-3">
                  <Brain className="h-6 w-6 text-primary" />
                </div>

                <span className="font-medium">AI-Powered Matching</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-primary/10 p-3">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>

                <span className="font-medium">Real-Time Communication</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-primary/10 p-3">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>

                <span className="font-medium">Secure Hiring & Payments</span>
              </div>
            </div>
          </motion.div>

          {/* SignUp Form */}
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
                <h2 className="text-3xl font-bold">Create Account</h2>

                <p className="mt-3 text-muted-foreground">
                  Join HiredNow and start your journey today.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 rounded-2xl border bg-muted p-1">
                <button
                  type="button"
                  onClick={() => setRole("freelancer")}
                  className={`
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition-all
                    ${
                      role === "freelancer"
                        ? "bg-background shadow-sm bg-[#708090]"
                        : "text-muted-foreground"
                    }
                  `}
                >
                  Freelancer
                </button>

                <button
                  type="button"
                  onClick={() => setRole("employer")}
                  className={`
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition-all
                    ${
                      role === "employer"
                        ? "bg-background shadow-sm bg-[#708090]"
                        : "text-muted-foreground"
                    }
                  `}
                >
                  Employer
                </button>
              </div>

              <HNForm
                submit={handleSubmit}
                resolver={zodResolver(signupSchema)}
                defaultValues={{
                  name: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                  terms: false,
                }}
              >
                <div className="mt-8 space-y-6">
                  <HNInput
                    type="text"
                    name="name"
                    label="Full Name"
                    required
                    placeholder="John Doe"
                  />

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
                    placeholder="••••••••"
                  />

                  <HNInput
                    type="password"
                    name="confirmPassword"
                    label="Confirm Password"
                    required
                    placeholder="••••••••"
                  />

                  <div className="flex items-start gap-3">
                    <HNCheckbox name="terms" />

                    <label
                      htmlFor="terms"
                      className="text-sm text-muted-foreground"
                    >
                      I agree to the{" "}
                      <Link
                        href="/terms"
                        className="font-medium text-primary hover:underline"
                      >
                        Terms & Conditions
                      </Link>
                    </label>
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
                    "
                  >
                    Create Account
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
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="
                    font-semibold
                    text-primary
                    hover:underline
                  "
                >
                  Sign In
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
