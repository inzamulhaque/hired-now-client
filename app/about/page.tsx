import AboutHeroSection from "@/components/About/AboutHeroSection";
import HowHiredNowWorksSection from "@/components/About/HowHiredNowWorksSection";
import OurMissionSection from "@/components/About/OurMissionSection";
import OurSolutionSection from "@/components/About/OurSolutionSection";
import PlatformStatisticsSection from "@/components/About/PlatformStatisticsSection";
import TheProblemWeSolveSection from "@/components/About/TheProblemWeSolveSection";

const page = () => {
  return (
    <>
      <AboutHeroSection />
      <OurMissionSection />
      <TheProblemWeSolveSection />
      <OurSolutionSection />
      <HowHiredNowWorksSection />
      <PlatformStatisticsSection />
    </>
  );
};

export default page;
