"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MiniLogo from "../../public/MiniLogo.png";
import Logo from "../../public/logo.png";
import Image from "next/image";

const quickLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Jobs",
    href: "/jobs",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const freelancerLinks = [
  {
    label: "Find Jobs",
    href: "/jobs",
  },
  {
    label: "Create Profile",
    href: "/signup",
  },
  {
    label: "Career Tips",
    href: "/blog",
  },
];

const employerLinks = [
  {
    label: "Hire Talent",
    href: "/hire",
  },
  {
    label: "Post Job",
    href: "/jobs/create",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
];

const socialLinks = [
  {
    icon: ArrowUpRight,
    href: "#",
  },
  {
    icon: ArrowUpRight,
    href: "#",
  },
  {
    icon: ArrowUpRight,
    href: "#",
  },
  {
    icon: ArrowUpRight,
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white font-bold">
                <Image src={MiniLogo} alt="Mini Logo" height={60} width={60} />
              </div>

              <Image src={Logo} alt="Logo" height={160} width={160} />
            </Link>

            <p className="mt-4 text-sm text-muted-foreground">
              Connecting talented freelancers with businesses worldwide through
              a secure and modern hiring platform.
            </p>

            {/* social media */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{
                      y: -3,
                    }}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      bg-background
                      transition-colors
                      hover:border-primary
                      hover:text-primary
                    "
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <FooterColumn title="Quick Links" links={quickLinks} />

          <FooterColumn title="For Freelancers" links={freelancerLinks} />

          <FooterColumn title="For Employers" links={employerLinks} />
        </div>
      </div>

      <div className="border-t py-6">
        <div className="container mx-auto max-w-[1200px] ">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>© {new Date().getFullYear()} HiredNow. All rights reserved.</p>

            <div className="flex gap-6">
              <Link href="/privacy">Privacy Policy</Link>

              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
    >
      <h3 className="mb-5 font-semibold">{title}</h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="
                group
                inline-flex
                items-center
                gap-1
                text-muted-foreground
                transition-colors
                hover:text-primary
              "
            >
              {link.label}

              <ArrowUpRight
                className="
                  h-3
                  w-3
                  opacity-0
                  transition-all
                  group-hover:translate-x-1
                  group-hover:opacity-100
                "
              />
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default Footer;
