import Navbar from "../../components/layout/Navbar/Navbar";
import SidebarSocial from "../../components/layout/SidebarSocial/SidebarSocial";
import Hero from "../../components/sections/Hero/Hero";
import Quote from "../../components/sections/Quote/Quote";
import Projects from "../../components/sections/Projects/Projects";
import Skills from "../../components/sections/Skills/Skills";
import About from "../../components/sections/About/About";
import Contacts from "../../components/sections/Contacts/Contacts";
import Footer from "../../components/layout/Footer/Footer";
function Home() {
  return (
    <div className="min-h-screen bg-[#282C33] font-['Fira_Code'] text-white">
      <div className="relative mx-auto w-full max-w-[1024px] px-4 lg:px-0">
        <Navbar />
        <SidebarSocial />
        <Hero />
        <Quote />
        <Projects />
        <Skills />
        <About />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}

export default Home;