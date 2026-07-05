"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
import {
  ArrowLeft,
  ArrowRight,
  MailCheck,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

import HNForm from "@/components/shared/form/HNForm";
import HNInput from "@/components/shared/form/HNInput";
import { Button } from "@/components/ui/button";

import { otpSchema } from "@/schemas/otp.validation";

const page = () => {
  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  const handleResendOtp = async () => {
    console.log("Resend OTP");
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
                <MailCheck className="h-10 w-10" />
              </div>
            </div>

            <div className="mt-8 text-center">
              <h1 className="text-3xl font-bold">Verify Your Email</h1>

              <p className="mt-4 text-muted-foreground">
                We've sent a verification code to
              </p>

              <p className="mt-1 font-medium text-primary">john@example.com</p>
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
                <h3 className="font-medium">Secure Verification</h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Enter the 6-digit code from your email to verify your account.
                </p>
              </div>
            </div>

            <HNForm
              submit={handleSubmit}
              resolver={zodResolver(otpSchema)}
              defaultValues={{
                otp: "",
              }}
            >
              <div className="mt-8 space-y-6">
                <HNInput
                  type="text"
                  name="otp"
                  label="Verification Code"
                  required
                  placeholder="123456"
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
                  Verify Account
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
              <p className="text-sm text-muted-foreground">
                Didn't receive the code?
              </p>

              <Button
                variant="ghost"
                onClick={handleResendOtp}
                className="mt-2"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Resend Code
              </Button>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/signin"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-primary
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
