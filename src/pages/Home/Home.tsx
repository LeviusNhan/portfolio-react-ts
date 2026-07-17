import Navbar from "../../components/layout/Navbar/Navbar";
import SidebarSocial from "../../components/layout/SidebarSocial/SidebarSocial";
import Hero from "../../components/sections/Hero/Hero";
import Quote from "../../components/sections/Quote/Quote";
import Projects from "../../components/sections/Projects/Projects";
import Skills from "../../components/sections/Skills/Skills";
import About from "../../components/sections/About/About";
import Contacts from "../../components/sections/Contacts/Contacts";
import Footer from "../../components/layout/Footer/Footer";
import PageTransition from "../../components/common/PageTransition/PageTransition";
function Home() {
  return (
    <main className="min-h-screen bg-[#282C33] font-['Fira_Code'] text-white">  
    <SidebarSocial />
    <PageTransition>
        <div className="relative mx-auto w-full max-w-[1024px] px-4 lg:px-0">
          <Navbar />
          <Hero />
          <Quote />
          <Projects />
          <Skills />
          <About />
          <Contacts />
          <Footer />
        </div>
     </PageTransition>
    </main>
  );
}

export default Home;