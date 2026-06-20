import HeroSection from "@/components/About/HeroSection";
import HowHiredNowWorksSection from "@/components/About/HowHiredNowWorksSection";
import OurMissionSection from "@/components/About/OurMissionSection";
import OurSolutionSection from "@/components/About/OurSolutionSection";
import TheProblemWeSolveSection from "@/components/About/TheProblemWeSolveSection";

const page = () => {
  return (
    <>
      <HeroSection />
      <OurMissionSection />
      <TheProblemWeSolveSection />
      <OurSolutionSection />
      <HowHiredNowWorksSection />
    </>
  );
};

export default page;
