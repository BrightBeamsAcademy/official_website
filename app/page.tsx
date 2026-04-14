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

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Classes />
      <Facility />
      {/* <Teachers /> */}
      {/* <Events /> */}
      <TestimonialFAQ />
      <CTA />
      <Gallery />
      {/* <News /> */}
      <Footer />
    </main>
  );
}
