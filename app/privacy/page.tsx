"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Database,
  Cookie,
  Eye,
  Bell,
  Users,
  Mail,
  ChevronRight,
} from "lucide-react";

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    content:
      "We collect personal information such as your name, email address, profile details, job applications, payment information, and communication history to provide our services effectively.",
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content:
      "Your information is used to create your account, improve AI-powered job matching, process payments, provide customer support, and enhance platform security.",
  },
  {
    icon: Cookie,
    title: "Cookies & Tracking",
    content:
      "We use cookies and similar technologies to remember your preferences, improve user experience, analyze traffic, and maintain secure sessions.",
  },
  {
    icon: Lock,
    title: "Data Security",
    content:
      "We implement industry-standard security measures, encryption, and secure authentication to protect your personal information from unauthorized access.",
  },
  {
    icon: Users,
    title: "Sharing Information",
    content:
      "We never sell your personal information. Data may be shared only with trusted service providers, payment processors, or when required by law.",
  },
  {
    icon: ShieldCheck,
    title: "Your Rights",
    content:
      "You can access, update, or delete your account information, request a copy of your data, and manage your privacy preferences at any time.",
  },
  {
    icon: Bell,
    title: "Policy Updates",
    content:
      "We may update this Privacy Policy occasionally. Significant changes will be communicated via email or platform notifications.",
  },
];

const page = () => {
  return (
    <main className="relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <section className="border-b py-20">
        <div className="container max-w-[1200px] mx-auto max-w-5xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg">
              <ShieldCheck className="h-10 w-10" />
            </div>

            <h1 className="mt-8 text-4xl font-bold md:text-6xl">
              Privacy Policy
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
              Your privacy matters to us. This Privacy Policy explains how
              HiredNow collects, uses, stores, and protects your information
              while using our platform.
            </p>

            <div className="mt-8 inline-flex rounded-full border bg-background px-5 py-2 text-sm">
              Last Updated: July 2026
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-[1200px] mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-3xl border bg-background p-6">
                <h3 className="mb-5 font-semibold">On This Page</h3>

                <nav className="space-y-4 text-sm">
                  {sections.map((item) => (
                    <a
                      key={item.title}
                      href={`#${item.title.replace(/\s+/g, "-")}`}
                      className="flex items-center gap-2 text-muted-foreground transition hover:text-primary"
                    >
                      <ChevronRight className="h-4 w-4" />
                      {item.title}
                    </a>
                  ))}

                  <a
                    href="#contact"
                    className="flex items-center gap-2 text-muted-foreground transition hover:text-primary"
                  >
                    <ChevronRight className="h-4 w-4" />
                    Contact Us
                  </a>
                </nav>
              </div>
            </aside>

            <div className="space-y-8">
              {sections.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.section
                    key={item.title}
                    id={item.title.replace(/\s+/g, "-")}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="rounded-3xl border bg-background p-8 shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-primary/10 p-3">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>

                      <h2 className="text-2xl font-bold">{item.title}</h2>
                    </div>

                    <p className="mt-6 leading-8 text-muted-foreground">
                      {item.content}
                    </p>
                  </motion.section>
                );
              })}

              <motion.section
                id="contact"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border bg-gradient-to-r from-blue-600 to-violet-600 p-8 text-white"
              >
                <div className="flex items-center gap-4">
                  <Mail className="h-8 w-8" />

                  <div>
                    <h2 className="text-2xl font-bold">Contact Us</h2>

                    <p className="mt-2 text-white/80">
                      If you have any questions regarding this Privacy Policy,
                      feel free to contact our support team.
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-2">
                  <p>📧 support@hirednow.com</p>

                  <p>🌍 Bangladesh (Remote First)</p>
                </div>
              </motion.section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
