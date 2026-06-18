"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is HiredNow?",
    answer:
      "HiredNow is a modern freelancer hiring platform that connects businesses with skilled professionals worldwide.",
  },
  {
    question: "How do I hire a freelancer?",
    answer:
      "Simply create an employer account, post a job, review proposals, and hire the best freelancer for your project.",
  },
  {
    question: "How can freelancers find jobs?",
    answer:
      "Freelancers can create a profile, showcase their skills, browse available jobs, and submit proposals directly through the platform.",
  },
  {
    question: "Are payments secure on HiredNow?",
    answer:
      "Yes. HiredNow uses secure payment processing and escrow protection to ensure safe transactions between clients and freelancers.",
  },
  {
    question: "Does HiredNow support remote work?",
    answer:
      "Absolutely. HiredNow is built for remote collaboration, allowing freelancers and companies to work together from anywhere in the world.",
  },
];

const FaqSection = () => {
  return (
    <section className="relative overflow-hidden py-4 lg:py-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* heading */}
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
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            Got Questions?
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {" "}
              We have Got Answers
            </span>
          </h2>

          <p className="mt-6 text-muted-foreground md:text-lg">
            Everything you need to know about hiring talent, finding work, and
            growing with HiredNow.
          </p>
        </motion.div>

        {/* FAQ */}
        <motion.div
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
            duration: 0.5,
          }}
          className="mx-auto max-w-4xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="
                  rounded-2xl
                  border
                  bg-background/70
                  px-6
                  backdrop-blur-xl
                  transition-all
                  hover:border-primary/30
                "
              >
                <AccordionTrigger
                  className="
                    text-left
                    text-base
                    font-semibold
                    hover:no-underline
                  "
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent
                  className="
                    text-muted-foreground
                    leading-relaxed
                  "
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

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
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">Still have questions?</p>

          <a
            href="/contact"
            className="
              mt-2
              inline-block
              font-medium
              text-primary
              hover:underline
            "
          >
            Contact our support team →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
