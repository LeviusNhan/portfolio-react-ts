import Navbar from "../../components/layout/Navbar/Navbar";
import SidebarSocial from "../../components/layout/SidebarSocial/SidebarSocial";
import Hero from "../../components/sections/Hero/Hero";

function Home() {
  return (
    <div className="min-h-screen bg-[#282C33] font-['Fira_Code'] text-white">
      <div className="relative mx-auto w-full max-w-[1024px] px-4 lg:px-0">
        <Navbar />
        <SidebarSocial />
        <Hero />
      </div>
    </div>
  );
}

export default Home;