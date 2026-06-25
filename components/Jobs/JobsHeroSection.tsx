"use client";

import { motion } from "framer-motion";
import { Search, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CountUp from "react-countup";

const popularSearches = [
  "React Developer",
  "Next.js",
  "UI Designer",
  "Node.js",
  "Full Stack Developer",
];

const JobsHeroSection = () => {
  return (
    <section className="relative overflow-hidden py-4 lg:py-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              bg-background/70
              px-4
              py-2
              text-sm
              font-medium
              backdrop-blur-xl
            "
          >
            <Briefcase className="h-4 w-4 text-primary" />
            Discover Freelance Jobs
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="text-4xl font-bold tracking-tight md:text-6xl"
          >
            Find Your Next
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {" "}
              Freelance Opportunity
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              text-muted-foreground
            "
          >
            Browse jobs from employers looking for talented freelancers and find
            opportunities that match your skills.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
            className="
              mx-auto
              mt-12
              max-w-4xl
              rounded-3xl
              border
              bg-background/70
              p-4
              shadow-xl
              backdrop-blur-xl
            "
          >
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search
                  className="
                    absolute
                    left-4
                    top-1/2
                    h-5
                    w-5
                    -translate-y-1/2
                    text-muted-foreground
                  "
                />

                <Input
                  placeholder="Search jobs by title, skill, or keyword..."
                  className="
                    h-14
                    rounded-2xl
                    border-border/60
                    pl-12
                    text-base
                    focus-visible:border-primary
                    focus-visible:ring-primary/20
                  "
                />
              </div>

              <Button
                size="lg"
                className="
                  h-14
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  to-violet-600
                  text-white
                  shadow-lg
                  transition-all
                  hover:shadow-xl
                "
              >
                Search Jobs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <span className="text-sm text-muted-foreground">Popular:</span>

              {popularSearches.map((item) => (
                <motion.button
                  key={item}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="
                    rounded-full
                    border
                    bg-background
                    px-4
                    py-2
                    text-sm
                    font-medium
                    transition-all
                    hover:border-primary/40
                    hover:bg-primary/5
                    hover:text-primary
                  "
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
            }}
            className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-8
              text-sm
              text-muted-foreground
            "
          >
            <div>
              <span className="font-semibold text-foreground">
                <CountUp end={15} duration={5} />
                K+
              </span>{" "}
              Jobs Posted
            </div>

            <div>
              <span className="font-semibold text-foreground">
                <CountUp end={10} duration={5} />
                K+
              </span>{" "}
              Freelancers
            </div>

            <div>
              <span className="font-semibold text-foreground">
                <CountUp end={2} duration={5} />
                K+
              </span>{" "}
              Companies
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JobsHeroSection;
