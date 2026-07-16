import Navbar from "../../components/layout/Navbar/Navbar";
import SidebarSocial from "../../components/layout/SidebarSocial/SidebarSocial";
import Footer from "../../components/layout/Footer/Footer";

import AboutHero from "../../components/sections/About/AboutHero";
import AboutSkills from "../../components/sections/About/AboutSkills";
import AboutFacts from "../../components/sections/About/AboutFacts";
import AboutAboutTimeline from "../../components/sections/About/AboutTimeline";

function About() {
  return (
    <div className="text-white">
      <Navbar />

      <SidebarSocial />

      <main>
        <AboutHero />

        <AboutSkills />

        <AboutFacts />

        <AboutAboutTimeline />
      </main>

      <Footer />
    </div>
  );
}

export default About;