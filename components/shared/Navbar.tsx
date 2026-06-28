"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

import { Button } from "../ui/button";

import Logo from "../../public/logo.png";
import MiniLogo from "../../public/MiniLogo.png";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Jobs",
    href: "/jobs",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-[#0B1F6D] via-[#162B8C] to-[#7C3AED] text-white shadow-lg">
      <div className="container max-w-[1200px] mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="flex items-center gap-2"
          >
            <Image src={Logo} alt="HiredNow Logo" width={120} height={120} />
          </motion.div>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{
                y: -2,
              }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition hover:text-primary"
              >
                {item.title}
              </Link>
            </motion.div>
          ))}

          <ThemeToggle />
        </nav>

        {/* Desktop Auth */}

        <div className="hidden md:flex items-center gap-3">
          <Link href="/signin">
            <Button variant="ghost" className="cursor-pointer">
              Sign In
            </Button>
          </Link>

          <Link href="/signup">
            <Button className="cursor-pointer">Sign Up</Button>
          </Link>
        </div>

        {/* Mobile Menu */}

        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="
          rounded-xl
          text-white
          hover:bg-white/10
          transition-all
        "
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="
        w-[320px]
        border-l
        border-white/10
        bg-gradient-to-b
        from-[#0B1F6D]
        via-[#162B8C]
        to-[#7C3AED]
        text-white
        p-0
      "
            >
              {/* Header */}
              <div className="border-b border-white/10 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                    <Image src={MiniLogo} alt="Mini Logo" className="h-6 w-6" />
                  </div>

                  <div>
                    <Image
                      src={Logo}
                      alt="HiredNow Logo"
                      width={120}
                      height={120}
                    />

                    <p className="text-xs text-white/70">
                      Find Jobs & Freelancers
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col p-5">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1,
                    }}
                  >
                    <Link
                      href={item.href}
                      className="
                group
                flex
                items-center
                justify-between
                rounded-xl
                px-4
                py-3
                text-base
                font-medium
                text-white/80
                transition-all
                hover:bg-white/10
                hover:text-white
              "
                    >
                      {item.title}

                      <span
                        className="
                  opacity-0
                  transition-all
                  group-hover:opacity-100
                "
                      >
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Section */}
              <div className="mt-auto p-5 border-t border-white/10">
                <div className="mb-4 flex items-center justify-between rounded-xl bg-white/10 p-3">
                  <span className="text-sm">Theme</span>

                  <ThemeToggle />
                </div>

                <div className="space-y-3">
                  <Link href="/signin">
                    <Button
                      variant="secondary"
                      className="
                              w-full
                              rounded-xl
                              bg-white
                              text-[#0B1F6D]
                              hover:bg-white/90
                            "
                    >
                      Sign In
                    </Button>
                  </Link>

                  <Link href="/signup">
                    <Button
                      className="
                          w-full
                          rounded-xl
                          border
                          border-white/20
                          bg-white/10
                          backdrop-blur
                          hover:bg-white/20
                        "
                    >
                      Sign Up
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
