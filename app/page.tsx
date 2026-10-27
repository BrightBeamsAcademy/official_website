import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Classes from "./components/Classes";
import Facility from "./components/Facility";
// import Teachers from "./components/Teachers";
// import Events from "./components/Events";
import TestimonialFAQ from "./components/TestimonialFAQ";
import CTA from "./components/CTA";
import Gallery from "./components/Gallery";
// import News from "./components/News";
import Footer from "./components/Footer";
import { homeJsonLd, homeSeo, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(homeSeo);

export default function Home() {
  const jsonLd = JSON.stringify(homeJsonLd()).replace(/</g, "\\u003c");

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <Header />
      <Hero />
      <About />
      <Classes />
      <Gallery />
      <Facility />
      {/* <Teachers /> */}
      {/* <Events /> */}
      {/* <TestimonialFAQ /> */}
      <CTA />
      {/* <News /> */}
      <Footer />
    </main>
  );
}
