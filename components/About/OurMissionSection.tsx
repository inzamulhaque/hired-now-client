"use client";

import { motion } from "framer-motion";
import { Target, Brain, Users, Rocket } from "lucide-react";

const missionPoints = [
  {
    icon: Brain,
    title: "Intelligent Matching",
    description:
      "AI-powered recommendations help businesses discover the right freelancers faster.",
  },
  {
    icon: Users,
    title: "Real-Time Collaboration",
    description:
      "Seamless communication tools keep employers and freelancers connected.",
  },
  {
    icon: Rocket,
    title: "Faster Hiring",
    description:
      "Reduce hiring time and focus on building successful projects.",
  },
];

const OurMissionSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
              <Target className="h-4 w-4 text-primary" />
              Our Mission
            </div>

            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Transforming The Future Of
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                {" "}
                Freelance Hiring
              </span>
            </h2>

            <p className="mt-6 text-lg text-muted-foreground">
              Traditional hiring is slow, inefficient, and full of guesswork.
              HiredNow was built to help employers and freelancers connect
              faster through intelligent matching, real-time collaboration, and
              secure hiring experiences.
            </p>

            <p className="mt-4 text-muted-foreground">
              We believe finding the right talent should be simple, transparent,
              and accessible for everyone. Our mission is to empower businesses
              and freelancers to build meaningful partnerships and achieve more
              together.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
            className="grid gap-5"
          >
            {missionPoints.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    rounded-3xl
                    border
                    bg-background/70
                    p-6
                    backdrop-blur-xl
                    hover:shadow-xl
                  "
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="
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
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="mb-2 text-xl font-semibold">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
