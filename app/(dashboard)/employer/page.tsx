import WelcomeCard from "@/components/Dashboard/employer/WelcomeCard";
import StatsCards from "../../../components/Dashboard/employer/StatsCards";
import QuickActions from "@/components/Dashboard/employer/QuickActions";

const page = () => {
  return (
    <>
      <WelcomeCard />
      <StatsCards />
      <QuickActions />
    </>
  );
};

export default page;
