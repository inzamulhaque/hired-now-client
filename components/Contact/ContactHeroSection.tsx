"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  HelpCircle,
  Headphones,
  Mail,
  ArrowRight,
} from "lucide-react";
import CountUp from "react-countup";

const ContactHeroSection = () => {
  return (
    <section className="relative overflow-hidden py-4 lg:py-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                bg-background/70
                px-4
                py-2
                text-sm
                font-medium
                backdrop-blur
              "
            >
              <Headphones className="h-4 w-4 text-primary" />
              Contact HiredNow
            </div>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              We'd Love To
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                {" "}
                Hear From You
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Have questions, feedback, or need support? Our team is here to
              help. Reach out anytime and we'll get back to you as quickly as
              possible.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="#contact-form">
                  Contact Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href="/faq">Browse FAQ</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />

                <span className="text-sm text-muted-foreground">
                  support@hirednow.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-primary" />

                <span className="text-sm text-muted-foreground">
                  Average response: &lt; 24 hours
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                bg-background/70
                p-8
                backdrop-blur-xl
              "
            >
              <div className="space-y-6">
                <div
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    p-4
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-gradient-to-br
                      from-blue-600
                      to-violet-600
                      text-white
                    "
                  >
                    <Headphones className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-semibold">Dedicated Support</h3>

                    <p className="text-sm text-muted-foreground">
                      Get help whenever you need it.
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    p-4
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-gradient-to-br
                      from-blue-600
                      to-violet-600
                      text-white
                    "
                  >
                    <MessageSquare className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-semibold">Fast Responses</h3>

                    <p className="text-sm text-muted-foreground">
                      Most inquiries answered within a day.
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    p-4
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-gradient-to-br
                      from-blue-600
                      to-violet-600
                      text-white
                    "
                  >
                    <HelpCircle className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-semibold">Helpful Resources</h3>

                    <p className="text-sm text-muted-foreground">
                      Find answers quickly in our FAQ.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                absolute
                -right-4
                -top-4
                hidden
                rounded-2xl
                border
                bg-background
                px-4
                py-3
                shadow-xl
                md:block
              "
            >
              <p className="text-sm font-medium">Customer Satisfaction</p>

              <p className="text-2xl font-bold text-primary">
                <CountUp end={95} duration={5} />%
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
