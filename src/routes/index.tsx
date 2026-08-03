import { createFileRoute } from "@tanstack/react-router";
import { BackToTop, Chatbot, Loader, Nav, Particles, ScrollProgress } from "@/components/site/Chrome";
import { Hero } from "@/components/site/Hero";
import { About, Benefits, Journey, R5Cards, SmartWaste } from "@/components/site/Sections";
import { Dashboard, Gallery, Quiz, WasteCalculator } from "@/components/site/Interactive";
import { Contact, Footer, Team } from "@/components/site/Closing";

const title = "R5 for Waste Management – Smart Solutions for a Sustainable Future";
const description =
  "An NCSC science project on Reduce, Reuse, Retrieve, Redesign and Recycle: interactive waste journey, quiz, waste calculator and sustainability dashboard.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: title,
          description,
          educationalUse: "Science exhibition project",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Particles />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <R5Cards />
        <Journey />
        <Benefits />
        <SmartWaste />
        <Gallery />
        <Quiz />
        <WasteCalculator />
        <Dashboard />
        <Team />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Chatbot />
    </>
  );
}
