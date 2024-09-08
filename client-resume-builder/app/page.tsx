import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/page-sections/home/hero-section";

export default function Home() {
  return (
    <section className="">
      <Navbar />
      <div className="">
        <HeroSection />
      </div>
      <div className="">
        <Footer />
      </div>
    </section>
  );
}
