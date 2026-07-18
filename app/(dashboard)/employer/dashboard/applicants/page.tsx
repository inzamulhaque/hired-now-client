import ApplicantsGrid from "@/components/Dashboard/employer/applicants/ApplicantsGrid";
import ApplicantsHeader from "@/components/Dashboard/employer/applicants/ApplicantsHeader";
import { EApplicationStatus, TApplicant } from "@/types";

const applicants: TApplicant[] = [
  {
    id: "1",
    jobId: "job1",
    freelancerId: "user1",

    coverNote:
      "I have 5+ years of experience building scalable Next.js applications.",

    status: EApplicationStatus.PENDING,

    proposedBudget: 500,

    aiMatchScore: 92,

    freelancer: {
      name: "John Doe",
      image: "/images/user.jpg",
      title: "Senior Frontend Developer",
      skills: ["React", "Next.js", "TypeScript", "Prisma"],
    },

    job: {
      title: "Senior Next.js Developer",
    },
  },
];

const page = () => {
  return (
    <>
      <ApplicantsHeader />
      <ApplicantsGrid applicants={applicants} loading={false} />
    </>
  );
};

export default page;
