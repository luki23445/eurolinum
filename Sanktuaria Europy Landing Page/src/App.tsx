import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Introduction } from "./components/Introduction";
import { KeyInfo } from "./components/KeyInfo";
import { RouteMap } from "./components/RouteMap";
import { PracticalInfo } from "./components/PracticalInfo";
import { DailyProgram } from "./components/DailyProgram";
import { InterestingFacts } from "./components/InterestingFacts";
import { Gallery } from "./components/Gallery";
import { PriceDetails } from "./components/PriceDetails";
import { Testimonials } from "./components/Testimonials";
import { Organizer } from "./components/Organizer";
import { ReservationForm } from "./components/ReservationForm";
import { OtherTrips } from "./components/OtherTrips";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Introduction />
        <KeyInfo />
        <RouteMap />
        <PracticalInfo />
        <DailyProgram />
        <InterestingFacts />
        <Gallery />
        <PriceDetails />
        <Testimonials />
        <Organizer />
        <ReservationForm />
        <OtherTrips />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
