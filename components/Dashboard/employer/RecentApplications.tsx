"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { ArrowRight, Clock3, Eye, MapPin, Star, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const applications = [
  {
    id: 1,
    name: "John Anderson",
    image: "https://i.pravatar.cc/150?img=11",
    role: "Senior React Developer",
    location: "United States",
    experience: "5+ Years",
    rating: 4.9,
    applied: "2 hours ago",
    availability: "Available",
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    id: 2,
    name: "Sarah Wilson",
    image: "https://i.pravatar.cc/150?img=32",
    role: "UI/UX Designer",
    location: "Canada",
    experience: "4+ Years",
    rating: 4.8,
    applied: "5 hours ago",
    availability: "Available",
    skills: ["Figma", "UI", "UX"],
  },
  {
    id: 3,
    name: "David Lee",
    image: "https://i.pravatar.cc/150?img=15",
    role: "Node.js Developer",
    location: "Singapore",
    experience: "6+ Years",
    rating: 5.0,
    applied: "Yesterday",
    availability: "Busy",
    skills: ["Node.js", "Express", "MongoDB"],
  },
];

const RecentApplications = () => {
  return (
    <Card className="rounded-3xl shadow-sm my-5">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Users className="h-5 w-5 text-primary" />
            Recent Applications
          </CardTitle>

          <p className="mt-2 text-sm text-muted-foreground">
            Review the latest freelancers who applied to your jobs.
          </p>
        </div>

        <Button asChild variant="ghost" size="sm">
          <Link href="/dashboard/applicants">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>

      <CardContent className="space-y-5">
        {applications.map((app, index) => (
          <motion.div
            key={app.id}
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
              delay: index * 0.08,
            }}
            whileHover={{
              y: -4,
            }}
            className="
              rounded-2xl
              border
              p-5
              transition-all
              hover:border-primary/30
              hover:shadow-lg
            "
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              {/* Left */}

              <div className="flex flex-1 gap-4">
                <Image
                  src={app.image}
                  alt={app.name}
                  width={64}
                  height={64}
                  className="rounded-2xl object-cover"
                />

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold">{app.name}</h3>

                    <Badge
                      variant="outline"
                      className={
                        app.availability === "Available"
                          ? "border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400"
                          : "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400"
                      }
                    >
                      {app.availability}
                    </Badge>
                  </div>

                  <p className="mt-1 text-sm font-medium text-primary">
                    {app.role}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {app.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {app.location}
                    </div>

                    <div className="flex items-center gap-1">
                      <Clock3 className="h-4 w-4" />
                      {app.experience}
                    </div>

                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {app.rating}
                    </div>

                    <div>Applied {app.applied}</div>
                  </div>
                </div>
              </div>

              {/* Right */}

              <Button asChild className="group">
                <Link href={`/dashboard/applicants/${app.id}`}>
                  <Eye className="mr-2 h-4 w-4" />
                  View Profile
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentApplications;
