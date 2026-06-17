"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  ShieldCheck,
  MessageSquareMore,
  Brain,
  Globe,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Smart Job Matching",
    description:
      "Connect freelancers with the most relevant jobs using intelligent matching.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Freelancers",
    description:
      "Hire trusted professionals with verified skills and profiles.",
  },
  {
    icon: Wallet,
    title: "Secure Payments",
    description:
      "Safe and transparent payment processing for both clients and freelancers.",
  },
  {
    icon: MessageSquareMore,
    title: "Real-Time Messaging",
    description:
      "Collaborate instantly with built-in chat and communication tools.",
  },
  {
    icon: Brain,
    title: "AI Recommendations",
    description:
      "Get personalized job and talent recommendations powered by AI.",
  },
  {
    icon: Globe,
    title: "Work From Anywhere",
    description:
      "Access remote opportunities and global talent without boundaries.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container max-w-[1200px] mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border px-4 py-2 text-sm font-medium">
            Why Choose HiredNow
          </span>

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            Everything You Need To
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {" "}
              Hire & Get Hired
            </span>
          </h2>

          <p className="mt-6 text-muted-foreground md:text-lg">
            Discover powerful tools designed to help businesses find top talent
            and freelancers grow their careers.
          </p>
        </motion.div>

        {/* cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
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
                  y: -8,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  bg-background/70
                  p-6
                  backdrop-blur-xl
                  transition-all
                  hover:shadow-xl
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-blue-500/5
                    to-violet-500/5
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
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
                    shadow-lg
                  "
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>

                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
