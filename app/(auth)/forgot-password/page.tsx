"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import HNForm from "@/components/shared/form/HNForm";
import HNInput from "@/components/shared/form/HNInput";
import { Button } from "@/components/ui/button";

import { forgotPasswordSchema } from "@/schemas/forgot-password.validation";

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

      <div className="container max-w-[1200px] mx-auto flex min-h-screen items-center justify-center px-4 py-6">
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
          className="w-full max-w-xl"
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
                <Mail className="h-10 w-10" />
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-primary" />
                Password Recovery
              </div>

              <h1 className="mt-6 text-3xl font-bold">Forgot Password?</h1>

              <p className="mt-4 text-muted-foreground">
                No worries! Enter your email address and we'll send you a
                password reset OTP.
              </p>
            </div>

            <div
              className="
                mt-8
                flex
                gap-4
                rounded-2xl
                border
                bg-primary/5
                p-4
              "
            >
              <div className="mt-0.5">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>

              <div>
                <h3 className="font-medium">Secure Password Recovery</h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  For your security, password reset OTP expire automatically
                  after a 5 minutes.
                </p>
              </div>
            </div>

            <HNForm
              submit={handleSubmit}
              resolver={zodResolver(forgotPasswordSchema)}
              defaultValues={{
                email: "",
              }}
            >
              <div className="mt-8 space-y-6">
                <HNInput
                  type="email"
                  name="email"
                  label="Email Address"
                  required
                  placeholder="john@example.com"
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
                  Send OTP
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
