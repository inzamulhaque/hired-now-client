"use client";

import { motion } from "framer-motion";
import { FieldValues, SubmitHandler } from "react-hook-form";
import HNForm from "../shared/form/HNForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/schemas/contact.validation";
import HNInput from "../shared/form/HNInput";
import HNSelect from "../shared/form/HNSelect";
import { SelectItem } from "../ui/select";
import HNTextArea from "../shared/form/HNTextArea";
import { Button } from "../ui/button";

const ContactForm = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container max-w-[1200px] mx-auto rounded-2xl border bg-background p-4 md:p-6 shadow-sm"
      >
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Send Us a Message</h2>

          <p className="mt-2 text-muted-foreground">
            Have a question, partnership proposal, or need support? Fill out the
            form below and we'll get back to you shortly.
          </p>
        </div>

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
          <div className="grid gap-6 md:grid-cols-2">
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
          </div>

          <div className="mt-6">
            <HNSelect
              name="inquiryType"
              label="Inquiry Type"
              placeholder="Select inquiry type"
            >
              <SelectItem className="cursor-pointer" value="general">
                General Question
              </SelectItem>

              <SelectItem className="cursor-pointer" value="technical">
                Technical Support
              </SelectItem>

              <SelectItem className="cursor-pointer" value="partnership">
                Partnership
              </SelectItem>

              <SelectItem className="cursor-pointer" value="billing">
                Billing
              </SelectItem>

              <SelectItem className="cursor-pointer" value="other">
                Other
              </SelectItem>
            </HNSelect>
          </div>

          <div className="mt-6">
            <HNInput
              type="text"
              name="subject"
              label="Subject"
              required
              placeholder="How can we help?"
            />
          </div>

          <div className="mt-6">
            <HNTextArea
              name="message"
              label="Message"
              required
              placeholder="Write your message here..."
            />
          </div>

          <div className="mt-8">
            <Button
              variant="outline"
              type="submit"
              size="lg"
              className="w-full md:w-auto cursor-pointer"
            >
              Send Message
            </Button>
          </div>
        </HNForm>
      </motion.div>
    </>
  );
};

export default ContactForm;
