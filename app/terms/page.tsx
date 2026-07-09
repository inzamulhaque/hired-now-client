"use client";

import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  UserCheck,
  Briefcase,
  CreditCard,
  Ban,
  Copyright,
  Scale,
  RefreshCw,
  Mail,
  ChevronRight,
} from "lucide-react";

const sections = [
  {
    icon: ShieldCheck,
    title: "Acceptance of Terms",
    content:
      "By creating an account or using HiredNow, you agree to comply with these Terms of Service. If you do not agree with these terms, you should discontinue using the platform.",
  },
  {
    icon: UserCheck,
    title: "Eligibility",
    content:
      "You must be at least 18 years old and capable of entering legally binding agreements to use HiredNow.",
  },
  {
    icon: Briefcase,
    title: "User Accounts",
    content:
      "Users are responsible for maintaining the confidentiality of their account credentials and for all activities performed through their accounts.",
  },
  {
    icon: Briefcase,
    title: "Employer Responsibilities",
    content:
      "Employers must provide accurate job descriptions, fair payment terms, and communicate professionally with freelancers.",
  },
  {
    icon: UserCheck,
    title: "Freelancer Responsibilities",
    content:
      "Freelancers are expected to provide truthful profiles, deliver quality work, meet agreed deadlines, and maintain professional communication.",
  },
  {
    icon: CreditCard,
    title: "Payments & Fees",
    content:
      "Payments are securely processed through Stripe. Platform fees may apply depending on your subscription or transaction type.",
  },
  {
    icon: Ban,
    title: "Prohibited Activities",
    content:
      "Users may not engage in fraud, harassment, spam, copyright infringement, account abuse, or any unlawful activities while using HiredNow.",
  },
  {
    icon: Copyright,
    title: "Intellectual Property",
    content:
      "All platform content, branding, software, and trademarks belong to HiredNow unless otherwise stated. Users retain ownership of their submitted work.",
  },
  {
    icon: Scale,
    title: "Limitation of Liability",
    content:
      "HiredNow is not responsible for disputes, financial losses, or damages arising from agreements made between employers and freelancers.",
  },
  {
    icon: RefreshCw,
    title: "Changes to Terms",
    content:
      "We may revise these Terms from time to time. Continued use of the platform constitutes acceptance of the updated Terms.",
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
        <div className="container max-w-[1200px] mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg">
              <FileText className="h-10 w-10" />
            </div>

            <h1 className="mt-8 text-4xl font-bold md:text-6xl">
              Terms of Service
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
              These Terms of Service govern your access to and use of the
              HiredNow platform. Please read them carefully before using our
              services.
            </p>

            <div className="mt-8 inline-flex rounded-full border bg-background px-5 py-2 text-sm">
              Last Updated: July 2026
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-[1200px] mx-auto  px-4">
          <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-3xl border bg-background p-6">
                <h3 className="mb-5 font-semibold">Contents</h3>

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
                    Contact
                  </a>
                </nav>
              </div>
            </aside>

            <div className="space-y-8">
              {sections.map((section, index) => {
                const Icon = section.icon;

                return (
                  <motion.section
                    key={section.title}
                    id={section.title.replace(/\s+/g, "-")}
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

                      <h2 className="text-2xl font-bold">{section.title}</h2>
                    </div>

                    <p className="mt-6 leading-8 text-muted-foreground">
                      {section.content}
                    </p>
                  </motion.section>
                );
              })}

              {/* Contact */}
              <motion.section
                id="contact"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 p-8 text-white"
              >
                <div className="flex items-center gap-4">
                  <Mail className="h-8 w-8" />

                  <div>
                    <h2 className="text-2xl font-bold">
                      Questions About These Terms?
                    </h2>

                    <p className="mt-2 text-white/80">
                      Contact our legal or support team if you need
                      clarification regarding these Terms of Service.
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-2">
                  <p>📧 legal@hirednow.com</p>
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
