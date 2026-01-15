import AboutHero from "@/components/about/AboutHero";
import StoryCards from "@/components/about/StoryCards";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import ValuesGrid from "@/components/about/ValuesGrid";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="space-y-24 py-20">
      <AboutHero />
      <StoryCards />
      <JourneyTimeline />
      <ValuesGrid />
      <AboutCTA />
    </main>
  );
}
