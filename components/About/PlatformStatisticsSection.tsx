"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Users, Building2, Briefcase, Star, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Freelancers",
    description: "Skilled professionals ready to work worldwide.",
  },
  {
    icon: Building2,
    value: 2000,
    suffix: "+",
    label: "Companies",
    description: "Businesses actively hiring top freelance talent.",
  },
  {
    icon: Briefcase,
    value: 15000,
    suffix: "+",
    label: "Jobs Posted",
    description: "Projects successfully posted and completed.",
  },
  {
    icon: Star,
    value: 95,
    suffix: "%",
    label: "Satisfaction Rate",
    description: "Trusted by freelancers and employers alike.",
  },
  {
    icon: ShieldCheck,
    value: 24,
    suffix: "/7",
    label: "Platform Availability",
    description: "Reliable access whenever you need it.",
  },
];

const PlatformStatisticsSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border px-4 py-2 text-sm font-medium">
            Platform Statistics
          </span>

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            Trusted By Thousands
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {" "}
              Around The World
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Our growing community of freelancers and companies continues to
            shape the future of remote work.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
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
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  bg-background/70
                  p-6
                  text-center
                  backdrop-blur-xl
                  transition-all
                  hover:border-primary/30
                  hover:shadow-xl
                "
              >
                <div
                  className="
                    mx-auto
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-blue-600
                    to-violet-600
                    text-white
                  "
                >
                  <Icon className="h-7 w-7" />
                </div>

                <div className="text-4xl font-bold">
                  <CountUp
                    end={stat.value}
                    duration={5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {stat.suffix}
                </div>

                <h3 className="mt-2 text-lg font-semibold">{stat.label}</h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
          }}
          className="
            mt-12
            rounded-3xl
            border
            bg-background/60
            p-8
            text-center
            backdrop-blur-xl
          "
        >
          <h3 className="text-2xl font-bold">
            Building The Future Of Freelance Hiring
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Every project, hire, and collaboration on HiredNow helps create a
            more connected and efficient global workforce.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformStatisticsSection;
