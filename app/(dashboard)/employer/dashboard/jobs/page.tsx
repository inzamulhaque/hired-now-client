import JobsFilters from "@/components/Dashboard/employer/jobs/JobsFilters";
import JobsGrid from "@/components/Dashboard/employer/jobs/JobsGrid";
import JobsHeader from "@/components/Dashboard/employer/jobs/JobsHeader";
import { EJobStatus, EJobType, TJob } from "@/types";

export const demoJobs: TJob[] = [
  {
    id: "job-001",
    employerId: "emp-001",
    title: "Frontend React Developer",
    description:
      "We are looking for a React developer to build responsive UI components using React, TypeScript, and Tailwind CSS. Experience with Redux Toolkit and API integration is required.",
    skillsRequired: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "REST API",
    ],
    budget: 1200,
    jobType: EJobType.FIXED,
    status: EJobStatus.OPEN,
    aiEnhanced: true,
  },
  {
    id: "job-002",
    employerId: "emp-002",
    title: "Next.js Full Stack Developer",
    description:
      "Build and maintain a modern web application using Next.js, Prisma, PostgreSQL, and Node.js. Knowledge of authentication and deployment is preferred.",
    skillsRequired: [
      "Next.js",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
    ],
    budget: 35,
    jobType: EJobType.HOURLY,
    status: EJobStatus.OPEN,
    aiEnhanced: true,
  },
  {
    id: "job-003",
    employerId: "emp-003",
    title: "Backend API Developer",
    description:
      "Develop secure REST APIs using Express.js and MongoDB. Implement authentication, validation, and API documentation.",
    skillsRequired: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
    budget: 1800,
    jobType: EJobType.FIXED,
    status: EJobStatus.FILLED,
    aiEnhanced: false,
  },
  {
    id: "job-004",
    employerId: "emp-004",
    title: "UI/UX Designer",
    description:
      "Design modern, user-friendly interfaces for a SaaS platform. Create wireframes, prototypes, and design systems in Figma.",
    skillsRequired: [
      "Figma",
      "UI Design",
      "UX Research",
      "Prototyping",
      "Design Systems",
    ],
    budget: 28,
    jobType: EJobType.HOURLY,
    status: EJobStatus.OPEN,
    aiEnhanced: true,
  },
  {
    id: "job-005",
    employerId: "emp-005",
    title: "GraphQL Developer",
    description:
      "Implement GraphQL APIs with Apollo Server and optimize database queries. Experience with Prisma and PostgreSQL is a plus.",
    skillsRequired: [
      "GraphQL",
      "Apollo Server",
      "Prisma",
      "PostgreSQL",
      "TypeScript",
    ],
    budget: 2200,
    jobType: EJobType.FIXED,
    status: EJobStatus.CLOSED,
    aiEnhanced: false,
  },
];

const page = () => {
  return (
    <>
      <JobsHeader />
      <JobsFilters />
      <JobsGrid jobs={demoJobs} />
    </>
  );
};

export default page;
