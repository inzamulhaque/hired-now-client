import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import PageTransition from "@/components/shared/PageTransition";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </>
  );
}
