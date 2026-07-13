import WelcomeCard from "@/components/Dashboard/employer/WelcomeCard";
import StatsCards from "../../../components/Dashboard/employer/StatsCards";
import QuickActions from "@/components/Dashboard/employer/QuickActions";
import RecentApplications from "@/components/Dashboard/employer/RecentApplications";

const page = () => {
  return (
    <>
      <WelcomeCard />
      <StatsCards />
      <QuickActions />
      <RecentApplications />
    </>
  );
};

export default page;
