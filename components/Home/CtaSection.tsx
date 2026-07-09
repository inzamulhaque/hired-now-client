"use client";

import Link from "next/link";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Briefcase,
  Users,
  Code2,
  Palette,
  Database,
  Smartphone,
  Brain,
} from "lucide-react";
import CountUp from "react-countup";

const skills = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Code2 },
  { name: "UI/UX Design", icon: Palette },
  { name: "Mobile Apps", icon: Smartphone },
  { name: "AI Development", icon: Brain },
  { name: "Backend", icon: Database },
  { name: "Remote Work", icon: Briefcase },
  { name: "Top Talent", icon: Users },
];

const CtaSection = () => {
  return (
    <section className="relative overflow-hidden py-4 lg:py-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="container max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            bg-gradient-to-br
            from-[#0B1F6D]
            via-[#162B8C]
            to-[#7C3AED]
            p-8
            text-white
            shadow-2xl
            md:p-12
            lg:p-16
          "
        >
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/10
                px-4
                py-2
                text-sm
                backdrop-blur
              "
            >
              <Users className="h-4 w-4" />
              Join Thousands of Professionals
            </motion.div>

            <h2 className="mx-auto max-w-4xl text-3xl font-bold md:text-5xl lg:text-6xl">
              Ready To Find Your Next
              <span className="block">Opportunity Or Hire Top Talent?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Whether you are looking for skilled freelancers or searching for
              your next remote opportunity, HiredNow makes it simple, secure,
              and fast.
            </p>

            {/* cta button */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="
                  bg-white
                  text-[#0B1F6D]
                  hover:bg-white/90
                "
              >
                <Link href="/signup">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="
                  border-white/30
                  bg-white/10
                  text-white
                  hover:bg-white/20
                "
              >
                <Link href="/jobs">Browse Jobs</Link>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8">
              <div>
                <h3 className="text-3xl font-bold">
                  {" "}
                  <CountUp
                    end={10}
                    duration={0.5}
                    enableScrollSpy={true}
                    scrollSpyOnce={false}
                  />
                  K+
                </h3>
                <p className="text-sm text-white/70">Freelancers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  {" "}
                  <CountUp
                    end={2}
                    duration={0.2}
                    enableScrollSpy={true}
                    scrollSpyOnce={false}
                  />
                  K+
                </h3>
                <p className="text-sm text-white/70">Companies</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  {" "}
                  <CountUp
                    end={15}
                    duration={1}
                    enableScrollSpy={true}
                    scrollSpyOnce={false}
                  />
                  K+
                </h3>
                <p className="text-sm text-white/70">Jobs Posted</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* skills marquee */}
        <div className="mt-10">
          <Marquee pauseOnHover speed={40}>
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="
                    mx-3
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    bg-background
                    px-5
                    py-3
                    shadow-sm
                  "
                >
                  <Icon className="h-4 w-4 text-primary" />

                  <span className="font-medium">{skill.name}</span>
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
