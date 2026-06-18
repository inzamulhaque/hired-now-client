"use client";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import TestimonialImg1 from "../../public/HomePageImages/testimonial1.jpg";
import TestimonialImg2 from "../../public/HomePageImages/testimonial2.jpg";
import TestimonialImg3 from "../../public/HomePageImages/testimonial3.jpg";
import TestimonialImg4 from "../../public/HomePageImages/testimonial4.jpg";
import TestimonialImg5 from "../../public/HomePageImages/testimonial5.jpg";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    image: TestimonialImg1,
    review:
      "HiredNow helped me land multiple international clients within weeks. The platform is smooth and easy to use.",
  },
  {
    name: "Michael Brown",
    role: "Startup Founder",
    image: TestimonialImg2,
    review:
      "We hired a talented React developer in less than 48 hours. Amazing experience!",
  },
  {
    name: "Emily Davis",
    role: "Frontend Developer",
    image: TestimonialImg3,
    review:
      "The job recommendations are surprisingly accurate. I found my dream remote job here.",
  },
  {
    name: "David Wilson",
    role: "Product Manager",
    image: TestimonialImg4,
    review:
      "The quality of freelancers on HiredNow is exceptional. Highly recommended.",
  },
  {
    name: "Sophia Miller",
    role: "Graphic Designer",
    image: TestimonialImg5,
    review:
      "The hiring process is transparent and secure. Payments are always on time.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border px-4 py-2 text-sm font-medium">
            Testimonials
          </span>

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            Loved By
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              {" "}
              Freelancers & Companies
            </span>
          </h2>

          <p className="mt-6 text-muted-foreground md:text-lg">
            Thousands of professionals and businesses trust HiredNow to connect,
            collaborate, and grow.
          </p>
        </motion.div>
      </div>

      <Marquee pauseOnHover speed={40}>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </Marquee>

      <Marquee pauseOnHover speed={35} direction="right" className="mt-6">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={`${testimonial.name}-2`}
            testimonial={testimonial}
          />
        ))}
      </Marquee>
    </section>
  );
};

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <Card
      className="
        mx-4
        w-[320px]
        border
        bg-background/80
        backdrop-blur-xl
        transition-all
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <CardContent className="p-6">
        <div className="mb-4 flex">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        <p className="mb-6 text-muted-foreground">{testimonial.review}</p>

        <div className="flex items-center gap-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />

          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>

            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TestimonialsSection;
