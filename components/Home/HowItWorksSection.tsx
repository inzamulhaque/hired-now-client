"use client";

import { motion } from "framer-motion";
import { UserPlus, Search, MessagesSquare, Wallet } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Account",
    description:
      "Sign up as a freelancer or employer and complete your profile.",
  },
  {
    number: "02",
    icon: Search,
    title: "Find Jobs or Talent",
    description:
      "Browse jobs or discover skilled freelancers that match your needs.",
  },
  {
    number: "03",
    icon: MessagesSquare,
    title: "Connect & Collaborate",
    description:
      "Chat, discuss requirements, and start working together instantly.",
  },
  {
    number: "04",
    icon: Wallet,
    title: "Get Paid Securely",
    description: "Enjoy secure payments and transparent transactions.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative overflow-hidden py-4 lg:py-4">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border px-4 py-2 text-sm font-medium">
            How It Works
          </span>

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            Start Hiring Or Working
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {" "}
              In Minutes
            </span>
          </h2>

          <p className="mt-6 text-muted-foreground md:text-lg">
            A simple process designed to connect talented freelancers with
            businesses around the world.
          </p>
        </motion.div>

        <div className="relative">
          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
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
                    delay: index * 0.15,
                  }}
                  className="relative text-center"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br  from-blue-600  to-violet-600 text-lg font-bold  text-white hadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* card */}
                  <div className="rounded-3xl  border bg-background/70 p-6 ackdrop-blur-xl transition-all hover:-translate-y-2 hover:shadow-xl">
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br  from-blue-600  to-violet-600  text-white">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>

                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
