"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Clock3, Globe, CheckCircle2 } from "lucide-react";

const companyInfo = [
  {
    icon: Building2,
    title: "Company Name",
    value: "HiredNow",
    description:
      "AI-powered freelancer hiring platform connecting businesses with top talent.",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Bangladesh (Remote First)",
    description: "Our team works remotely to support users worldwide.",
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: "Sunday – Thursday",
    description: "9:00 AM – 6:00 PM (GMT+6)",
  },
  {
    icon: Globe,
    title: "Platform Availability",
    value: "24/7 Online Service",
    description: "Access jobs, applications, and hiring tools anytime.",
  },
];

const CompanyInformationSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border px-4 py-2 text-sm font-medium">
            Company Information
          </span>

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            Get To Know
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {" "}
              HiredNow
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Learn more about our company, working hours, and platform
            availability.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {companyInfo.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  scale: 1.02,
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
                      transition-transform
                      duration-300
                      group-hover:rotate-6
                    "
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-lg font-semibold">{item.title}</h3>

                  <p className="mt-3 text-xl font-bold text-primary">
                    {item.value}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
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
            backdrop-blur-xl
          "
        >
          <div className="flex flex-col items-center text-center">
            <div
              className="
                mb-4
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-blue-600
                to-violet-600
                text-white
              "
            >
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-bold">
              Building The Future Of Freelance Hiring
            </h3>

            <p className="mt-4 max-w-3xl text-muted-foreground">
              HiredNow is a remote-first platform designed to help businesses
              discover top freelancers faster through AI-powered matching,
              real-time communication, and secure payment solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyInformationSection;
