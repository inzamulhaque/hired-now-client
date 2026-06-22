"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft, Briefcase } from "lucide-react";

const NotFound = () => {
  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[10%]
          top-[20%]
          hidden
          h-20
          w-20
          rounded-3xl
          border
          bg-background/60
          backdrop-blur-xl
          md:block
        "
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[10%]
          bottom-[20%]
          hidden
          h-16
          w-16
          rounded-full
          border
          bg-background/60
          backdrop-blur-xl
          md:block
        "
      />

      <div className="mx-auto max-w-3xl text-center">
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            text-8xl
            font-extrabold
            tracking-tight
            md:text-[12rem]
          "
        >
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            404
          </span>
        </motion.h1>

        <motion.div
          animate={{
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="mb-6 flex justify-center"
        >
          <div
            className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              bg-gradient-to-br
              from-blue-600
              to-violet-600
              text-white
              shadow-xl
            "
          >
            <Briefcase className="h-10 w-10" />
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
        >
          <h2 className="text-3xl font-bold md:text-5xl">
            Oops! Page Not Found
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            The page you're looking for doesn't exist or may have been moved.
            Let's get you back on track and continue your hiring journey.
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
          }}
          className="
            mt-10
            flex
            flex-col
            justify-center
            gap-4
            sm:flex-row
          "
        >
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back To Home
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <Link href="/jobs">
              <Search className="mr-2 h-4 w-4" />
              Browse Jobs
            </Link>
          </Button>
        </motion.div>
      </div>
    </main>
  );
};

export default NotFound;
