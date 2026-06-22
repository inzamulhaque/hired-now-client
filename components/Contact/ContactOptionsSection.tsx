"use client";

import { motion } from "framer-motion";
import { Mail, Briefcase, Wrench, Clock3, ArrowUpRight } from "lucide-react";

const contactOptions = [
  {
    icon: Mail,
    title: "Email Support",
    value: "support@hirednow.com",
    description: "Get help with your account, applications, or hiring process.",
  },
  {
    icon: Briefcase,
    title: "Business Inquiries",
    value: "business@hirednow.com",
    description:
      "Partnership, collaboration, and business-related discussions.",
  },
  {
    icon: Wrench,
    title: "Technical Support",
    value: "help@hirednow.com",
    description: "Facing technical issues? Our support team can help.",
  },
  {
    icon: Clock3,
    title: "Response Time",
    value: "< 24 Hours",
    description: "We typically respond to all inquiries within 24 hours.",
  },
];

const ContactOptionsSection = () => {
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
            Contact Options
          </span>

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            Choose The Best Way To
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {" "}
              Reach Us
            </span>
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Whether you need support, business assistance, or technical help,
            our team is ready to assist you.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {contactOptions.map((item, index) => {
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
                    "
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  <p className="mt-3 font-medium text-primary break-all">
                    {item.value}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  {item.title !== "Response Time" && (
                    <a
                      href={`mailto:${item.value}`}
                      className="
                        mt-6
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-medium
                        text-primary
                      "
                    >
                      Contact Now
                      <ArrowUpRight
                        className="
                          h-4
                          w-4
                          transition-transform
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />
                    </a>
                  )}
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
          <h3 className="text-2xl font-bold">We're Here To Help</h3>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our support team is committed to providing timely assistance and
            ensuring you have the best experience on HiredNow.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactOptionsSection;
