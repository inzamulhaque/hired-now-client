import JobsFilters from "@/components/Dashboard/employer/jobs/JobsFilters";
import JobsHeader from "@/components/Dashboard/employer/jobs/JobsHeader";

const page = () => {
  return (
    <>
      <JobsHeader />
      <JobsFilters />
    </>
  );
};

export default page;
