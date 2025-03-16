import ContactSection from "@/components/contact";
import CommunitySection from "@/components/content";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/HeroSection";
import OurServices from "@/components/OurServices";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <HeroSection />
        <OurServices />
        <CommunitySection />
        <ContactSection />
        <FooterSection />
      </div>
    </main>
  );
}
