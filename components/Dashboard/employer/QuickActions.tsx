"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  CreditCard,
  MessageSquareMore,
  Sparkles,
  Users,
} from "lucide-react";

const actions = [
  {
    title: "Post a Job",
    description:
      "Create a new job post and start receiving applications from top freelancers.",
    href: "/dashboard/jobs/create",
    icon: BriefcaseBusiness,
    gradient: "from-blue-500 to-cyan-500",
    bg: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Browse Freelancers",
    description:
      "Explore verified freelancers and invite the best candidates instantly.",
    href: "/dashboard/freelancers",
    icon: Users,
    gradient: "from-violet-500 to-fuchsia-500",
    bg: "from-violet-500/10 to-fuchsia-500/10",
  },
  {
    title: "Messages",
    description:
      "Continue conversations with applicants and manage interviews.",
    href: "/dashboard/messages",
    icon: MessageSquareMore,
    gradient: "from-emerald-500 to-teal-500",
    bg: "from-emerald-500/10 to-teal-500/10",
  },
  {
    title: "Payments",
    description: "Review invoices and securely pay freelancers using Stripe.",
    href: "/dashboard/payments",
    icon: CreditCard,
    gradient: "from-amber-500 to-orange-500",
    bg: "from-amber-500/10 to-orange-500/10",
  },
];

const QuickActions = () => {
  return (
    <section className="mt-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Quick Actions
          </div>

          <h2 className="mt-3 text-3xl font-bold">Get Things Done Faster</h2>

          <p className="mt-2 text-muted-foreground">
            Jump into the most common employer tasks with a single click.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {actions.map((action, index) => {
          const Icon = action.icon;

          return (
            <motion.div
              key={action.title}
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
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-3xl border bg-card shadow-sm transition-all hover:shadow-xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${action.bg} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div
                className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-r ${action.gradient} opacity-10 blur-3xl`}
              />

              <div className="relative z-10 flex h-full flex-col p-6">
                <div
                  className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    ${action.gradient}
                    text-white
                    shadow-lg
                  `}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-bold">{action.title}</h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                  {action.description}
                </p>

                <Link
                  href={action.href}
                  className="mt-6 inline-flex items-center font-medium text-primary transition-all group-hover:gap-3"
                >
                  Open
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default QuickActions;
