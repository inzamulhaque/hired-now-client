"use client";

import { motion } from "framer-motion";
import {
  Brain,
  FileText,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description:
      "Find the right talent faster with intelligent recommendations that connect employers and freelancers based on skills, experience, and project needs.",
  },
  {
    icon: FileText,
    title: "Smart Job Descriptions",
    description:
      "Create clear, optimized job posts instantly with AI assistance to attract the most relevant candidates.",
  },
  {
    icon: MessageCircle,
    title: "Real-Time Communication",
    description:
      "Collaborate and chat directly on the platform without switching between multiple tools.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description:
      "Powered by Stripe, ensuring safe transactions, payment protection, and peace of mind for both employers and freelancers.",
  },
];

const OurSolutionSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
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
          transition={{
            duration: 0.5,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border px-4 py-2 text-sm font-medium">
            Our Solution
          </span>

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            How HiredNow Makes
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {" "}
              Hiring Smarter
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            We have built a modern platform that removes friction from hiring
            and freelancing, helping people connect, collaborate, and succeed
            faster.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={solution.title}
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
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  bg-background/70
                  p-8
                  backdrop-blur-xl
                  transition-all
                  hover:border-primary/30
                  hover:shadow-xl
                "
              >
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                    bg-gradient-to-br
                    from-blue-500/5
                    to-violet-500/5
                  "
                />

                <div className="relative z-10">
                  <div
                    className="
                      mb-6
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

                  <h3 className="mb-3 text-2xl font-semibold">
                    {solution.title}
                  </h3>

                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-primary
                    "
                  >
                    Learn More
                    <ArrowRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </div>
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
            One Platform. Endless Opportunities.
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From AI-powered hiring to secure Stripe payments, HiredNow provides
            everything employers and freelancers need to work together
            successfully.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurSolutionSection;
