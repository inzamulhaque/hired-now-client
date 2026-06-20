"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import HeroImg from "../../public/AboutPageImages/AboutHeroSection.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-4 lg:py-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-violet-500/15 blur-3xl" />
      </div>

      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
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
            className="order-2"
          >
            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                px-4
                py-2
                text-sm
                font-medium
              "
            >
              <Sparkles className="h-4 w-4 text-primary" />
              About HiredNow
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Hire Top Freelancers Faster With
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                {" "}
                AI-Powered Hiring
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              HiredNow helps businesses find, evaluate, and hire talented
              freelancers through intelligent matching, real-time communication,
              and secure payments. Our mission is to make remote hiring simple,
              transparent, and accessible for everyone.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href="/jobs">Browse Jobs</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative order-1"
          >
            <div className="relative overflow-hidden rounded-3xl border shadow-2xl">
              <Image
                src={HeroImg}
                alt="About HiredNow"
                width={800}
                height={700}
                priority
                className="h-auto w-full object-cover"
              />
            </div>

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -left-6 top-10 hidden rounded-2xl border dark:border-black/50 bg-background p-4 shadow-lg md:block dark:bg-black/30"
            >
              <p className="text-sm font-medium">AI Matching</p>

              <p className="text-2xl font-bold text-primary">98%</p>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -right-4 bottom-10 hidden rounded-2xl border dark:border-black/50 bg-background dark:bg-black/30 p-4 shadow-lg md:block"
            >
              <p className="text-sm font-medium">Successful Hires</p>

              <p className="text-2xl font-bold text-primary">25K+</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
