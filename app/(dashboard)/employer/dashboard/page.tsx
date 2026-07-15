import WelcomeCard from "@/components/Dashboard/employer/WelcomeCard";
import StatsCards from "@/components/Dashboard/employer/StatsCards";
import QuickActions from "@/components/Dashboard/employer/QuickActions";
import RecentApplications from "@/components/Dashboard/employer/RecentApplications";
import ActivityTimeline from "@/components/Dashboard/employer/ActivityTimeline";

const page = () => {
  return (
    <>
      <WelcomeCard />
      <StatsCards />
      <QuickActions />
      <RecentApplications />
      <ActivityTimeline />
    </>
  );
};

export default page;
