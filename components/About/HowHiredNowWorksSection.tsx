"use client";

import { motion } from "framer-motion";
import { Briefcase, FileCheck, MessageCircle, CreditCard } from "lucide-react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const steps = [
  {
    icon: Briefcase,
    step: "01",
    title: "Post a Job",
    description:
      "Create better job posts instantly and attract qualified freelancers with clear project requirements.",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Receive Applications",
    description:
      "Review proposals from talented freelancers carefully matched to your project needs.",
  },
  {
    icon: MessageCircle,
    step: "03",
    title: "Chat & Evaluate",
    description:
      "Communicate directly, discuss requirements, and evaluate candidates without leaving the platform.",
  },
  {
    icon: CreditCard,
    step: "04",
    title: "Hire & Pay",
    description:
      "Hire with confidence and make secure payments through Stripe-powered transactions.",
  },
];

const HowHiredNowWorksSection = () => {
  return (
    <section className="relative overflow-hidden py-4 lg:py-6">
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
          transition={{
            duration: 0.5,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border px-4 py-2 text-sm font-medium">
            How HiredNow Works
          </span>

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            Hire Smarter In
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {" "}
              Four Simple Steps
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            From creating a job post to making secure payments, HiredNow
            streamlines every stage of the hiring journey.
          </p>
        </motion.div>

        <VerticalTimeline animate={true} lineColor="hsl(var(--border))">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <VerticalTimelineElement
                key={step.step}
                contentStyle={{
                  background: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "24px",
                  boxShadow: "none",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid hsl(var(--border))",
                }}
                iconStyle={{
                  background: "linear-gradient(135deg,#2563eb,#7c3aed)",
                  color: "#fff",
                  boxShadow: "0 10px 25px rgba(37,99,235,0.35)",
                }}
                icon={<Icon />}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                >
                  <div
                    className="
                      mb-3
                      inline-flex
                      rounded-full
                      bg-primary/10
                      px-3
                      py-1
                      text-xs
                      font-semibold
                      text-primary
                    "
                  >
                    STEP {step.step}
                  </div>

                  <h3 className="text-2xl font-bold">{step.title}</h3>

                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>

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
            delay: 0.2,
          }}
          className="
            mx-auto
            mt-16
            max-w-4xl
            rounded-3xl
            border
            bg-background/60
            p-8
            text-center
            backdrop-blur-xl
          "
        >
          <h3 className="text-2xl font-bold">Faster Hiring. Better Results.</h3>

          <p className="mt-4 text-muted-foreground">
            HiredNow combines AI-powered matching, seamless communication, and
            secure Stripe payments to make hiring freelancers easier than ever
            before.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowHiredNowWorksSection;
