"use client";

import { motion } from "framer-motion";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Headphones } from "lucide-react";

import HNForm from "../shared/form/HNForm";
import HNInput from "../shared/form/HNInput";
import HNSelect from "../shared/form/HNSelect";
import HNTextArea from "../shared/form/HNTextArea";

import { SelectItem } from "../ui/select";
import { Button } from "../ui/button";

import { contactSchema } from "@/schemas/contact.validation";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const ContactForm = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
      className="container mx-auto max-w-4xl"
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          bg-background/70
          p-6
          md:p-10
          shadow-xl
          backdrop-blur-xl
        "
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        </div>

        <motion.div variants={itemVariants} className="mb-10">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">
              <Headphones className="h-6 w-6" />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Send Us a Message
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                We usually respond within 24 hours
              </p>
            </div>
          </div>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Have a question, partnership proposal, or need support? Fill out the
            form and our team will get back to you soon.
          </p>
        </motion.div>

        <HNForm
          submit={onSubmit}
          resolver={zodResolver(contactSchema)}
          defaultValues={{
            fullName: "",
            email: "",
            inquiryType: "",
            subject: "",
            message: "",
          }}
        >
          <motion.div
            variants={itemVariants}
            className="grid gap-6 md:grid-cols-2"
          >
            <HNInput
              type="text"
              name="fullName"
              label="Full Name"
              required
              placeholder="John Doe"
            />

            <HNInput
              type="email"
              name="email"
              label="Email Address"
              required
              placeholder="john@example.com"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6">
            <HNSelect
              name="inquiryType"
              label="Inquiry Type"
              placeholder="Select inquiry type"
            >
              <SelectItem value="general">General Question</SelectItem>
              <SelectItem value="technical">Technical Support</SelectItem>
              <SelectItem value="partnership">Partnership</SelectItem>
              <SelectItem value="billing">Billing</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </HNSelect>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6">
            <HNInput
              type="text"
              name="subject"
              label="Subject"
              required
              placeholder="How can we help you?"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6">
            <HNTextArea
              name="message"
              label="Message"
              required
              placeholder="Write your message here..."
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex justify-end"
          >
            <Button
              type="submit"
              size="lg"
              className="
                group
                relative
                overflow-hidden
                bg-gradient-to-r
                from-blue-600
                to-violet-600
                text-white
                shadow-lg
                hover:shadow-xl
                transition-all
              "
            >
              <span className="relative z-10 flex items-center gap-2">
                Send Message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>

              <span
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  bg-white/10
                  transition
                "
              />
            </Button>
          </motion.div>
        </HNForm>
      </div>
    </motion.section>
  );
};

export default ContactForm;
