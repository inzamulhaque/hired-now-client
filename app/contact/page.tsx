import ContactForm from "@/components/Contact/ContactForm";
import ContactHeroSection from "@/components/Contact/ContactHeroSection";
import ContactOptionsSection from "@/components/Contact/ContactOptionsSection";

const page = () => {
  return (
    <>
      <ContactHeroSection />
      <ContactOptionsSection />
      <ContactForm />
    </>
  );
};

export default page;
