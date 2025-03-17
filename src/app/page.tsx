import { Orbit } from "@/components/home/body/Orbit";
import Footer from "@/components/home/footer/Footer";
import Header from "@/components/home/header/Header";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="px-9 py-3.5 z-40">
        <Header />
        <Orbit />
        <Footer />
      </div>
      <BackgroundBeams />
    </div>
  );
}
