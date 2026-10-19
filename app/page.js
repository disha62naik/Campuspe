import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Discovery from "@/components/Discovery";
import ResumeUpload from "@/components/ResumeUpload";
import Colleges from "@/components/Colleges";
import Employers from "@/components/Employers";
import AppShowcase from "@/components/AppShowcase";
import DownloadApp from "@/components/DownloadApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Discovery />
        <ResumeUpload />
        <Colleges />
        <Employers />
        <AppShowcase />
        <DownloadApp />
      </main>
      <Footer />
    </>
  );
}
