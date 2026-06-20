"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Users } from "lucide-react";
import HeroSectionImage from "../../public/HomePageImages/Hero-Section.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="container max-w-[1200px] mx-auto px-4 py-8 md:py-24 lg:py-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
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
            className="order-2 md:order-1 lg:order-1"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
              <Briefcase className="h-4 w-4 text-primary" />
              Hire Top Talent Faster
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Connect With
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                {" "}
                Top Freelancers{" "}
              </span>
              And Grow Faster
            </h1>

            <p className="mb-8 max-w-xl text-muted-foreground text-lg">
              HiredNow helps businesses hire skilled freelancers and helps
              professionals find high-quality remote jobs worldwide.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg">
                Find Talent
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button size="lg" variant="outline">
                Find Jobs
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              <div>
                <h3 className="text-2xl font-bold">
                  <CountUp
                    end={10}
                    duration={5}
                    enableScrollSpy={true}
                    scrollSpyOnce={false}
                  />
                  K+
                </h3>
                <p className="text-sm text-muted-foreground">Freelancers</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  <CountUp
                    end={2}
                    duration={5}
                    enableScrollSpy={true}
                    scrollSpyOnce={false}
                  />
                  K+
                </h3>
                <p className="text-sm text-muted-foreground">Companies</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  <CountUp
                    end={15}
                    duration={5}
                    enableScrollSpy={true}
                    scrollSpyOnce={false}
                  />
                  K+
                </h3>
                <p className="text-sm text-muted-foreground">Jobs Posted</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative order-1 md:order-2 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-3xl border bg-background shadow-2xl">
              <Image
                src={HeroSectionImage}
                alt="HiredNow Hero"
                width={800}
                height={600}
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
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />

                <div>
                  <p className="font-semibold">
                    {" "}
                    <CountUp end={500} duration={5} />+ New Hires
                  </p>
                  <p className="text-xs text-muted-foreground">This Month</p>
                </div>
              </div>
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
              <div>
                <p className="font-semibold">Remote Jobs</p>

                <p className="text-2xl font-bold text-primary">
                  {" "}
                  <CountUp end={3200} duration={5} />+
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
